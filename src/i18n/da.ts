// da.ts
export const da = {
  nav: { info: "Info", projects: "Projekter", contact: "Kontakt" },

  //ProjectSection
  projects: {
    heading: "Projekter",
    prev: "Forrige projekter",
    next: "Næste projekter",
  },
  //AboutSection
  about: {
    intro: "Før fik jeg ting til at se godt ud. Nu får jeg dem til at virke.",

    body: "I ti år arbejdede jeg som grafisk designer med brands, layout og visuelle identiteter. Undervejs blev jeg mere og mere nysgerrig på, hvad der sker bag skærmen. Nu lærer jeg webudvikling og bygger sites i React og TypeScript. Min baggrund i design gør, at jeg går op i detaljerne: typografi, luft og hvordan en side føles at bruge. Det blik vil jeg tage med ind i koden og bygge websites, der både ser godt ud og virker.",
    imageAlt: "Portræt af Clara Both",
  },

  footer: { backToTop: "Til toppen" },

  //projectPage
  projectPage: {
    github: "GitHub",
    site: "Gå til projektets side",
    screenshot: "Skærmbillede af",
  },
};

export type Translations = typeof da;
