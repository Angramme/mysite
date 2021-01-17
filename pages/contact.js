import Layout from "../components/layout"
import Footer from "../components/footer"
import MenuBar from "../components/menubar"
import Block from "../components/block"
import Head from "next/head"
import AnimatedBackground from "../components/AnimatedBackground"

import { IconContext } from 'react-icons'
import {FaGithub, FaReddit} from "react-icons/fa"
import {CgMail} from "react-icons/cg"

export default function Contact(){
    return (<>
        <Head>
            <title>Contact</title>
            <link rel="icon" href="/profile-trans.png"/>
            <meta name="description" content="email: Kacper.Ozieblowski@etu.sorbonne-universite.fr"/>
        </Head>
        <AnimatedBackground/>
        <Layout>
            <h1 className={css_helpers.SEO_header}>Kacper Ozieblowski</h1>
            <h1 className={css_helpers.SEO_header}>Sorbonne University</h1>
            <h1 className={css_helpers.SEO_header}>Contact</h1>

            <MenuBar></MenuBar>
            <Block title="Contact" style={{textIndent:0, padding:"2rem", wordBreak:"break-word"}}>
                You can contact me by:
                <IconContext.Provider value={{style: { verticalAlign: 'middle' }}}>
                    <ul>
                        <li><CgMail/> email: Kacper.Ozieblowski@etu.sorbonne-universite.fr</li>
                        <li><FaGithub/> concerning a project write an issue
                            on one of my repos</li>
                        <li><FaReddit/> reddit: u/Angramme</li>
                    </ul>
                </IconContext.Provider>
            </Block>
        </Layout>
        <Footer/>
    </>)
}