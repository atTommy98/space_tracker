import styles from "./styles.module.css"

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.linkContainer}>
                <a>Home</a>
                <a>About</a>
                <a>Launches</a>
            </div>
        </div>
    )
}