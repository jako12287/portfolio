import { FC } from "react"
import styles from "./btnPrimary.module.css"

type BtnPrimaryProps = {
    title: string
}
const BtnPrimary: FC<BtnPrimaryProps> = ({ title }) => {
    return <div className={styles.container}>
        <div className={styles.btnContainer}>
            {title}
        </div>
    </div>
}

export default BtnPrimary