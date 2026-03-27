import type { Locale } from "@/lib/i18n";

export type NavItem = {
  label: string;
  ariaLabel: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  items: string[];
};

export type Messages = {
  hero: {
    name: string;
    role: string;
  };
  home: {
    intro: string;
    question?: string;
    desktopBlurb: string;
    fallbackDescription: string;
  };
  nav: {
    logoAria: string;
    items: NavItem[];
  };

  foot: {
    items: NavItem[];
  };

  about: {
    about: string;
    content: string;
    readMore: string;
    readLess: string;
  };
  services: {
    title: string;
    items: ServiceItem[];
  };
  contact: {
    title: string;
    content: string;
    email: string;
    availability: string;
  };

};

const messages: Record<Locale, Messages> = {
  en: {
    hero: {
      name: "Valentina Marino",
      role: "Product & Experience Designer",
    },
    home: {
      question: "What does something feel like before language defines it?",
      intro: "Born and raised in Colombia, currently based in the Netherlands,\n" +
        "I love finding ways to bring poetry into everyday objects and technologies.\n" +
        "My work explores how the sensibility of Latin American magical realism can live in contemporary design.\n" +
        "I'm interested in how poetry and a bit of magic can exist in everyday technology, using both handcrafted and digital tools.",
      desktopBlurb: "Product & experience designer, researcher, and developer. I translate cultural identity and sensory intelligence into contemporary design and technology, \n" +
        "to make experiences that make the invisible be felt.",
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
          href: "https://valenmarino.vercel.app/ ",
        },
      ],
    },

    about: {
      about: "About",
      content: "I was born and raised in Colombia, a place where I learnt to see the relationship between the sensory, the cultural, and the made. After living in France, a 'Rare Talents scholarship' brought me to the Netherlands, where I studied art and industrial design.\n" +
        "\n" +
        "My practice is hybrid by nature. I move between sensory brand research, physical installations, experience design, and frontend development, since the most interesting things live at those borders. I believe the best digital (and physicial) experiences are felt before they're understood. That belief drives everything I make.\n" +
        "\n" +
        "At Signify (Philips), I developed Value Tuning: a proprietary qualitative methodology that decodes how products communicate brand value through touch, sound, weight, and material. It gave design teams the evidence to advocate for quality budgets and revealed the gap between brand promise and embodied experience.\n" +
        "\n" +
        "Since then I've designed and built Carmela Collective's entire web ecosystem: from visual identity to deployed frontend (a Latin American cultural platform in Amsterdam). Currently I work as a web strategy consultant for Qommunity (Belgium), helping them translate their mission into a coherent digital presence.\n" +
        "\n" +
        "I'm based between Amsterdam and Latin America, and I work remotely across both. I'm open to senior roles, consulting engagements, and research partnerships, particularly with studios, cultural institutions, and brands working at the intersection of identity, technology, and experience. \n" +
        "\n" +
        "Fluent in Spanish, English, French, and Portuguese.",
      readMore: "Read more",
      readLess: "Read less"
    },
    services: {
      title: "Services",
      items: [
        {
          title: "Sensory Brand Audit",
          items: [
            "A research-led process that decodes how your brand is felt through material, touch, and interaction — not just seen. Based on the Value Tuning methodology developed at Signify (Philips). Deliverable: audit report + actionable design criteria.",
          ]
        },
        {
          title: "Brand-to-Web Ecosystem",
          items: [
            "From identity to deployed frontend. I design and build web presences for cultural organisations and creative brands — starting from who you are, ending with how you show up online. Full ownership: strategy, design, code."
          ]
        },
        {
          title: "Web Strategy Consulting & Advisory",
          items: [
            "Workshops and advisory for organisations that need to strengthen their digital presence. I help you understand what your current site communicates, what's missing, and how to close the gap — practically and strategically."
          ]
        },
        {
          title: "Consulting & Advisory",
          items: [
            "Concept development, spatial and digital experience design, and creative direction for projects that need to be both intellectually rigorous and sensorially compelling."
          ]
        }
      ]
    },
    contact: {
      title: "Contact",
      content: "Open to collaborations, commissions, and conversations about design, technology, and everything in between.",
      email: "valenmarinocol@gmail.com",
      availability: "Currently available for new projects"
    },
    foot: {
      items: [
        { label: "Email", ariaLabel: "Email", href: "" },
        { label: "Instagram", ariaLabel: "Instagram", href: "" },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn profile",
          href: "https://valenmarino.vercel.app/ ",
        },
        {
          label: "GitHub",
          ariaLabel: "Repositorios web",
          href: "https://valenmarino.vercel.app/ ",
        },
      ],
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
          href: "https://valenmarino.vercel.app/ ",
        },
      ],
    },
    about: {
      about: "Biografía",
      content:
        "Nasci e cresci na Colômbia — um lugar que moldou como vejo a relação entre o sensorial, o cultural e o feito à mão. Depois de viver na França, uma bolsa Rare Talents me trouxe para a Holanda, onde estudei arte e design industrial em um nível que unia pesquisa de materiais e pensamento crítico.\n" +
        "\n" +
        "Minha prática é híbrida por natureza. Transito entre pesquisa sensorial de marca, instalações físicas, design de experiência e desenvolvimento frontend — não porque eu não consiga escolher, mas porque os problemas mais interessantes vivem nessas bordas. Acredito que as melhores experiências digitais são sentidas antes de serem compreendidas. Essa crença guia tudo o que eu faço.\n" +
        "\n" +
        "Na Signify (Philips), desenvolvi o Value Tuning — uma metodologia qualitativa proprietária que decodifica como produtos comunicam valor de marca por meio do toque, do som, do peso e do material. Ela deu às equipes de design evidências para defender orçamentos de qualidade e revelou a lacuna entre promessa de marca e experiência incorporada.\n" +
        "\n" +
        "Desde então, desenhei e construí todo o ecossistema web da Carmela Collective — da identidade visual ao frontend em produção — para uma plataforma cultural latino-americana em Amsterdã. Atualmente trabalho como consultora de estratégia web para a Qommunity (Bélgica), ajudando a traduzir sua missão em uma presença digital coerente.\n" +
        "\n" +
        "Estou baseada entre Amsterdã e a América Latina e trabalho remotamente entre os dois. Estou aberta a posições sênior, consultorias e parcerias de pesquisa — especialmente com estúdios, instituições culturais e marcas que atuam na interseção entre identidade, tecnologia e experiência.",
      readMore: "Ler mais",
      readLess: "Ler menos"
    },
    services: {
      title: "Serviços",
      items: [
        {
          title: "Auditoria Sensorial de Marca",
          items: [
            "Um processo guiado por pesquisa que decodifica como sua marca é sentida pelo material, pelo toque e pela interação — não apenas vista. Baseado na metodologia Value Tuning desenvolvida na Signify (Philips). Entregável: relatório de auditoria + critérios de design acionáveis."
          ]
        },
        {
          title: "Ecossistema Marca-para-Web",
          items: [
            "Da identidade ao frontend em produção. Eu desenho e construo presenças web para organizações culturais e marcas criativas — começando por quem você é, terminando com como você aparece online. Propriedade total: estratégia, design, código."
          ]
        },
        {
          title: "Consultoria e Assessoria de Estratégia Web",
          items: [
            "Workshops e assessoria para organizações que precisam fortalecer sua presença digital. Eu te ajudo a entender o que seu site atual comunica, o que está faltando e como fechar a lacuna — de forma prática e estratégica."
          ]
        },
        {
          title: "Consultoria e Assessoria",
          items: [
            "Desenvolvimento de conceitos, design de experiências espaciais e digitais e direção criativa para projetos que precisam ser rigorosos intelectualmente e, ao mesmo tempo, convincentes sensorialmente."
          ]
        }
      ]
    },
    contact: {
      title: "Contato",
      content: "Aberta a colaborações, encomendas e conversas sobre design, tecnologia e tudo que há entre eles.",
      email: "valenmarinocol@gmail.com",
      availability: "Disponível para novos projetos"
    },
    foot: {
      items: [
        { label: "Email", ariaLabel: "Email", href: "" },
        { label: "Instagram", ariaLabel: "Instagram", href: "" },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          href: "https://valenmarino.vercel.app/ ",
        },
        {
          label: "GitHub",
          ariaLabel: "Repositorios projetos web",
          href: "https://valenmarino.vercel.app/ ",
        },
      ],
    },
  },

  es: {
    hero: {
      name: "Valentina Marino",
      role: "Diseñadora de Producto y Experiencia",
    },
    home: {
      intro: "Hola! Soy Valentina Marino,\n" +
        "nacida y criada en Colombia, actualmente basada en los Países Bajos.\n" +
        "Me encanta encontrar formas de llevar la poesía a objetos y tecnologías cotidianas.\n" +
        "Mi trabajo explora cómo la sensibilidad del realismo mágico latinoamericano puede vivir en el diseño contemporáneo.\n" +
        "Me interesa cómo la poesía y un poco de magia pueden existir en la tecnología diaria, usando tanto herramientas artesanales como digitales.",
      desktopBlurb: "Diseñadora y desarrolladora de Producto y Experiencia, traduciendo la sensibilidad del realismo mágico latinoamericano en\n" +
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
          href: "https://valenmarino.vercel.app/ ",
        },
      ],
    },
    about: {
      about: "Biografía",
      content: "Nací y crecí en Colombia — un lugar que moldeó cómo veo la relación entre lo sensorial, lo cultural y lo hecho. Después de vivir en Francia, una beca de Rare Talents me trajo a los Países Bajos, donde estudié arte y diseño industrial en un nivel que fusionó investigación de materiales con pensamiento crítico.\n" +
        "\n" +
        "Mi práctica es híbrida por naturaleza. Me muevo entre investigación sensorial de marca, instalaciones físicas, diseño de experiencia y desarrollo frontend — no porque no pueda elegir, sino porque los problemas más interesantes viven en esos bordes. Creo que las mejores experiencias digitales se sienten antes de entenderse. Esa creencia impulsa todo lo que hago.\n" +
        "\n" +
        "En Signify (Philips), desarrollé Value Tuning — una metodología cualitativa propietaria que decodifica cómo los productos comunican valor de marca a través del tacto, el sonido, el peso y el material. Le dio a los equipos de diseño evidencia para defender presupuestos de calidad y reveló la brecha entre la promesa de marca y la experiencia encarnada.\n" +
        "\n" +
        "Desde entonces, diseñé y construí todo el ecosistema web de Carmela Collective — desde la identidad visual hasta el frontend en producción — para una plataforma cultural latinoamericana en Ámsterdam. Actualmente trabajo como consultora de estrategia web para Qommunity (Bélgica), ayudándoles a traducir su misión en una presencia digital coherente.\n" +
        "\n" +
        "Estoy basada entre Ámsterdam y América Latina, y trabajo de forma remota entre ambos. Estoy abierta a roles senior, consultorías y alianzas de investigación — particularmente con estudios, instituciones culturales y marcas que trabajan en la intersección de identidad, tecnología y experiencia.",
      readMore: "Leer más",
      readLess: "Leer menos"
    },
    services: {
      title: "Servicios",
      items: [
        {
          title: "Auditoría Sensorial de Marca",
          items: [
            "Un proceso liderado por la investigación que decodifica cómo se percibe tu marca a través del material, el tacto y la interacción — no solo a través de lo que se ve. Basado en la metodología Value Tuning desarrollada en Signify (Philips). Entregable: informe de auditoría + criterios de diseño accionables."
          ]
        },
        {
          title: "Ecosistema Marca-a-Web",
          items: [
            "De la identidad al frontend en producción. Diseñó y desarrolla presencias web para organizaciones culturales y marcas creativas — empezando por quién eres, terminando con cómo apareces en línea. Propiedad total: estrategia, diseño, código."
          ]
        },
        {
          title: "Consultoría y Asesoría de Estrategia Web",
          items: [
            "Talleres y asesoría para organizaciones que necesitan fortalecer su presencia digital. Te ayudo a entender qué comunica tu sitio actual, qué falta y cómo cerrar la brecha — de forma práctica y estratégica."
          ]
        },
        {
          title: "Consultoría y Asesoría",
          items: [
            "Desarrollo de conceptos, diseño de experiencias espaciales y digitales, y dirección creativa para proyectos que necesitan ser rigurosos intelectualmente y, al mismo tiempo, convincentes a nivel sensorial."
          ]
        }
      ]
    },
    contact: {
      title: "Contacto",
      content: "Abierta a colaboraciones, encargos y conversaciones sobre diseño, tecnología y todo lo que hay entre ellos.",
      email: "valenmarinocol@gmail.com",
      availability: "Disponible para nuevos proyectos"
    },
    foot: {
      items: [
        { label: "Email", ariaLabel: "Email", href: "" },
        { label: "Instagram", ariaLabel: "Instagram", href: "https://www.instagram.com/valmarino.a/" },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn Profile",
          href: "https://www.linkedin.com/in/valentina-marino-arboleda",
        },
        {
          label: "GitHub",
          ariaLabel: "Repositories",
          href: "https://github.com/Valmarinoa",
        },
      ],
    },
   
  },
};

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}