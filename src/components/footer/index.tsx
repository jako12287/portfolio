import styles from "./footer.module.css";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
    return (
        <footer className={styles.containerFooter}>
            <div>
                <h5>Diseno web / app hecho a medida</h5>
            </div>
            <div className={styles.containerIcons}>
                <VscGithub size={20} />
                <CiLinkedin size={25} />
                <ImWhatsapp size={20} />
            </div>
            <small>Johan Cortes</small>
        </footer>
    );
};

export default Footer;
