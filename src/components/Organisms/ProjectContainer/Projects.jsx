import { useQuery } from "@tanstack/react-query";
import getProjects from "API/APIUtils";
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import styles from "./Projects.module.css";

function Projects() {

  const { data = [], isLoading, isError, error } = useQuery(['projects'], getProjects);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log(error);
    return <div>Error</div>;
  }

  return (
    <div>
      <div className={styles.card_container}>
        {data.map((project) => (
          <div className={styles.card}>            
            <div className={styles.project_name}>{project.nombre_proyecto_l[0].text.substring(0, 29)}</div>
            <div className={styles.card_image}>
              <img src={project.project_file[0].nomfile_img} alt={project.nombre_proyecto_l[0].text}/>
            </div>
            <div className={styles.project_description}>
              <div className={styles.info_section}>
                <RequestQuoteIcon className={styles.icon} />
                <div className={styles.info_section_text}>
                  <p>Financiación:</p>
                  <div>{`${Math.round(project.porc_avance_financiacion)}%`}</div>
                </div>
              </div>
              <div className={styles.info_section}>
                <MonetizationOnIcon className={styles.icon} />
                <div className={styles.info_section_text}>
                  <p>Rentabilidad:</p>
                  <div>{`${Math.round(project.estimated_profit_rate * 100)} %`}</div>
                </div>
              </div>
              <div className={styles.info_section}>
                <LocationOnIcon className={styles.icon} />
                <div className={styles.info_section_text}>
                  <p>Ubicación:</p>
                  <div>{project.id_caracterizacion.ciudad}</div>
                </div>
              </div>
              <div className={styles.info_section}>
                <EventIcon className={styles.icon} />
                <div className={styles.info_section_text}>
                  <p>Inicio:</p>
                  <div>{project.fecha_inicio_rentabilidad}</div>
                </div>  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;