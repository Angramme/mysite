import styles_raw from "./menubar.module.sass"
import {themify} from "../lib/darkify"
import Link from "next/link"
import DarkMode from "./darkmode_button"

import {useRef, useEffect} from "react"
import { useDarkMode } from "next-dark-mode"


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

    const darkmode = useDarkMode();

    return <div className={styles.bar} ref={bar_ref}>
            <Link href="/">
                <div className={styles.header}>
                    <img className={styles.profile_pic} src="/profile-trans.png"></img>
                    Ozieblowski Kacper
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