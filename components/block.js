import styles from "./block.module.sass"

export default function Block({children, title, style}){
    return <div className={styles.container} style={style}>
        <div className={styles.header}>{title}</div>
        <div className={styles.block}>
            {children}
        </div>
    </div> 
}