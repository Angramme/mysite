import Head from 'next/head'
import Menubar from "../components/menubar"
import Layout from "../components/layout"
// import Block from "../components/block"
import Proj from "../components/project_banner"
import Footer from "../components/footer"
import AnimBackground from "../components/AnimatedBackground"
// import random_sentences from "../helpers/sentences"

import css_helpers from "../styles/organisation.module.sass"
import {get_repos, GITHUB_RATE_LIMIT} from "../lib/repos"

export async function getStaticProps(){
    const projects = await get_repos();

    return {
        props: {
            projects,
        },
        revalidate: GITHUB_RATE_LIMIT, //re-render
    }
}

export default function Projects({projects}){
    return (
        <>
        <Head>
            <title>About</title>
            <link rel="icon" href="profile-trans.png"/>
        </Head>
        <Menubar></Menubar>
        <AnimBackground></AnimBackground>
        <Layout>
            <h1 style={{fontSize:"8vh"}}>Projects:</h1>
            {projects.map((e, i)=>{
                return <Proj project={e} key={e.id}>
                </Proj>
            })}
        </Layout>
        <Footer></Footer>
        </>
    )
}