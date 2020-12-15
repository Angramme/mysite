
// import data from "../data/projects.json"
import data from "../data/projects.yaml"

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
            const dt = data[x.name]
            if(dt)
                for(let k in dt){
                    x[k] = dt[k];
                }
            return x
        })
    ))
    .then(x=>x.filter(e=>!e.hide))
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
