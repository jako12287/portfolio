import { FC } from "react";
import styles from "./btnPrimary.module.css";

type BtnPrimaryProps = {
    title: string;
};
const BtnPrimary: FC<BtnPrimaryProps> = ({ title }) => {
    return (
        <button className={styles.btnContainer}>{title}</button>
    );
};

export default BtnPrimary;
