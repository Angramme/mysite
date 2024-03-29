
// import data from "../data/projects.json"
import data from "../data/projects.yaml"

const ME = "Angramme";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const AU = "https://api.github.com"

export const GITHUB_RATE_LIMIT = 5*60; // in seconds, including loading all the repos at once.
global.last_reloaded = null;
global.__reposjs__cached_repos = null;

global.reloading_now = false;
global.reload_cbs = [];
async function update_if_needed(){
    const now = Date.now()/1000;
    if(!global.last_reloaded || !global.__reposjs__cached_repos 
        || now - global.last_reloaded > GITHUB_RATE_LIMIT-2){
            if(global.reloading_now){
                return new Promise(resolve=>global.reload_cbs.push(resolve));
            }else{
                global.last_reloaded = now;
                global.reloading_now = true;
                await reload_repos();
                global.reloading_now = false;
                global.reload_cbs.forEach(x=>x());
                global.reload_cbs = [];
            }
        }
}

export async function get_repo(name){
    await update_if_needed();
    return global.__reposjs__cached_repos.find(v=>v.name==name);
}
export async function get_repos(){
    await update_if_needed();
    return global.__reposjs__cached_repos;
}

export async function reload_repos(){
    console.log("reloading repos...");
    global.__reposjs__cached_repos = await fetch(AU+`/users/${ME}/repos?type=owner&sort=updated`, {
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
            x.readme_md = x.readme_md.replace(/!\[(.*)\]\((.+)\)/gi, 
                (s, alt, src)=>`![${alt}](${get_image_url(x, src)})`)
            x.latest_release = await get_latest_release(x);
            if(!x.img){
                x.img = get_image_url_from_md(x) || "/code-zoom.jpg";
            }else if(x.img.substr(0, 4) != 'http'){
                x.img = x.img[0]=='/' ? x.img : '/'+x.img;
            }
            if(!x.live && x.homepage) x.live = x.homepage;
            return {
                id: x.id,
                name: x.name,
                readme_md: x.readme_md,
                image_only: x.image_only || null,
                alias: x.alias || null,
                description: x.description,
                language: x.language,
                live: x.live || null,
                repo_page_url: x.repo_page_url,
                latest_release: !x.latest_release ? null : {
                    html_url: x.latest_release.html_url,
                    tag_name: x.latest_release.tag_name,
                },
                img: x.img,
            }
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


function get_image_url_from_md(proj){
    const x = proj.readme_md.match(/!\[(.*)\]\((.+)\)/);
    if(x)
        return x[2];
    return null;
}
function get_image_url(proj, img){
    if(img[0] != '/') img = '/' + img;
    return `https://raw.githubusercontent.com/${ME}/${proj.name}/${proj.default_branch}${img}`
}
async function get_latest_release(proj){
    return fetch(AU+`/repos/${ME}/${proj.name}/releases/latest`, {
        headers:{
            Accept: "application/vnd.github.v3+json",
            Authorization: "token "+GITHUB_TOKEN,
        }
    })
    .then(x=>x.status==200 ? x.json() : null)
}

async function get_readme(url){
    return fetch(url+"/readme", {
        headers:{
            "Accept": "application/vnd.github.v3.raw+json",
            "Authorization": "token "+GITHUB_TOKEN,
        }
    })
    .then(x=>x.status == 200 ? x.text() : "")
}
