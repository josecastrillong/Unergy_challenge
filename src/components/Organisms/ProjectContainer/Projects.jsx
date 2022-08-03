import { useQuery } from "@tanstack/react-query";
import getProjects from "API/APIUtils";

function Projects() {

  const { data, isLoading, isError, error } = useQuery(['projects'], getProjects);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log(error);
    return <div>Error</div>;
  }

  return (
    <div>
      <div>
        {data.map((project) => (
          <div>            
            <div>{project.nombre_proyecto_l[0].text}</div>
            <img src={project.project_file[0].nomfile_img} alt={project.nombre_proyecto_l[0].text}/>
            <div>{project.porc_avance_financiacion}</div>
            <div>{project.rentabilidad}</div>
            <div>{project.id_caracterizacion.ciudad}</div>
            <div>{project.fecha_inicio_rentabilidad
}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;