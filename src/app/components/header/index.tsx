import styles from "./header.module.css";
import BtnMenu from "../btnMenu";
import { HeaderProps } from "@/types";

const Header = ({ toggleSidebar }: HeaderProps) => {
    return (
        <header className={styles.containerHeader}>
            <div className={styles.containermenu}><BtnMenu toggleSidebar={toggleSidebar} /></div>
            <div className={styles.containerText}>
                <h3 className={styles.textHi}>¡Hola!</h3>
                <h3 className={styles.textName}>Soy Johan Cortes</h3>
                <h4 className={styles.textSubTitle}>Desarrollador Web / App</h4>
                <h4 className={styles.textSubTitle}>Fullstack</h4>
            </div>
        </header>
    );
};

export default Header;
