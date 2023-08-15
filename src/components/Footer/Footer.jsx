import styles from "./styles.module.css"

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.bar} style={{background: "#F9D949"}}/>
            <div className={styles.bar} style={{background: "#FA8128"}}/>
            <div className={styles.bar} style={{background: "#F45050"}}/>
        </div>
    )
}