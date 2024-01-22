'use client'
import { SidebarMenuProps } from "@/types";
import styles from "./sidebarMenu.module.css";
import { IoClose } from "react-icons/io5";
import { FiClipboard, FiMonitor, FiPhoneCall } from "react-icons/fi";
import { FiCodesandbox } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { useRouter, usePathname } from "next/navigation";

const items = [
    {
        id: "001",
        icon: <FiClipboard size={40} color="#f17d3e" />,
        title: "Acerca de mi",
        route: "/"
    },
    {
        id: "002",
        icon: <FiCodesandbox size={40} color="#f17d3e" />,
        title: "Proyectos",
        route: "/projects"
    },
    {
        id: "003",
        icon: <FiMonitor size={40} color="#f17d3e" />,
        title: "Habilidades",
        route: "/skills"
    },
    {
        id: "004",
        icon: <GoBook size={40} color="#f17d3e" />,
        title: "Estudios",
        route: "/studies"
    },
    {
        id: "005",
        icon: <FiPhoneCall size={40} color="#f17d3e" />,
        title: "Contacto",
        route: "/contact"
    }
]
const SidebarMenu = ({ toggleSidebar }: SidebarMenuProps) => {
    const router = useRouter()
    const pat = usePathname()
    console.log("TCL: SidebarMenu -> pat", pat)

    return <div className={styles.container}>
        <div className={styles.headerMenu}>
            <div className={styles.textName}>
                Johan Cortes
            </div>
            <IoClose size="40" onClick={toggleSidebar} />
        </div>
        <div className={styles.bodyMenu}>
            {items?.map(({ id, title, icon, route }) => <div key={id} className={styles.itemMenu} onClick={() => { router.push(route); toggleSidebar() }}>
                {icon}
                {title}
            </div>)}
        </div>
    </div>;
};

export default SidebarMenu;
