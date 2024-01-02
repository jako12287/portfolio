import styles from "./footer.module.css";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { ImWhatsapp } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.containerFooter}>
            <div className={styles.containerIcons}>
                <Link href={"https://github.com/jako12287"} target="_blank">
                    <VscGithub size={20} />
                </Link>
                <Link
                    href={"https://www.linkedin.com/in/johancortesdev/"}
                    target="_blank"
                >
                    <CiLinkedin size={25} />
                </Link>
                <Link href={"https://wa.me/+573054648150"} target="_blank">
                    <ImWhatsapp size={20} />
                </Link>
            </div>
            <small>Johan Cortes</small>
        </footer>
    );
};

export default Footer;
