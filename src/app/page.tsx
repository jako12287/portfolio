import styles from "./page.module.css";
import CustomTitle from "@/app/components/customTitle";
import BtnPrimary from "@/app/components/btnPrimary";

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomTitle title="Acerca de mi" />
      <p className={styles.p}>
        Soy un desarrollador web con más de 2 años de experiencia, especializado
        en la creación y diseño de sitios web, así como en el desarrollo de
        aplicaciones con un enfoque innovador.
      </p>
      <p className={styles.p}>
        Me comprometo a ofrecer soluciones efectivas que añadan un valor
        significativo a cada experiencia digital, destacando por la alta calidad y
        aportando un valor excepcional a los usuarios.
      </p>
      <BtnPrimary title="Descarga mi CV" />
    </div>
  );
}
