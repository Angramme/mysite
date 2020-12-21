import styles from "./block.module.sass"

export default function Block({children, title, className, style}){
    return <div className={styles.container}>
        <div className={styles.header}>{title}</div>
        <div className={styles.block+" "+className} style={style}>
            {children}
        </div>
    </div> 
}