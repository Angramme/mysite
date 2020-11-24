import styles from "./menubar.module.sass"

export default function MenuBar() {
    const menu_options = [
        "About", "Projects", "Contact"
    ]

    return <div className={styles.bar}>
            <img className={styles.profile_pic} src="/profile-trans.png"></img>
            <div className={styles.header}>
                Ozieblowski Kacper
            </div>
            {menu_options.map((e, i) => {
                return <div key={i} className={styles.button}>
                    {e}
                </div>
            })}
        </div>
}