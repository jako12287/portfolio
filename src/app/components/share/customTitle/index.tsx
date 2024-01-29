import { FC } from "react"
import styles from "./customTitle.module.css"

type CustomTitleProps = {
    title: string
}

const CustomTitle: FC<CustomTitleProps> = ({ title }) => {
    return <div className={styles.container}>
        <div>
            {title.toUpperCase()}
            <div className={styles.lines} />
        </div>
    </div>
}


export default CustomTitle