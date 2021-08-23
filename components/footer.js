import styles_raw from "../styles/footer.module.sass"
import {themify} from "../lib/darkify"

export default function Footer(){
    const styles = themify(styles_raw);
    return <div className={styles.footer}>
        Copyright &copy; {new Date().getFullYear()} Kacper Ozieblowski
    </div>
}