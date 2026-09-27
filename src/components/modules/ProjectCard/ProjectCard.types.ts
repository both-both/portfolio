export type Project = {
  id: number;
  slug: string;
  title: string;
  intro: { da: string; en: string };
  description: { da: string; en: string };
  url: string;
  github: string;
  image?: string;
};
