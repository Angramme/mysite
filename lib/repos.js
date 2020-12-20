
// import data from "../data/projects.json"
import data from "../data/projects.yaml"

import getMdImage from 'get-md-image';

const ME = "Angramme";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const AU = "https://api.github.com"

export async function get_repos(){
    return fetch(AU+`/users/${ME}/repos?type=owner&sort=updated`, {
        headers:{
            "Authorization": "token "+GITHUB_TOKEN,
        }
    })
    .then(x=>x.json())
    .then(L=>Promise.all(
        L
        .map(async x=>{
            x.readme_md = await get_readme(x.url);
            x.repo_page_url = `https://github.com/${ME}/${x.name}`;
            const dt = data[x.name]
            if(dt)
                for(let k in dt){
                    x[k] = dt[k];
                }
            if(!x.img)
                x.img = get_image_url(x);
            return x
        })
    ))
    .then(x=>{
        const sortobj = data.___pinned.reduce((x, e, i)=>{x[e] = i+1; return x}, {});
        const sortord = x=>sortobj[x.name] || data.___pinned.length + x.id;
        return x
        .filter(e=>!e.hide)
        .sort((a, b)=>sortord(a) - sortord(b))
    })
}

function get_image_url(x){
    const img = getMdImage(x.readme_md);
    if(!img) return null;
    return `https://raw.githubusercontent.com/${ME}/${x.name}/${x.default_branch}${img.src}`;
}

async function get_readme(url){
    return fetch(url+"/readme", {
        headers:{
            "Accept": "application/vnd.github.v3.raw+json",
            "Authorization": "token "+GITHUB_TOKEN,
        }
    })
    .then(x=>x.status == 200 ? x.text() : "")
    // .then(x=>x.json())
    // .then(console.log)
    // .then(x=>x.text())

    return ""
}
