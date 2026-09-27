import { ProjectCardStyled } from "./ProjectCard.styled";
import type { Project } from "./ProjectCard.types";

export const ProjectCard = ({ title, url, image }: Project) => {
  return (
    <ProjectCardStyled href={url} target="_blank" rel="noopener noreferrer">
      {image && <img src={image} alt="" />}
      <h3>{title}</h3>
    </ProjectCardStyled>
  );
};
