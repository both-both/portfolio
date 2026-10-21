import type { Project } from "../components/modules/ProjectCard/ProjectCard.types";
import colorPaletteImg from "../assets/claraboth-colorpalette.png";


export const projects: Project[] = [
  {
    id: 1,
    slug: "kryb",
    title: "KRYB",
    intro: { da: "Kort intro", en: "Short intro" },
    description: { da: "Længere beskrivelse", en: "Longer description" },
    url: "https://claraboth-kryb.netlify.app",
    github: "https://github.com/both-both/KRYB",
  },

  {
    id: 2,
    slug: "travel-mate",
    title: "Travel Mate",
    intro: { da: "Kort intro", en: "Short intro" },
    description: { da: "Længere beskrivelse", en: "Longer description" },
    image: travelmateImg
    url: "https://claraboth-travelmate.netlify.app",
    github: "https://github.com/both-both/TravelMate",
  },

  {
    id: 3,
    slug: "project-3",
    title: "project-3",
    intro: { da: "Kort intro", en: "Short intro" },
    description: { da: "Længere beskrivelse", en: "Longer description" },
    url: "https://claraboth-kryb.netlify.app",
    github: "https://github.com/both-both/color-palette",
  },
  {
    id: 4,
    slug: "color-palette",
    title: "Color Palette",
    intro: { da: "Kort intro", en: "Short intro" },
    description: { da: "Længere beskrivelse", en: "Longer description" },
    image: colorPaletteImg,

    url: "https://claraboth-colorpalette.netlify.app",
    github: "https://github.com/both-both/color-palette",
  },
];
