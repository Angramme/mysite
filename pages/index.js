import Head from 'next/head'
import Menubar from "../components/menubar"
import Layout from "../components/layout"
import Block from "../components/block"
import AnimBackground from "../components/AnimatedBackground"
import random_sentences from "../helpers/sentences"

import css_helpers from "../styles/organisation.module.sass"

export default function  Home(){
    return (
        <>
        <Head>
            <title>About</title>
            <link rel="icon" href="profile-trans.png"/>
        </Head>
        <Menubar></Menubar>
        <AnimBackground></AnimBackground>
        <Layout style={{zIndex:5}}>
            <div className={css_helpers.line}>
                <div>
                    <img src="/me.jpg"></img>
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
                    {random_sentences(50)}
                </Block>
            </div>
            <Block title="Competences" style={{marginTop:"5rem"}}>
                {random_sentences(150)}
            </Block>
        </Layout>
        </>
    )
}