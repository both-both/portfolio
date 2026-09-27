import { useEffect, useRef } from "react";
import { projects } from "../../../data/projectData";
import { useLanguage } from "../../../hooks/useLanguage";
import { Button } from "../../Button/Button";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ProjectsSectionStyled } from "./ProjectsSection.styled";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const loopedProjects = [...projects, ...projects, ...projects];

export const ProjectsSection = () => {
  const { t } = useLanguage();
  const listRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: 1 | -1) => {
    listRef.current?.scrollBy({
      left: direction * listRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = list.children as HTMLCollectionOf<HTMLElement>;
    const getSetWidth = () =>
      items[projects.length].offsetLeft - items[0].offsetLeft;

    list.scrollLeft = getSetWidth();

    const handleScrollEnd = () => {
      const setWidth = getSetWidth();
      if (list.scrollLeft < setWidth) list.scrollLeft += setWidth;
      else if (list.scrollLeft >= setWidth * 2) list.scrollLeft -= setWidth;
    };

    list.addEventListener("scrollend", handleScrollEnd);
    return () => list.removeEventListener("scrollend", handleScrollEnd);
  }, []);

  return (
    <ProjectsSectionStyled id="projects">
      <h2>{t.projects.heading}</h2>
      <ul ref={listRef}>
        {loopedProjects.map((project, index) => (
          <li
            key={`${project.id}-${index}`}
            inert={index < projects.length || index >= projects.length * 2}
          >
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
      <div>
        <Button
          type="button"
          onClick={() => scroll(-1)}
          ariaLabel={t.projects.prev}
        >
          <HiOutlineArrowNarrowLeft />
        </Button>
        <Button
          type="button"
          onClick={() => scroll(1)}
          ariaLabel={t.projects.next}
        >
          <HiOutlineArrowNarrowRight />
        </Button>
      </div>
    </ProjectsSectionStyled>
  );
};
