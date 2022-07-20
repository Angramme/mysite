import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"
import Menubar from "../components/menubar"
import Layout from "../components/layout"
import Block from "../components/block"
import Footer from "../components/footer"
import AnimBackground from "../components/AnimatedBackground"
// import random_sentences from "../helpers/sentences"


import { IconContext } from 'react-icons'
import {CgWebsite as Arrow} from "react-icons/cg"

import styles_raw from "../styles/index.module.sass"
import { themify } from '../lib/darkify'

import css_helpers from "../styles/organisation.module.sass"
import DisplayArt from '../components/DisplayArt'
// import ScrollRoll from '../components/ScrollRoll'

export default function  Home(){
    const styles = themify(styles_raw);
    const B = ({children})=>(<span className={styles.bold}>{children}</span>);
    return (
        <>
        <Head>
            <title>About</title>
            <link rel="icon" href="/profile-trans.png"/>
            <meta name="description" content="I'm Kacper Ozieblowski, a first year student of CS and Math at Sorbonne University, Jussieu Campus..." />
            <meta name="google-site-verification" content="YUhAriA3rDQtAwhc7pKtYtz9gIt8ezDUAFXpHKNM2jQ" />
        </Head>
        <Menubar></Menubar>
        <AnimBackground></AnimBackground>
        <Layout>
            <h1 className={css_helpers.SEO_header}>Kacper Ozieblowski</h1>
            <h1 className={css_helpers.SEO_header}>Sorbonne University</h1>

            <div className={styles.display_art_parent}>
                <DisplayArt></DisplayArt>
            </div>

            <div className={css_helpers.line} style={{position:"relative"}}>

                <div className={styles.image_parent}>
                    <div className={styles.image}>
                        {/* <ScrollRoll begin={[0, 200]} end={[0, 0]} scroll_end={50}> */}
                            <Image 
                                layout="fill" 
                                src="/photo.jpg" 
                                alt="photo of Kacper Ozieblowski"
                                quality={90}
                                sizes="50vh"
                                />
                        {/* </ScrollRoll> */}
                    </div>
                </div>
                <div>   
                    <div style={{marginTop: "2.5rem"}}></div>
                    {/* <ScrollRoll begin={[0, 200]} end={[0, 0]} scroll_end={50}> */}
                        <Block title="About me" style={{textAlign: 'justify'}}>
                            I'm Kacper Ozieblowski, a second-year <B>Sorbonne Université</B> student pursuing the <B>intensive double bachelor in Computer Science and Mathematics</B>. I'm passionate about technology and programming since the age of 14. I recently started to participate in programming <B>competitions</B> (more below). I create generative art with OpenGL as a hobby (Instagram @shaderfun). I have a good level of proficiency in <B>English</B> (C1), <B>French</B> (6yr in France), and <B>Polish</B> (native). Ex laborat I enjoy playing piano and very occasionally paint and draw. Lastly, I'm a novice indoor climber and a novice boxer.
                        </Block>
                    {/* </ScrollRoll> */}
                </div>
            </div>
            <Block title="Achievements" style={{ textIndent: '0', position: 'relative'}}>
                <ul style={{padding: 0, margin: '0 0 0 .5rem', listStyle: 'none' }}>
                    <li>
                        <img 
                            src="https://swerc.eu/2021/theme/images/favicon.png"
                            style={{height:'1.5rem', display:'inline', verticalAlign: 'middle', marginRight:'1rem'}}/>
                        2021-22 SWERC : represented Sorbonne Université
                    </li>
                    <li>
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Prologin.svg"
                            style={{height:'1.5rem', display:'inline', verticalAlign: 'middle', marginRight:'1rem'}}/>
                        2021-22 Prologin : finalist - 9th place (out of 100 finalists and 1000 candidates)
                    </li>
                    <li>
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Prologin.svg"
                            style={{height:'1.5rem', display:'inline', verticalAlign: 'middle', marginRight:'1rem'}}/>
                        2020-21 Prologin : finalist - 25th place (out of 100 finalists and 1000 candidates)
                    </li>
                </ul>
            </Block>
            <Block title="Competences" style={{position:"relative"}}>
                My skill set is more or less uniform across major domains of CS. 
                <ul style={{listStyleType: 'none', textIndent: 0}}>
                    <li>
                        - experience with designing and implementing algorithms (cf. programming competitions) which I primarily do in <B>C++</B>. 
                    </li>
                    <li>
                        - capable web-dev (cf. this website), implying knowledge in <B>JavaScript</B> (+<B>Node.js</B>), <B>CSS</B> (+<B>SASS SCSS</B>), and <B>HTML</B>. I have made 2 projects with <B>Next.js</B>.
                    </li>
                    <li>
                        -* In a related theme, I create generative art. I primarily use <B>GLSL</B> shaders, <B>three.js</B>, <B>Processing</B>, <B>p5.js</B> <B>SFML</B>, and other creative coding frameworks. 
                    </li>
                    <li>
                        - experience with relational (<B>SQL</B> style) databases
                    </li>
                    <li>
                        -+ <B>Python, Rust, Haskell, OCaml</B>...
                    </li>
                    <li>
                        - Lastly, I have some dated experience with Flask, OpenCV, Fastify, Express, and LLVM.
                    </li>
                </ul>
            </Block>
            <Block style={{position:"relative", textIndent: '0'}}>
                Full Curriculum-Vitae <a href="https://drive.google.com/file/d/14TWExwkJVR_B-ZR9ok05RW2NQW10g4b6/view?usp=sharing" target="_blank" rel="noopener">(click here)</a>
            </Block>
            <div className={styles.seemyprojects} style={{position:"relative"}}>
                <IconContext.Provider value={{style: { verticalAlign: 'middle' }}}>
                <Link href="/projects">
                    <div>
                        <Arrow/> See My Projects <Arrow/>
                    </div>
                </Link>
                </IconContext.Provider>
            </div>
        </Layout>
        <Footer></Footer>
        </>
    )
}