import CustomTitle from "@/app/components/customTitle";
import styles from "./skills.module.css";
import { dataSkills } from "@/utils";
import Image from "next/image";

const Skill = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>

                <CustomTitle title="Habilidades" />
            </div>
            <div className={styles.sectionIcons}>

                {dataSkills.map(({ _id, icon, name }) => (
                    <div key={_id} className={styles.containerItems}>
                        <div className={styles.containerIcons}>
                            <Image alt={name} title={name} src={icon} className={styles.imageIcon} />
                        </div>
                        <div className={styles.textName}>{name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
