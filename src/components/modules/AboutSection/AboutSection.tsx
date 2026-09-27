import portrait from "../../../assets/portfolio-profilbillede.png";
import { useLanguage } from "../../../hooks/useLanguage";
import {
  AboutBody,
  AboutImage,
  AboutIntro,
  AboutSectionStyled,
  AboutText,
} from "./AboutSection.styled";

export const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <AboutSectionStyled id="info">
      <AboutText>
        <AboutIntro>{t.about.intro}</AboutIntro>
        <AboutBody>{t.about.body}</AboutBody>
      </AboutText>
      <AboutImage src={portrait} alt={t.about.imageAlt} />
    </AboutSectionStyled>
  );
};
