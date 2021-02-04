import { themify } from "../lib/darkify"
import styles_raw from "./layout.module.sass"

export default function Layout({children, style}) {
    const styles = themify(styles_raw);
    return <div className={styles.layout} style={style} lang="en-GB">
        {children}
    </div>
}