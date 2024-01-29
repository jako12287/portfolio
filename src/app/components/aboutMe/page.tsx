import styles from "./aboutMe.module.css";
import CustomTitle from "@/app/components/share/customTitle";
import BtnPrimary from "@/app/components/share/btnPrimary";

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <CustomTitle title="Acerca de mi" />
      <p className={styles.p}>
        Desarrollador web con más de 2 años de experiencia, especializado
        en la creación y diseño de sitios web, así como en el desarrollo de
        aplicaciones con un enfoque innovador.
      </p>
      <p className={styles.p}>
        Doy soluciones efectivas que aportan un valor
        significativo a cada experiencia digital, destacando por la alta calidad y
        aportando un valor excepcional a los proyectos.
      </p>
      <div className={styles.containerBtn}>

        <BtnPrimary title="Descarga mi CV" />
      </div>
    </section>
  );
}

export default AboutMe
