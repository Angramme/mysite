import Head from 'next/head'
import Link from "next/link"
import Menubar from "../components/menubar"
import Layout from "../components/layout"
import Block from "../components/block"
import Footer from "../components/footer"
import AnimBackground from "../components/AnimatedBackground"
// import random_sentences from "../helpers/sentences"


import { IconContext } from 'react-icons'
import {CgWebsite as Arrow} from "react-icons/cg"

import styles from "../styles/index.module.sass"

import css_helpers from "../styles/organisation.module.sass"

export default function  Home(){
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

            <div className={css_helpers.line} style={{marginBottom:"5rem"}}>

                <div>
                    <img src="/me.jpg" alt="photo of Kacper Ozieblowski"></img>
                    <div>Figure 1.1 : My stupid face.</div>
                    <style jsx>{`
                        img{
                            border-radius: 0.6rem;
                            margin-top: 2rem;
                            margin: 1rem;
                        }
                        div{
                            text-align:center;
                            font-size:1.8vh;
                        }
                    `}</style>
                </div>
                <Block title="About me">
                    {/* {random_sentences(50)} */}
                    Hi! I'm Kacper Ozieblowski, a first year student of CS and Math at <b>Sorbonne University</b>, Jussieu Campus. 
                    I first stared programming by myself in 2016 at the age of 14. It became my passion ever since.
                    I speak 3 languages fluently, <b>English, French, Polish</b>.
                    I also occasionally play piano, paint, draw, all that stuff that makes my time schedule seem
                    balanced, and "legally" permits me to call myself a musician and an artist.
                </Block>
            </div>
            <Block title="Competences">
                <p>
                    I have experience with several progamming languages which include primarly <b>JS</b>, <b>Node.js</b>, 
                    <b>Python</b>, <b>C++</b>, <b>Haskell</b>, 
                    <b>C</b>, <b>GLSL</b>, <b>Processing</b>, <b>CSS</b> (<b>SASS</b>, <b>SCSS</b>) and <b>HTML</b>. 
                    I also have pretty limited knowledge of <b>Java</b>, <b>Rust</b>, <b>Lua</b>, <b>SQL</b>, <b>MongoDB</b>, and others.
                    In the next year at the uni, I will also learn <b>OCaml</b>.
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
                            <li>A chunk of STL</li>
                            <li>OpenCV</li>
                            <li>LLVM</li>
                            <li>SFML</li>
                            <li>Boost included in STL</li>
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