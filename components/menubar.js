import styles from "./menubar.module.sass"
import Link from "next/link"

export default function MenuBar() {
    const menu_options = {
        "About":"/", 
        "Projects":"/projects", 
        "Contact":"/contact"
    }

    return <div className={styles.bar}>
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