import seed from "seed-random"

const rand = seed("yabadabadoo");

export default function random_sentences(n){
    let out = "";
    for(let i=0; i<n; i++){
        let word = "";
        for(let j=0, jn=2+rand()*8|0; j<jn; j++){
            word += "azehvosnvksqdfbqdfbqfb"[rand()*15|0];
        }
        out += word + " ";
    }
    return out;
}