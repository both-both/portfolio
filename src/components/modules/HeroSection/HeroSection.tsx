import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import type { HeroSectionProps } from "./HeroSection.types";
import { HeroSectionStyled } from "./HeroSection.styled";

gsap.registerPlugin(useGSAP, SplitText);

export const HeroSection = ({ text }: HeroSectionProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(headingRef.current, { type: "words" });

        gsap.from(split.words, {
          y: -100,
          opacity: 0,
          rotation: "random(-80, 80)",
          duration: 0.7,
          ease: "back",
          stagger: 0.15,
        });
      });
    },
    { dependencies: [text], revertOnUpdate: true },
  );

  return (
    <HeroSectionStyled>
      <h1 ref={headingRef}>{text}</h1>
    </HeroSectionStyled>
  );
};
