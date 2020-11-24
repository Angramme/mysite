import styles from "./footer.module.sass"

export default function Footer(){
    return <div className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()} Kacper Ozieblowski
    </div>
}