import styles from "./menubar.module.sass"
import Link from "next/link"
import {useRef, useEffect} from "react"

export default function MenuBar() {
    const menu_options = {
        "About":"/", 
        "Projects":"/projects", 
        "Contact":"/contact"
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
            <img className={styles.profile_pic} src="/profile-trans.png"></img>
            <Link href="/">
                <div className={styles.header}>
                    Ozieblowski Kacper
                </div>
            </Link>
            {Object.keys(menu_options).map((e, i) => {
                return <Link href={menu_options[e]} key={i}>
                    <div className={styles.button}>
                        {e}
                    </div>
                </Link> 
            })}
        </div>
}