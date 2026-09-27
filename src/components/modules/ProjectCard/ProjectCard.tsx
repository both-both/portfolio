import { ProjectCardStyled } from "./ProjectCard.styled";
import type { Project } from "./ProjectCard.types";
export const ProjectCard = ({ title, slug, image }: Project) => {
  return (
    <ProjectCardStyled to={`/projects/${slug}`}>
      {image && <img src={image} alt="" />}
      <h3>{title}</h3>
    </ProjectCardStyled>
  );
};
