import styles_raw from "../styles/project_banner.module.sass"
import {themify} from "../lib/darkify"

import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from 'react-markdown'

import {IconContext} from "react-icons"

import {CgSoftwareDownload as CgRelease, CgPlayButtonO, CgReadme, CgDetailsMore} from "react-icons/cg"

import {FaGithub} from "react-icons/fa"




const MAX_DESC_LEN = 5;

function firstNlines(str, N){
    return str.substring(0, N*60);
}
const md_renderers = styles=>({
    // text: ({value})=><div>{value}</div>
    image: ({alt})=><i>[{alt}]</i>,
    heading: ({children})=><h3>{children}</h3>,
    link: ({children, href})=><a href={href} target="_blank" className={styles.md_link}>{children}</a>,
})

export default function Project({project}){
    const styles = themify(styles_raw);

    const proj_page = "/p/["+project.name+"]";
    const proj_page_as = "/p/"+project.name;
    const no_desc = project.readme_md.length == 0 || project.image_only;
    return <IconContext.Provider value={{style: { verticalAlign: 'middle' }}}>
    <div className={styles.project}>

        <div className={styles.left}>
            <div className={styles.title}>{project.alias || project.name}</div>
            <div className={styles.little_desc}>
                {project.description}
            </div>
            <div className={styles.language}>:: {project.language}</div>

                <div className={styles.options}>
                    {!project.live ? "" : <a href={project.live} target="_blank" rel="noopener"><div><CgPlayButtonO/> Website</div></a>}
                    <Link href={proj_page} as={proj_page_as}><div><CgReadme/> About</div></Link>
                    <a href={project.repo_page_url} target="_blank" rel="noopener"><div><FaGithub/> GitHub</div></a>
                    {!project.latest_release ? "" : <a href={project.latest_release.html_url} target="_blank" rel="noopener"><div><CgRelease/> {project.latest_release.tag_name}</div></a>}
                </div>
            </div>
            <div className={styles.right}>
                <div className={no_desc ? styles.img_container_full : styles.img_container}>
                    <Image 
                        layout="fill" 
                        className={styles.img} 
                        src={project.img} 
                        alt={`banner image of project ${project.name}`}
                        quality={80}
                        sizes="50vh"
                        />
                </div>
                {no_desc ? "" : <>
                    <div className={styles.desc}>
                        <ReactMarkdown 
                            children={firstNlines(project.readme_md, MAX_DESC_LEN)+"..."} 
                            components={md_renderers(styles)}
                            className={styles.markdown}>
                        </ReactMarkdown>
                        <div className={styles.desc_cutoff}></div>
                    </div>
                    <Link href={proj_page} as={proj_page_as}>
                        <div className={styles.readMore}> <CgDetailsMore/> read more</div>
                    </Link>
                </>}
            </div>
        </div>
    </IconContext.Provider>

}