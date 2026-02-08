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
  about: {
    about: string;
    content: string;
  }
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
        "Product & Experience designer and developer, translating the sensibility of Latin American magical realism into\n" +
        "contemporary design and technology.",
      fallbackDescription: "Project description coming soon.",
    },
    nav: {
      logoAria: "Go to homepage",
      items: [
        { label: "About", ariaLabel: "About", href: "/about" },
        { label: "Design", ariaLabel: "Design Work", href: "/" },
        {
          label: "Dev",
          ariaLabel: "Work as front-end developer",
          href: "https://valenmarino.vercel.app/",
        },
      ],
    },
    about: {
      about: "About",
      content: "Latin American at heart, I was born and raised in Colombia, a place that shaped my way of thinking and creating. After living in France, a Rare Talents scholarship brought me to the Netherlands, where I studied art and industrial design. My practice is hybrid, moving between the artisanal and the digital, the organic and the technological. This approach took shape during my time at Signify (Philips Lighting), where I worked as a qualitative researcher exploring how people perceive and experience objects beyond their function. In parallel, I work with simple and essential materials — light, water, silence — transforming them into tangible installations and interfaces. Learning to code became another form of craftsmanship, allowing me to materialize ideas across physical and digital spaces. Today I work at the intersection of design and technology, creating experiences where the manual and the technical coexist. Latin American magical realism subtly runs through my practice, connecting worlds and translating the invisible into something that can be touched, seen, or inhabited."   },
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
        "Desenhadora e desenvolvedora de Produto & Experiência, traduzindo a sensibilidade do realismo mágico latino-americano em\n" +
        "design e tecnologia contemporâneos.",
      fallbackDescription: "Descrição do projeto em breve.",
    },
    nav: {
      logoAria: "Ir para a página inicial",
      items: [
        { label: "Sobre", ariaLabel: "Sobre", href: "/about" },
        { label: "Desenho", ariaLabel: "Trabalho de desenho", href: "/" },
        {
          label: "Trabalhos Dev",
          ariaLabel: "Trabalho como desenvolvedora front-end",
          href: "https://valenmarino.vercel.app/",
        },
      ],
    },
    about: {
      about: "Biografía",
      content: "Latinamericana, nasci e cresci na Colômbia, um lugar que moldou uma sensibilidade que atravessa tudo o que faço: uma maneira de pensar e criar a partir do humano. Vivi alguns anos na França e, mais tarde, uma bolsa de Rare Talents me levou à Holanda, onde estudei arte e design industrial. Minha prática sempre foi híbrida, transitando entre o artesanal e o digital, entre o orgânico e o tecnológico. Esse olhar ganhou forma durante meu tempo na Signify (Philips Lighting), onde trabalhei como pesquisadora qualitativa. Meu papel era ir além da funcionalidade dos objetos e explorar como as pessoas os percebem e os vivenciam no cotidiano, orientando decisões de design mais focadas em como as coisas são vividas, para além da função. Em paralelo, comecei a trabalhar com materiais nobres e aparentemente simples — luz, água, silêncio — transformando-os em instalações e interfaces tangíveis. Me interessa esse ponto em que o ordinário se torna paisagem, onde algo cotidiano pode abrir uma experiência mais profunda. Esse desejo de materializar ideias abstratas me levou a aprender a programar. O código se tornou outra forma de artesania: não apenas para construir, mas para dar presença física, digital — ou ambas ao mesmo tempo.  Hoje trabalho entre design e tecnologia, unindo o manual ao digital, o sensível ao técnico. O realismo mágico latino-americano atravessa minha prática de forma sutil, como uma maneira de conectar mundos e criar experiências com profundidade, sentido e calor humano. Projeto e construo experiências, traduzindo o invisível em algo que possa ser tocado, visto ou habitado."  },
    footer: {
      withLove: "Feito com amor ♡ ̆̈",
    },
  },
  es: {
    hero: {
      name: "Valentina Marino",
      role: "Diseñadora de Producto y Experiencia",
    },
    home: {
      intro:
        "Hola! Soy Valentina Marino,\n" +
        "nacida y criada en Colombia, actualmente basada en los Países Bajos.\n" +
        "Me encanta encontrar formas de llevar la poesía a objetos y tecnologías cotidianas.\n" +
        "Mi trabajo explora cómo la sensibilidad del realismo mágico latinoamericano puede vivir en el diseño contemporáneo.\n" +
        "Me interesa cómo la poesía y un poco de magia pueden existir en la tecnología diaria, usando tanto herramientas artesanales como digitales.",
      desktopBlurb:
        "Diseñadora y desarrolladora de Producto y Experiencia, traduciendo la sensibilidad del realismo mágico latinoamericano en\n" +
        "diseño y tecnología contemporáneos.",
      fallbackDescription: "Descripción del proyecto próximamente.",
    },
    nav: {
      logoAria: "Ir a la página de inicio",
      items: [
        { label: "Bio", ariaLabel: "Bio", href: "/about" },
        { label: "Diseño", ariaLabel: "Trabajo de diseño", href: "/" },
        {
          label: "Trabajos Dev",
          ariaLabel: "Trabajo como desarrolladora front-end",
          href: "https://valenmarino.vercel.app/",
        },
      ],
    },
    about: {
      about: "Biografía",
      content: "Latinoamericana, nací y crecí en Colombia, un lugar que dio forma a una sensibilidad que atraviesa todo lo que hago: una manera de pensar y crear desde lo humano. Viví algunos años en Francia y, más tarde, una beca de Rare Talents me trajo a Holanda, donde estudié arte y diseño industrial. Mi práctica ha sido siempre híbrida, moviéndose entre lo artesanal y lo digital, entre lo orgánico y lo tecnológico. Ese enfoque tomó forma durante mi tiempo en Signify (Philips Lighting), donde trabajé como investigadora cualitativa. Mi rol era ir más allá de la funcionalidad de los objetos y explorar cómo las personas los perciben y experimentan en su vida cotidiana, guiando decisiones de diseño más enfocadas en cómo se viven las cosas, más allá de su función. En paralelo, empecé a trabajar con materiales nobles y aparentemente simples —la luz, el agua, el silencio— transformándolos en instalaciones e interfaces tangibles. Me atrae ese punto donde lo ordinario se vuelve paisaje, donde algo cotidiano puede abrir una experiencia más profunda. Ese deseo de materializar ideas abstractas me llevó a aprender a programar. El código se convirtió en otra forma de artesanía: no solo para construir, sino para darles presencia física, digital o ambas al mismo tiempo. Hoy trabajo entre diseño y tecnología, uniendo lo manual con lo digital, lo sensible con lo técnico. El realismo mágico latinoamericano atraviesa mi práctica como una forma sutil de conectar mundos y crear experiencias con profundidad, sentido y calidez. Diseño y construyo experiencias, traduciendo lo invisible en algo que se pueda tocar, mirar o habitar."    
    },
    footer: {
      withLove: "Hecho con amor ♡ ̆̈",
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
