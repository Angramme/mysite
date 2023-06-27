import Head from 'next/head'
import Link from "next/link"
import Image from "next/image"
import Menubar from "../components/menubar"
import Layout from "../components/layout"
import Block from "../components/block"
import Footer from "../components/footer"
import Enumer from '../components/Enumer'
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
                            I'm Kacper Ozieblowski, a third-year <B>Sorbonne Université</B> student pursuing the <B>intensive double bachelor in Computer Science and Mathematics</B>. I'm passionate about technology and programming since the age of 14. I recently started to participate in programming <B>competitions</B> (more below). I create generative art with OpenGL as a hobby (Instagram @shaderfun). I have a good level of proficiency in <B>English</B> (C1), <B>French</B> (6yr in France), and <B>Polish</B> (native). Ex laborat I enjoy playing piano and very occasionally paint and draw. Lastly, I'm a novice indoor climber and a novice boxer.
                        </Block>
                    {/* </ScrollRoll> */}
                </div>
            </div>
            <Block title="Achievements">
                <Enumer
                    data={[
                        {
                            img_url: "https://swerc.eu/2021/theme/images/favicon.png",
                            dates: "2022-23",
                            company: "SWERC",
                            company_full: "Southwestern Europe Regional Contest",
                            company_url: "https://swerc.eu",
                            desc: "**Ranked 36th** out of **120** teams from south-western europe (ranked **7th** among french teams), set a new historical record for Sorbonne Université at SWERC."
                        },
                        {
                            img_url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Prologin.svg",
                            dates: "2021-22",
                            company: "Prologin",
                            company_full: "French National Programming Contest", 
                            company_url: "https://prologin.org",
                            role: "finalist",
                            desc: "9th place (out of 100 finalists and 1000 candidates)"
                        },
                        {
                            img_url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Prologin.svg",
                            dates: "2020-21",
                            company: "Prologin",
                            company_full: "French National Programming Contest", 
                            company_url: "https://prologin.org",
                            role: "finalist",
                            desc: "25th place (out of 100 finalists and 1000 candidates)"
                        },
                        {
                            img_url: "https://swerc.eu/2021/theme/images/favicon.png",
                            dates: "2021-22",
                            company: "SWERC",
                            company_full: "Southwestern Europe Regional Contest",
                            company_url: "https://swerc.eu",
                            desc: "represented Sorbonne Université"
                        },
                    ]}
                />
            </Block>
            <Block title="Experience">
                <Enumer data={[
                    {
                        img_url: "/gdsc.png",
                        dates: "2022-23",
                        role: "Lead",
                        company: "Google Developer Student Club at Sorbonne",
                        desc: "Google Developer Student Club Leads are passionate leaders at their universities who are dedicated to helping their peers learn and connect. Google collaborates with Leads and supports them as they start and grow their on-campus communities.",
                        role_desc: " Leading a team of passionate students in order to organise Google events at Sorbonne Université. Networking with Googlers and other leads in order to bring events to SU."
                    },
                    {
                        img_url: "/SU.png",
                        dates: "Summer 2022",
                        role: "Research Intern",
                        company: "Sorbonne Université",
                        project: "DO-Calculus on Bayesian Networks",
                        desc: "The [aGrUM project](https://agrum.gitlab.io) is a library designed to facilitate the development of applications using probabilistic graphical models",
                        role_desc: 'Collaborating with the supervising professor to architect the do-calculus and causality logic inside the existing code base. Implementing this logic on networks in C++.'
                    },
                    {
                        img_url: "/LIP6.png",
                        dates: "July - August 2023",
                        role: "Research Intern",
                        company: "LIP6 - Sorbonne Université",
                        project: "DO-Calculus on Bayesian Networks",
                        desc: "The [aGrUM project](https://agrum.gitlab.io) is a library designed to facilitate the development of applications using probabilistic graphical models",
                        role_desc: 'Collaborating with the supervising professor to architect the do-calculus and causality logic inside the existing code base. Implementing this logic on networks in C++.'
                    }
                ]}/>
            </Block>
            <Block title="Education">
                <Enumer data={[
                    {
                        img_url: "/ethz.png",
                        role: "future student (accepted)",
                        company: "ETHZ",
                        company_url: "https://ethz.ch/en.html",
                        company_full: "Swiss Federal Institute of Technology",
                        project: "Computer Science MSc",
                        dates: "2023-ONGOING"
                    },
                    {
                        img_url: "/SU.png",
                        company_url: "https://www.sorbonne-universite.fr",
                        company_full: "Sorbonne Université",
                        project: "Intensive double bachelor's in Computer Science and Mathematics",
                        company: "SU",
                        dates: "2020-2023"
                    }
                ]}
                />
            </Block>
            <Block title="Certifications">
                <Enumer data={[
                    {
                        img_url: "https://img.icons8.com/color/480/ielts.png",
                        dates: "September 2022",
                        company: "IELTS Academic",
                        desc: "Obtained an overall band score of **8.0/9.0** translating to **C1** CEFR Level.", 
                    }
                ]}/>
            </Block>
            <Block title="Competences">
                <ul style={{listStyleType: 'none', textIndent: 0}}>
                    <li>
                        - experience with designing and implementing algorithms (cf. programming competitions) which I primarily do in <B>C++</B>. 
                    </li>
                    <li>
                        - experience with software engineering (designed and coded multiple projects from the ground up in C++, C, Python, Rust and others). 
                    </li>
                    <li>
                        - capable web-dev (cf. this website), implying knowledge in <B>JavaScript</B>, <B>Node.js</B>, <B>React</B>, <B>CSS</B>, <B>SASS</B>, <B>SCSS</B>, and <B>HTML</B>. I have made 2 projects with <B>Next.js</B>.
                    </li>
                    <li>
                        - basic graphics programming. I create generative art (cf. Shadertoy). I primarily use <B>GLSL</B> shaders, <B>three.js</B>, <B>Processing</B>, <B>p5.js</B> <B>SFML</B>, and other creative coding frameworks. 
                    </li>
                    <li>
                        - experience with <B>functional</B> programming languages (<B>Haskell, OCaml</B>)...
                    </li>
                </ul>
            </Block>
            <Block title="Curriculum Vitae" style={{position:"relative", textIndent: '0'}}>
                {/* <iframe 
                    src="https://drive.google.com/file/d/14TWExwkJVR_B-ZR9ok05RW2NQW10g4b6/preview" 
                    width="640" 
                    height="800" 
                    allow="autoplay"
                    style={{width:"100%"}}/> */}
                To see my full Curriculum-Vitae please <B><a href="https://drive.google.com/file/d/14TWExwkJVR_B-ZR9ok05RW2NQW10g4b6/view?usp=sharing" target="_blank" rel="noopener"> &gt;click here&lt; </a></B>.
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