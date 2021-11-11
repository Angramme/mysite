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
                    {/* <img className={styles.image} src="/me.jpg" alt="photo of Kacper Ozieblowski"></img> */}
                    <div className={styles.image}>
                        <Image 
                            layout="fill" 
                            src="/me.jpg" 
                            alt="photo of Kacper Ozieblowski"
                            quality={90}
                            sizes="50vh"
                            />
                    </div>
                    {/* <div className={styles.image_legend}>Figure 1: Me.</div> */}
                </div>
                <div>   
                    <div style={{marginTop: "3rem"}}></div>
                    <Block title="About me">
                        {/* {random_sentences(50)} */}
                        Hi! I'm Kacper Ozieblowski, a first year student of CS and Math at <B>Sorbonne University</B>, Jussieu Campus. 
                        I'm a passionate of programing which I discovered at the age of 14.
                        It became my hobby ever since.
                        I speak 3 languages fluently, <B>English, French</B> and <B>Polish</B>.
                        I also occasionally play piano, paint, draw, because it makes my time schedule seem
                        balanced. 
                    </Block>
                </div>
            </div>
            <Block title="Competences">
                <p>
                    I have experience with several progamming languages which include primarly <B>JS</B>, <B>Node.js</B>, <B>Python</B>, <B>C++</B>, <B>Haskell</B>, <B>C</B>, <B>GLSL</B>, <B>Processing</B>, <B>CSS</B> (<B>SASS</B>, <B>SCSS</B>) and <B>HTML</B>. 
                    I also have a limited knowledge of <B>Java</B>, <B>Rust</B>, <B>Lua</B>, <B>SQL</B>, <B>MongoDB</B>, and others.
                    I also plan to learn <B>OCaml</B> next year.
                </p>
                <p>
                    I have some experience with various libraries: <br/>
                </p>
                <div className={css_helpers["line-wrap"]}>
                    <div>
                        In Python:
                        <ul>
                            <li>OpenCV</li>
                            <li>TensorFlow</li>
                            <li>Keras</li>
                            <li>Flask</li>
                            <li>pyGame</li>
                        </ul>
                    </div>
                    <div>
                        In Node.js and JS:
                        <ul>
                            <li>Fastify</li>
                            <li>Express</li>
                            <li>Next.js</li>
                            <li>React</li>
                            <li>OpenCV</li>
                            <li>Three.js</li>
                            <li>p5.js</li>
                            <li>Babel</li>
                        </ul>
                    </div>
                    <div>
                        In C++:
                        <ul>
                            <li>A chunk of STL and STD</li>
                            <li>OpenCV</li>
                            <li>LLVM</li>
                            <li>SFML</li>
                            <li>Boost included in STD</li>
                        </ul>
                    </div>
                </div>
            </Block>
            <div className={styles.seemyprojects}>
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