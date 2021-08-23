import styles_raw from "../styles/block.module.sass"
import {themify} from "../lib/darkify"

export default function Block({children, title, className, style}){
    const styles = themify(styles_raw);
    return <div className={styles.container}>
        <div className={styles.header}>{title}</div>
        <div className={styles.block+" "+className} style={style}>
            {children}
        </div>
    </div> 
}