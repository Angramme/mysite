import styles from "./layout.module.sass"

export default function Layout({children, style}) {
    return <div className={styles.layout} style={style}>
        {children}
    </div>
}