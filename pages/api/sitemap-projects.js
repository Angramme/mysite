import { SitemapStream, streamToPromise } from "sitemap";

import { get_repos } from "../../lib/repos";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    await get_repos()
    .then((x) => x.forEach((proj) =>
      smStream.write({
        url: `/p/${proj.name}`,
        changefreq: "weekly",
        priority: 0.6,
        img: [
          {
            url: proj.img,
            caption: proj.name,
          }, 
        ],
        links: [
          { lang: 'en', url: proj.repo_page_url },
          { lang: 'en', url: `https://${req.headers.host}/projects` }
        ],
      }))
    ).then(()=>{
      smStream.end();
      return streamToPromise(smStream);
    }).then(sitemapOutput=>{
      res.writeHead(200, {
        "Content-Type": "application/xml",
      });
      res.end(sitemapOutput.toString());
    })
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
