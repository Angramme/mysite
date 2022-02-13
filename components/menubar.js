import styles_raw from "../styles/menubar.module.sass"
import {themify} from "../lib/darkify"
import Link from "next/link"
// import Image from "next/image"
import DarkMode from "./darkmode_button"

import {useRef, useEffect} from "react"


export default function MenuBar() {
    const styles = themify(styles_raw);

    const menu_options = {
        "About":"/", 
        "Projects":"/projects", 
        "Shadertoy":"https://www.shadertoy.com/user/Angramme",
        "Contact":"/contact",
    }


    let bar_ref = useRef(null);
    let lY = 0;
    let bY = 0;

    useEffect(()=>{
        const bar = bar_ref.current;
        const onscroll = e=>{
            let Y = window.scrollY;
            let dY = Y-lY;
            lY = Y;
            bY -= dY;
            bY = Math.max(-bar.offsetHeight-2, Math.min(0, bY))

            bar.style.top = bY+"px";
        };
        window.addEventListener("scroll", onscroll);

        const onmouse = e=>{
            if(e.clientY < bar.offsetHeight){
                bY = 0;
                bar.style.top = bY+"px";
            }
        };
        window.addEventListener("mousemove", onmouse);

        return ()=>{
            //cleanup
            window.removeEventListener("scroll", onscroll);
            window.removeEventListener("mousemove", onmouse);
        };
    })

    return <div className={styles.bar} ref={bar_ref}>
            <Link href="/">
                <div className={styles.header}>
                    {/* <div className={styles.profile_pic}>
                        <Image 
                            layout="fill" 
                            src="/profile-trans.png"
                            sizes="10vh"
                            />
                    </div> */}
                    <div className={styles.header_text}>
                        {Array.from("Kacper Ozieblowski").map((l,i)=>
                            <span key={l+i}>{l}</span>)}
                    </div>
                </div>
            </Link>
            <div className={styles.btns}>
                {Object.keys(menu_options).map((e, i) => {
                    return <div className={styles.button} key={i}>
                        {
                            menu_options[e][0] != "/" ?
                            <a href={menu_options[e]} target="_blank">
                                {e}
                            </a>
                            :
                            <Link href={menu_options[e]} >
                                {e}
                            </Link> 
                        }
                    </div>
                })}
            </div>
            <DarkMode className={styles.dark_mode_switch}/>
        </div>
}