import styles from "./project_banner.module.sass"
import sentences from "../lib/helpers/sentences"

import Link from "next/link"
import ReactMarkdown from 'react-markdown'

import {IconContext} from "react-icons"
import {CgPlayButtonO, CgReadme} from "react-icons/cg"
import {FaGithub} from "react-icons/fa"




const MAX_DESC_LEN = 5;
function regexIndexOf(str, regex, startpos) {
    var indexOf = str.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}
function firstNlines(str, N){
    let n = 0;
    let i = 0;
    while(n<N){
        n++;
        let ni = regexIndexOf(str, /\n/, i)
        if(ni == -1)
            break
        let ni2 = regexIndexOf(str, /[^\n]/, ni)
        i = ni2
    }
    return str.substring(0, i);
}
const md_renderers = {
    // text: ({value})=><div>{value}</div>
    heading: ({children})=><h3>{children}</h3>
}

export default function Project({project}){
    return <div className={styles.project}>
        <div className={styles.left}>
            <div className={styles.title}>{project.alias || project.name}</div>
            <div className={styles.little_desc}>
                {project.description}
            </div>
            <div className={styles.language}>:: {project.language}</div>
            <IconContext.Provider value={{style: { verticalAlign: 'middle' }}}>
                <div className={styles.options}>
                    <div><CgReadme/> About</div>
                    <div><FaGithub/> GitHub</div>
                    {!project.live ? "" : <a href={project.live} target="_blank"><div><CgPlayButtonO/> Live Demo</div></a>}
                </div>
            </IconContext.Provider>
        </div>
        <div>
            <div className={project.readme_md.length < 2 ? 
                styles.img_container_full : styles.img_container}>
                <img className={styles.img} src={project.img || "/stars2.jpg"}></img>
            </div>
            {project.readme_md.length < 2 ? "" : 
            <div className={styles.desc}>
                {/* {sentences(80)} */}
                {/* <div dangerouslySetInnerHTML={{__html: project.readme_html}}></div> */}
                <ReactMarkdown 
                    children={firstNlines(project.readme_md, MAX_DESC_LEN)+"..."} 
                    renderers={md_renderers}
                    className={styles.markdown}></ReactMarkdown>

                <div className={styles.readMore}> > read more</div>
            </div>}
        </div>
    </div>
}