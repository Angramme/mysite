import { SitemapStream, streamToPromise } from "sitemap";

import { get_repos } from "../../lib/repos";

export default async (req, res) => {
    try{
        const smStream = new SitemapStream({
            hostname: `https://${req.headers.host}`,
            cacheTime: 600000,
        });

        smStream.write({
            url: `/`,
            changefreq: "daily",
            priority: 1.0,
            img: [ 
                { url: `https://${req.headers.host}/me.jpg` }, 
                { url: `https://${req.headers.host}/profile-trans.png` }, 
            ],
            links: [
                { lang: 'en', url: `https://${req.headers.host}/` },
                { lang: 'en', url: `https://${req.headers.host}/projects` },
                { lang: 'en', url: `https://${req.headers.host}/contact` },
            ],
        });

        smStream.write({
            url: `/contact`,
            changefreq: "daily",
            priority: 0.6,
            img: [ 
                { url: `https://${req.headers.host}/profile-trans.png` }, 
            ],
            links: [
                { lang: 'en', url: `https://${req.headers.host}/` },
                { lang: 'en', url: `https://${req.headers.host}/projects` },
                { lang: 'en', url: `https://${req.headers.host}/contact` },
            ],
        });

        const repos = await get_repos();

        smStream.write({
            url: `/projects`,
            changefreq: "daily",
            priority: 0.8,
            img: ([ { url: `https://${req.headers.host}/profile-trans.png` },]
                + repos.map(x=>({ url:x.img, caption:x.name }))
            ),
            links: ([
                { lang: 'en', url: `https://${req.headers.host}/` },
                { lang: 'en', url: `https://${req.headers.host}/projects` },
                { lang: 'en', url: `https://${req.headers.host}/contact` },
            ].concat(repos
                .map(x=>({ lang: 'en', url: `https://${req.headers.host}/p/${x.name}` }))
            )),
        });


        smStream.end();
        res.writeHead(200, { "Content-Type": "application/xml" });
        res.end((await streamToPromise(smStream)).toString());

    }catch(err){
        console.log(err);
        res.send(JSON.stringify(err));
    }
};