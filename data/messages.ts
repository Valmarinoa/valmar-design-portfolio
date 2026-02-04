import type { Locale } from "@/lib/i18n";

export type NavItem = {
  label: string;
  ariaLabel: string;
  href: string;
};

export type Messages = {
  hero: {
    name: string;
    role: string;
  };
  home: {
    intro: string;
    desktopBlurb: string;
    fallbackDescription: string;
  };
  nav: {
    logoAria: string;
    items: NavItem[];
  };
  footer: {
    withLove: string;
  };
};

const messages: Record<Locale, Messages> = {
  en: {
    hero: {
      name: "Valentina Marino",
      role: "Product & Experience Designer",
    },
    home: {
      intro:
        "Hi! I’m Valentina Marino,\n" +
        "born and raised in Colombia, currently based in the Netherlands.\n" +
        "I love finding ways to bring poetry into everyday objects and technologies.\n" +
        "My work explores how the sensibility of Latin American magical realism can live in contemporary design.\n" +
        "I’m interested in how poetry and a bit of magic can exist in everyday technology, using both handcrafted and digital tools.",
      desktopBlurb:
        "Valentina Marino is a Product & Experience designer, translating the sensibility of Latin American magical realism into\n" +
        "contemporary design and technology.",
      fallbackDescription: "Project description coming soon.",
    },
    nav: {
      logoAria: "Go to homepage",
      items: [
        { label: "Home", ariaLabel: "Go to home page", href: "/" },
        { label: "About", ariaLabel: "About", href: "/about" },
        {
          label: "Dev Work",
          ariaLabel: "Work as front-end developer",
          href: "https://valenmarino.vercel.app/",
        },
      ],
    },
    footer: {
      withLove: "Coded with love ♡ ̆̈",
    },
  },
  "pt-br": {
    hero: {
      name: "Valentina Marino",
      role: "Designer de Produto & Experiência",
    },
    home: {
      intro:
        "Oi! Eu sou Valentina Marino,\n" +
        "nascida e criada na Colômbia, atualmente baseada na Holanda.\n" +
        "Adoro encontrar maneiras de levar poesia para objetos e tecnologias do dia a dia.\n" +
        "Meu trabalho explora como a sensibilidade do realismo mágico latino-americano pode viver no design contemporâneo.\n" +
        "Tenho interesse em como a poesia e um pouco de magia podem existir na tecnologia cotidiana, usando tanto ferramentas artesanais quanto digitais.",
      desktopBlurb:
        "Valentina Marino é designer de Produto & Experiência, traduzindo a sensibilidade do realismo mágico latino-americano em\n" +
        "design e tecnologia contemporâneos.",
      fallbackDescription: "Descrição do projeto em breve.",
    },
    nav: {
      logoAria: "Ir para a página inicial",
      items: [
        { label: "Início", ariaLabel: "Ir para a página inicial", href: "/" },
        { label: "Sobre", ariaLabel: "Sobre", href: "/about" },
        {
          label: "Trabalhos Dev",
          ariaLabel: "Trabalho como desenvolvedora front-end",
          href: "https://valenmarino.vercel.app/",
        },
      ],
    },
    footer: {
      withLove: "Codado com amor ♡ ̆̈",
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
