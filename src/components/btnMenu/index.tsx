import { BtnMenuProps } from "@/types"
import styles from "./btnMenu.module.css"

const BtnMenu = ({ toggleSidebar }: BtnMenuProps) => {
    return <div className={styles.containerMenu} onClick={toggleSidebar}>
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
    </div>
}


export default BtnMenu