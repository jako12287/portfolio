import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <section className={styles.containerHeader}>
      <Image
        src={require("../../../assets/images/herotest_11zon.jpg")}
        alt="Johan Cortes"
        className={styles.imageHero}
      />
      <div className={styles.dataContainer}>

        <div className={styles.infoContainer}>
        <ul className={styles.listMenu}>
          <li>Sobre mi</li>
          <li>Mi experiencia</li>
          <li>Proyectos</li>
          <li>Contactame</li>
        </ul>
        </div>
        <div className={styles.containerSubtitle}>
        <h4>
          Freelance 
        </h4>
        <h4>
          Desarrollador web full stack 
        </h4>

        </div>

        <div className={styles.nameContainer}>

        <h1 className={styles.textHero}>
          Johan Cortes
        </h1>
        </div>

      </div>
    </section>
  );
};

export default Header;
