import { SidebarMenuProps } from "@/types";
import styles from "./sidebarMenu.module.css";
import { IoClose } from "react-icons/io5";
import { FiClipboard, FiMonitor, FiPhoneCall, FiThumbsUp } from "react-icons/fi";
import { FiCodesandbox } from "react-icons/fi";
import { GoBook } from "react-icons/go";

const items = [
    {
        id: "001",
        icon: <FiClipboard size={40} color="#f17d3e" />,
        title: "Acerca de mi"
    },
    {
        id: "002",
        icon: <FiCodesandbox size={40} color="#f17d3e" />,
        title: "Proyectos"
    },
    {
        id: "003",
        icon: <FiMonitor size={40} color="#f17d3e" />,
        title: "Habilidades"
    },
    {
        id: "004",
        icon: <GoBook size={40} color="#f17d3e" />,
        title: "Estudios"
    },
    {
        id: "005",
        icon: <FiPhoneCall size={40} color="#f17d3e" />,
        title: "Contacto"
    }
]
const SidebarMenu = ({ open, toggleSidebar }: SidebarMenuProps) => {
    return <div className={styles.container}>
        <div className={styles.headerMenu}>
            <div className={styles.textName}>
                Johan Cortes
            </div>
            <IoClose size="40" onClick={toggleSidebar} />
        </div>
        <div className={styles.bodyMenu}>
            {items?.map(({ id, title, icon }) => <div key={id} className={styles.itemMenu}>
                {icon}
                {title}
            </div>)}
        </div>
    </div>;
};

export default SidebarMenu;
