import { Navigate, useParams } from "react-router";
import { useLanguage } from "../../hooks/useLanguage";
import { projects } from "../../data/projectData";
import { useEffect } from "react";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import {
  ProjectPageStyled,
  ProjectIntro,
  ProjectText,
  ProjectLinks,
  ProjectMedia,
  ProjectDescription,
} from "./ProjectPage.styled";
import { ProjectsSection } from "../../components/modules/ProjectsSection/ProjectsSection";

export const ProjectPage = () => {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const project = projects.find((project) => project.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <ContentWrapper
      title={`${project.title} - Clara Both`}
      description={project.intro[lang]}
    >
      <ProjectPageStyled>
        <ProjectText>
          <h1>{project.title}</h1>
          <ProjectIntro>{project.intro[lang]}</ProjectIntro>
          <ProjectDescription>{project.description[lang]}</ProjectDescription>
          <ProjectLinks>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              {t.projectPage.github}
            </a>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {t.projectPage.site}
            </a>
          </ProjectLinks>
        </ProjectText>
        <ProjectMedia>
          {project.image && (
            <img
              src={project.image}
              alt={`${t.projectPage.screenshot} ${project.title}`}
            />
          )}
        </ProjectMedia>
      </ProjectPageStyled>
      <ProjectsSection />
    </ContentWrapper>
  );
};
