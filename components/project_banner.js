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
    return str.substring(0, N*60);
}
const md_renderers = {
    // text: ({value})=><div>{value}</div>
    image: ({alt})=><i>[{alt}]</i>,
    heading: ({children})=><h3>{children}</h3>,
    link: ({children, href})=><a href={href} target="_blank" className={styles.md_link}>{children}</a>,
}

export default function Project({project}){  
    const no_desc = project.readme_md.length == 0 || project.image_only;
    return <div className={styles.project}>
        <div className={styles.left}>
            <div className={styles.title}>{project.alias || project.name}</div>
            <div className={styles.little_desc}>
                {project.description}
            </div>
            <div className={styles.language}>:: {project.language}</div>
            <IconContext.Provider value={{style: { verticalAlign: 'middle' }}}>
                <div className={styles.options}>
                    {!project.live ? "" : <a href={project.live} target="_blank"><div><CgPlayButtonO/> Live Demo</div></a>}
                    <div><CgReadme/> About</div>
                    <a href={project.repo_page_url} target="_blank"><div><FaGithub/> GitHub</div></a>
                </div>
            </IconContext.Provider>
        </div>
        <div className={styles.right}>
            <div className={no_desc ? styles.img_container_full : styles.img_container}>
                <img className={styles.img} 
                    src={project.img || "/code.jpeg"} alt="banner image"></img>
            </div>
            {no_desc ? "" : 
            <div className={styles.desc}>
                <div className={styles.desc_cutoff}>
                    <ReactMarkdown 
                        children={firstNlines(project.readme_md, MAX_DESC_LEN)+"..."} 
                        renderers={md_renderers}
                        className={styles.markdown}>
                    </ReactMarkdown>
                </div>

                <div className={styles.readMore}> > read more</div>
            </div>}
        </div>
    </div>
}