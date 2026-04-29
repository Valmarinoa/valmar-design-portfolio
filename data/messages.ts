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
  profile: {
    title: string;
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
      desktopBlurb: "I'm Valentina Marino, \n" +
       "Product & Experience Designer and Developer. \n" +
      "I translate cultural identity and sensory intelligence into contemporary design and technology.",
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
      content: "I was born and raised in Colombia, where I cultivated a strong sense of rhythm, a deep appreciation for nature and a sensitivity to the subtle things we can’t see. After living in France, a 'Rare Talents' scholarship brought me to the Netherlands, where I studied art and industrial design.\n" +
        "\n" +
        "My practice is hybrid. I move organically between sensory brand research, physical objects/installations, experience design, and frontend development.. always flowing between the physical and digital worlds.  This range allows me to connect perspectives that are not often held together, and shape work that feels layered, and alive.\n" +
        "\n" +
        "At Signify (Philips), I developed Value Tuning: a proprietary qualitative methodology that decodes how products communicate brand value through touch, sound, weight, and material. It gave design teams evidence to advocate for quality, and revealed the gap between what a brand promises and what a person actually feels holding it.\n" +
        "\n" +
        "Over the past five years I’ve worked as a developer and UI/UX engineer across industries, building digital products, translating design systems into code. What I like the most is to  shape interfaces that respond to human intention as much as to data. Those years deepened my understanding of how digital environments carry emotional and cultural meaning.\n" +
        "\n" +
        "More recently I’ve been exploring an independent path as a consultant. I’m partnering with teams to reimagine how identity and technology can meet. I currently collaborate with Carmela Collective, a Latin American cultural platform based in Amsterdam, and Qommunity in Belgium. I help both translate their missions into coherent, living digital presences.\n" +
        "\n" +
       "I’m based between Amsterdam and Latin America and work remotely across both. I’m open to senior roles, consulting partnerships, and research collaborations with studios, cultural institutions, and brands exploring the intersections of identity, technology, and experience.\n" +
        
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
    profile: {
      title: "Background",
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
      question: "Como algo se sente antes de a linguagem o definir?",
      intro:
        "Nascida e criada na Colômbia, atualmente baseada na Holanda,\n" +
        "adoro encontrar maneiras de levar poesia para objetos e tecnologias do dia a dia.\n" +
        "Meu trabalho explora como a sensibilidade do realismo mágico latino-americano pode viver no design contemporâneo.\n" +
        "Me interessa como a poesia e um pouco de magia podem existir na tecnologia cotidiana, usando ferramentas artesanais e digitais.",
      desktopBlurb:
        "Sou Valentina Marino, Designer de produto e experiência, pesquisadora e desenvolvedora.\n" +
        "Traduzo identidade cultural e inteligência sensorial em design e tecnologia contemporâneos.",
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
        {
          label: "Contato",
          ariaLabel: "Contato",
          href: "",
        },
      ],
    },
    about: {
      about: "Biografia",
      content:
        "Nasci e cresci na Colômbia, onde cultivei um forte senso de ritmo, uma profunda apreciação pela natureza e uma sensibilidade para as coisas sutis que não podemos ver. Depois de viver na França, uma bolsa 'Rare Talents' me trouxe para a Holanda, onde estudei arte e design industrial.\n" +
        "\n" +
        "Minha prática é híbrida. Transito organicamente entre pesquisa sensorial de marca, objetos físicos e instalações, design de experiência e desenvolvimento frontend.. sempre fluindo entre os mundos físico e digital. Essa amplitude me permite conectar perspectivas que raramente são mantidas juntas e moldar um trabalho que parece denso e vivo.\n" +
        "\n" +
        "Na Signify (Philips), desenvolvi o Value Tuning: uma metodologia qualitativa proprietária que decodifica como produtos comunicam valor de marca por meio do toque, do som, do peso e do material. Ela deu às equipes de design evidências para defender a qualidade e revelou a lacuna entre o que uma marca promete e o que uma pessoa realmente sente ao segurá-la.\n" +
        "\n" +
        "Nos últimos cinco anos trabalhei como desenvolvedora e engenheira UI/UX em diversas indústrias, construindo produtos digitais e traduzindo sistemas de design em código. O que mais gosto é moldar interfaces que respondam tanto à intenção humana quanto aos dados. Esses anos aprofundaram minha compreensão de como os ambientes digitais carregam significado emocional e cultural.\n" +
        "\n" +
        "Mais recentemente tenho explorado um caminho independente como consultora. Trabalho com equipes para reimaginar como identidade e tecnologia podem se encontrar. Atualmente colaboro com a Carmela Collective, uma plataforma cultural latino-americana com sede em Amsterdã, e com a Qommunity na Bélgica. Ajudo ambas a traduzir suas missões em presenças digitais coerentes e vivas.\n" +
        "\n" +
        "Estou baseada entre Amsterdã e a América Latina e trabalho remotamente entre os dois. Estou aberta a posições sênior, parcerias de consultoria e colaborações de pesquisa com estúdios, instituições culturais e marcas que exploram as interseções de identidade, tecnologia e experiência.\n" +
        "\n" +
        "Fluente em espanhol, inglês, francês e português.",
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
    profile: {
      title: "Perfil",
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
      question: "¿Cómo se siente algo antes de que el lenguaje lo defina?",
      intro: "Nacida y criada en Colombia, actualmente basada en los Países Bajos,\n" +
        "me encanta encontrar formas de llevar la poesía a objetos y tecnologías cotidianas.\n" +
        "Mi trabajo explora cómo la sensibilidad del realismo mágico latinoamericano puede vivir en el diseño contemporáneo.\n" +
        "Me interesa cómo la poesía y un poco de magia pueden existir en la tecnología diaria, usando herramientas artesanales y digitales.",
      desktopBlurb: " Valentina Marino, diseñadora de producto y experiencia, investigadora y desarrolladora.\n" +
        "Traduzo identidad cultural e inteligencia sensorial en diseño y tecnología contemporáneos.",
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
        {
          label: "Contacto",
          ariaLabel: "Contacto",
          href: "",
        },
      ],
    },
    about: {
      about: "Biografía",
      content: "Nací y crecí en Colombia, donde cultivé un fuerte sentido del ritmo, una profunda apreciación por la naturaleza y una sensibilidad hacia las cosas sutiles que no podemos ver. Después de vivir en Francia, una beca 'Rare Talents' me trajo a los Países Bajos, donde estudié arte y diseño industrial.\n" +
        "\n" +
        "Mi práctica es híbrida. Me muevo orgánicamente entre investigación sensorial de marca, objetos físicos e instalaciones, diseño de experiencia y desarrollo frontend.. siempre fluyendo entre los mundos físico y digital. Esta amplitud me permite conectar perspectivas que rara vez se sostienen juntas, y dar forma a un trabajo que se siente con capas y vivo.\n" +
        "\n" +
        "En Signify (Philips), desarrollé Value Tuning: una metodología cualitativa propietaria que decodifica cómo los productos comunican valor de marca a través del tacto, el sonido, el peso y el material. Le dio a los equipos de diseño evidencia para defender la calidad, y reveló la brecha entre lo que una marca promete y lo que una persona realmente siente al tenerla en mano.\n" +
        "\n" +
        "Durante los últimos cinco años trabajé como desarrolladora e ingeniería UI/UX en distintas industrias, construyendo productos digitales y traduciendo sistemas de diseño en código. Lo que más me gusta es dar forma a interfaces que responden tanto a la intención humana como a los datos. Esos años profundizaron mi comprensión de cómo los entornos digitales portan significado emocional y cultural.\n" +
        "\n" +
        "Más recientemente he explorado un camino independiente como consultora. Colaboro con equipos para reimaginar cómo la identidad y la tecnología pueden encontrarse. Actualmente trabajo con Carmela Collective, una plataforma cultural latinoamericana con sede en Ámsterdam, y con Qommunity en Bélgica. Ayudo a ambas a traducir sus misiones en presencias digitales coherentes y vivas.\n" +
        "\n" +
        "Estoy basada entre Ámsterdam y América Latina y trabajo de forma remota en ambos contextos. Estoy abierta a roles senior, asociaciones de consultoría y colaboraciones de investigación con estudios, instituciones culturales y marcas que exploran las intersecciones de identidad, tecnología y experiencia.\n" +
        "\n" +
        "Hablo con fluidez español, inglés, francés y portugués.",
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
            "De la identidad al frontend en producción. Diseño y construyo presencias web para organizaciones culturales y marcas creativas — empezando por quién eres, terminando con cómo apareces en línea. Propiedad total: estrategia, diseño, código."
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
    profile: {
      title: "Perfil",
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