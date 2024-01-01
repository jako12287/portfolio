import styles from "./header.module.css"
const Header = () => {
    return <header className={styles.containerHeader}>
        <div className={styles.containermenu}>menu responsive</div>
        <div className={styles.containerInfo}>
            <div className={styles.containerText}>

                <h3 className={styles.textHi}>
                    ¡Hola!
                </h3>
                <h3 className={styles.textName}>
                    Soy Johan Cortes
                </h3>
                <h4 className={styles.textSubTitle}>
                    Desarrollador fullstack
                </h4>
                <h4 className={styles.textSubTitle}>
                    Web / App
                </h4>
            </div>
            <div>
                imagen
            </div>
        </div>
    </header>
}

export default Header