import { SidebarMenuProps } from "@/types";
import styles from "./sidebarMenu.module.css";
const SidebarMenu = ({ open, toggleSidebar }: SidebarMenuProps) => {
    return <div className={styles.container}>sidebar menu
        <h1 onClick={toggleSidebar}>X</h1></div>;
};

export default SidebarMenu;
