"use client";
import CustomTitle from "@/app/components/customTitle";
import Image from "next/image";
import styles from "./projects.module.css";
import { useRouter } from "next/navigation";
import { listProjects } from "@/utils";

const Projects = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <CustomTitle title="Proyectos Desarrollados" />
      <div className={styles.containerImages}>
        {listProjects?.map(
          ({ _id, iconImage, title, backgroundColor, route }) => (
            <div
              key={_id}
              className={styles.frame}
              style={{ backgroundColor: backgroundColor }}
              onClick={() => router.push(`/projects/${route}`)}
            >
              <Image
                src={iconImage}
                alt="Proyectos"
                title="Natural Marketing"
                className={styles.imageFrame}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
