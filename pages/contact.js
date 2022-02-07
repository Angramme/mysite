import Layout from "../components/layout"
import Footer from "../components/footer"
import MenuBar from "../components/menubar"
import Block from "../components/block"
import Head from "next/head"
import AnimatedBackground from "../components/AnimatedBackground"

import css_helpers from "../styles/organisation.module.sass"

import { IconContext } from 'react-icons'
import { FaGithub, FaReddit, FaInstagram } from "react-icons/fa"
import {CgMail} from "react-icons/cg"
import {AiFillLinkedin} from "react-icons/ai"
import { themify } from "../lib/darkify"

export default function Contact(){
    const styles = themify(require('../styles/contact.module.sass'))
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
                        <li><CgMail/> 
                            {/* email: Kacper.Ozieblowski@etu.sorbonne-universite.fr */}
                            <span className={styles.email1}></span>
                            <span className={styles.email2}></span>
                            <span className={styles.email3}></span>
                            <span className={styles.email4}></span>
                            <span className={styles.email5}></span>
                        </li>
                        <li><FaGithub/> concerning a project write an issue
                            on one of my repos. (
                            <a href="https://github.com/Angramme" target="_blank" rel="noopener" style={{textDecoration:"underline"}}>My GitHub</a>)
                        </li>
                        <li><FaReddit/> reddit: u/Angramme</li>
                        <li><AiFillLinkedin/> LinkedIn: <a href="https://www.linkedin.com/in/kacper-ozieblowski" target="_blank" rel="noopener" style={{textDecoration:"underline"}}>
                            in/kacper-ozieblowski
                        </a></li>
                        <li><FaInstagram/> Instagram: <a href="https://www.instagram.com/shaderfun/" target="_blank" rel="noopener" style={{textDecoration:"underline"}}>
                            @shaderfun
                        </a></li>
                    </ul>
                </IconContext.Provider>
            </Block>
        </Layout>
        <Footer/>
    </>)
}