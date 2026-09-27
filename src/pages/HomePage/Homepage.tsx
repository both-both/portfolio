import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { AboutSection } from "../../components/modules/AboutSection/AboutSection";
import { HeroSection } from "../../components/modules/HeroSection/HeroSection";
import { ProjectsSection } from "../../components/modules/ProjectsSection/ProjectsSection";

export const HomePage = () => {
  return (
    <ContentWrapper
      title="Clara Both — Web Developer"
      description="Portfolio for Clara Both — a graphic designer turning web developer, showcasing projects from my journey into coding."
    >
      <HeroSection text="Web developer in the making..." />
      <ProjectsSection />
      <AboutSection />
    </ContentWrapper>
  );
};
