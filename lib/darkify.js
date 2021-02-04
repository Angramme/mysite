import { useDarkMode } from "next-dark-mode"

export function themify(...args){
    const darkmode = useDarkMode().darkModeActive;
    return (darkmode ? darkify : lightify)(...args);
}

export function lightify(styles, suffix="_dark"){
    let nobj = {};
    for(let s in styles){
        if(s.slice(-suffix.length) == suffix) continue;
        nobj[s] = styles[s];
    }
    return nobj;
}

export function darkify(styles, suffix="_dark"){
    let nobj = {};
    for(let s in styles){
        const k = s.slice(-suffix.length) != suffix ? s : s.slice(0, -suffix.length);
        if(!nobj[k]) nobj[k] = "";
        nobj[k] += styles[s] + " ";
    }
    if(styles[suffix]){
        for(let s in nobj){
            nobj[s] += " "+styles[suffix];
        }
    }
    return nobj;
}