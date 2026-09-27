import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import type { HeroSectionProps } from "./HeroSection.types";
import { HeroSectionStyled } from "./HeroSection.styled";

gsap.registerPlugin(useGSAP, ScrambleTextPlugin);

export const HeroSection = ({ text }: HeroSectionProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const matchMedia = gsap.matchMedia();

    matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(headingRef.current, {
        duration: 2,
        scrambleText: {
          text,
          chars: "upperAndLowerCase",
          revealDelay: 0.5,
          speed: 0.4,
        },
      });
    });
  });
  return (
    <HeroSectionStyled>
      <h1 ref={headingRef} aria-label={text}>
        {text}
      </h1>
    </HeroSectionStyled>
  );
};
