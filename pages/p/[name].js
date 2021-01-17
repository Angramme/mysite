import Layout from "../../components/layout"
import Block from "../../components/block"
import AnimatedBackground from "../../components/AnimatedBackground"
import Footer from "../../components/footer"
import Link from "next/link"
import Head from "next/head"

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark as dark} from 'react-syntax-highlighter/dist/cjs/styles/prism'

import styles from "../../styles/project.module.sass"

import {IconContext} from "react-icons"
import {CgSoftwareDownload as CgRelease, CgDanger, CgPlayButtonO, CgArrowTopLeftR as Arrow} from "react-icons/cg"
import {FaGithub} from "react-icons/fa"

import ReactMarkdown from 'react-markdown'

import {get_repo, GITHUB_RATE_LIMIT, get_repos} from "../../lib/repos"

export async function getStaticProps({params}){
    const project = await get_repo(params.name);

    return {
        props: {
            project,
        },
        revalidate: GITHUB_RATE_LIMIT, //re-render
    }
}
export async function getStaticPaths(){
    const paths = await get_repos().then(X=>X
        // .filter(x=>x.readme_md.length>0)
        .map(x=>({ params: { name: x.name } }))
        )
    return {
        paths,
        fallback: false
    }
}

const md_renderers = {
    // text: ({value})=><div>{value}</div>
    image: ({alt, src})=><div className={styles.md_image}>
        <a href={src} target="_blank">
            <img src={src} alt={alt}></img>
        </a>
        <div className={styles.md_img_desc}>{alt.trim()}</div>
    </div>,
    heading: ({children})=><h1 className={styles.md_heading}>{children}</h1>,
    link: ({children, href})=><a href={href} target="_blank" className={styles.md_link}>{children}</a>,
    code: ({language, value}) => <SyntaxHighlighter style={dark} language={language} children={value} />,
}

export default function Project({project}){
    return <>
    <AnimatedBackground></AnimatedBackground>
    <Layout>
        <Head>
            <title>{project.name}</title>
            <link rel="icon" href="/profile-trans.png"/>
            <meta name="description" content={project.description}/>
        </Head>

        <h1 className={css_helpers.SEO_header}>Kacper Ozieblowski</h1>
        <h1 className={css_helpers.SEO_header}>Sorbonne University</h1>
        <h1 className={css_helpers.SEO_header}>{project.name}</h1>

        <IconContext.Provider value={{style: { verticalAlign: 'middle' }}}>
            <Block className={styles.banner} style={{backgroundImage:`url(${project.img})`}}>
                <h1 className={styles.title}>{project.name}</h1>
                <div className={styles.options}>
                    {!project.live ? "" : <a href={project.live} target="_blank"><div><CgPlayButtonO/> Live Demo</div></a>}
                    {!project.latest_release ? "" : <a href={project.latest_release.html_url} target="_blank"><div><CgRelease/> {project.latest_release.tag_name}</div></a>}
                    <a href={project.repo_page_url} target="_blank"><div><FaGithub/> GitHub</div></a>
                </div>
            </Block>
            <Block>
                <ReactMarkdown 
                    className={styles.md}
                    children={project.readme_md}
                    renderers={md_renderers}
                    ></ReactMarkdown>
                {project.readme_md.length==0?
                    <div className={styles.no_readme}>
                        <CgDanger/> Sorry, this project doesn't have a readme
                    </div>:""}
            </Block>
            <Link href="/projects"><div className={styles.back_btn}> <Arrow></Arrow> go back </div></Link>
        </IconContext.Provider>
    </Layout>
    <Footer></Footer>
    </>
}