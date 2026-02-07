// data/projects.ts
import type { GridItem, Project, ThemeClasses } from "@/types/project";
import type {
  DoubleBlock,
  GalleryBlock,
  ImageStoryBlock,
  InspirationBlock,
  MagazineBlock,
  MediaTextBlock,
  ProjectDetailBlock,
  QuoteBlock,
  TextTripticBlock,
  TimelineBlock,
  VideoBlock,
} from "@/types/project";
import type { Locale } from "@/lib/i18n";

type Localized<T> = T | { en: T; "pt-br": T; es?: T };

type LocalizedQuoteBlock = Omit<QuoteBlock, "quote"> & { quote: Localized<string> };
type LocalizedTextTripticBlock = Omit<TextTripticBlock, "title" | "subtitle" | "body"> & {
  title?: Localized<string>;
  subtitle?: Localized<string>;
  body?: Localized<string>;
};
type LocalizedDoubleBlock = DoubleBlock;
type LocalizedVideoBlock = Omit<VideoBlock, "caption"> & { caption: Localized<string> };
type LocalizedGalleryBlock = GalleryBlock;
type LocalizedMediaTextBlock = Omit<MediaTextBlock, "title" | "subtitle" | "text"> & {
  title: Localized<string>;
  subtitle: Localized<string>;
  text: Localized<string>;
};
type LocalizedImageStoryBlock = Omit<ImageStoryBlock, "title" | "subtitle" | "body"> & {
  title: Localized<string>;
  subtitle: Localized<string>;
  body: Localized<string>;
};
type LocalizedInspirationBlock = Omit<InspirationBlock, "heading" | "intro" | "items"> & {
  heading: Localized<string>;
  intro: Localized<string>;
  items: Array<{
    title: Localized<string>;
    subtitle?: Localized<string>;
    body: Localized<string>;
    media: InspirationBlock["items"][number]["media"];
  }>;
};
type LocalizedMagazineBlock = Omit<MagazineBlock, "text"> & { text?: Localized<string> };
type LocalizedTimelineBlock = Omit<TimelineBlock, "title" | "description" | "startLabel" | "items"> & {
  title?: Localized<string>;
  description?: Localized<string>;
  startLabel?: Localized<string>;
  items: Array<Omit<TimelineBlock["items"][number], "caption"> & { caption?: Localized<string> }>;
};

type LocalizedProjectDetailBlock =
  | LocalizedQuoteBlock
  | LocalizedMediaTextBlock
  | LocalizedTextTripticBlock
  | LocalizedImageStoryBlock
  | LocalizedVideoBlock
  | LocalizedInspirationBlock
  | LocalizedDoubleBlock
  | LocalizedMagazineBlock
  | LocalizedTimelineBlock
  | LocalizedGalleryBlock;

type LocalizedProject = Omit<Project, "title" | "tagline" | "description" | "tags" | "blocks"> & {
  title: Localized<string>;
  tagline?: Localized<string>;
  description?: Localized<string>;
  tags?: Array<Localized<string>>;
  blocks?: LocalizedProjectDetailBlock[];
};

const t = (en: string, pt: string, es?: string) => ({ en, "pt-br": pt, es });

function resolveLocalized<T>(value: Localized<T>, locale: Locale): T {
  if (value && typeof value === "object" && "en" in value) {
    const localized = value as { en: T; "pt-br": T; es?: T };
    return localized[locale] ?? localized["pt-br"] ?? localized.en;
  }
  return value as T;
}

function localizeString(value: Localized<string> | undefined, locale: Locale): string | undefined {
  if (!value) return value;
  return resolveLocalized(value, locale);
}

function localizeTags(tags: Array<Localized<string>> | undefined, locale: Locale) {
  if (!tags) return tags;
  return tags.map((tag) => resolveLocalized(tag, locale));
}

function localizeBlocks(
  blocks: LocalizedProjectDetailBlock[] | undefined,
  locale: Locale
): ProjectDetailBlock[] | undefined {
  if (!blocks) return undefined;

  return blocks.map((block) => {
    switch (block.type) {
      case "quote":
        return { ...block, quote: resolveLocalized(block.quote, locale) };
      case "mediaText":
        return {
          ...block,
          title: resolveLocalized(block.title, locale),
          subtitle: resolveLocalized(block.subtitle, locale),
          text: resolveLocalized(block.text, locale),
        };
      case "tripticGallery":
        return {
          ...block,
          title: localizeString(block.title, locale),
          subtitle: localizeString(block.subtitle, locale),
          body: localizeString(block.body, locale),
        };
      case "doubleGallery":
        return block;
      case "gallery":
        return block;
      case "imageStory":
        return {
          ...block,
          title: resolveLocalized(block.title, locale),
          subtitle: resolveLocalized(block.subtitle, locale),
          body: resolveLocalized(block.body, locale),
        };
      case "videoFull":
        return { ...block, caption: resolveLocalized(block.caption, locale) };
      case "inspiration":
        return {
          ...block,
          heading: resolveLocalized(block.heading, locale),
          intro: resolveLocalized(block.intro, locale),
          items: block.items.map((item) => ({
            ...item,
            title: resolveLocalized(item.title, locale),
            subtitle: item.subtitle ? resolveLocalized(item.subtitle, locale) : item.subtitle,
            body: resolveLocalized(item.body, locale),
          })),
        };
      case "magazine":
        return {
          ...block,
          text: block.text ? resolveLocalized(block.text, locale) : block.text,
        };
      case "timeline":
        return {
          ...block,
          title: block.title ? resolveLocalized(block.title, locale) : block.title,
          description: block.description ? resolveLocalized(block.description, locale) : block.description,
          startLabel: block.startLabel ? resolveLocalized(block.startLabel, locale) : block.startLabel,
          items: block.items.map((item) => ({
            ...item,
            caption: item.caption ? resolveLocalized(item.caption, locale) : item.caption,
          })),
        };
      default:
        return block;
    }
  }) as ProjectDetailBlock[];
}

export function localizeProject(project: LocalizedProject, locale: Locale): Project {
  return {
    ...project,
    title: resolveLocalized(project.title, locale),
    tagline: localizeString(project.tagline, locale),
    description: localizeString(project.description, locale),
    tags: localizeTags(project.tags, locale),
    blocks: localizeBlocks(project.blocks, locale),
  };
}

export type ThemeKey =
  | "home"
  | "totemica"
  | "rurales";

export const THEMES: Record<ThemeKey, ThemeClasses> = {
  home: {
    text: "text-white",
    bg: "transparent",
    border: "border-white/70",
    mobileModalBg: "transparent",
    logo: "text-white",
    nav: "text-white",
    love: "text-neutral-900",
  },

  totemica: {
    text: "text-amber-500",
    bg: "transparent",
    border: "border-amber-500",
    mobileModalBg: "bg-amber-500",
    logo: "text-amber-500",
    nav: "text-amber-500",
    love: "text-amber-500",
  },

  rurales: {
    text: "text-[#131b72]",
    bg: "transparent",
    border: "border-transparent",
    mobileModalBg: "transparent",
    logo: "text-[#131b72]",
    nav: "text-yellow-200",
    love: "text-[#131b72]",
  },
};

export function getTheme(theme: ThemeKey): ThemeClasses {
  return THEMES[theme] ?? THEMES.home;
}

  export const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];
  
  export const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

export const totemicaItems: GridItem[] = [
  {
    id: '1',
    src: '/media/totemica/rama-u.png',
    alt: 'Totemica image 1',
    imgClassName: 'object-contain -rotate-30',
    cellClassName: 'relative h-[300px] flex flex-col',
    ref: 'ref. ###',
  },
  {
    id: '2',
    src: '/media/totemica/rama-hoja.png',
    alt: 'Totemica image 2',
    imgClassName: 'object-contain md:py-6 py-0',
    cellClassName: 'relative h-[200px] flex flex-col',
    ref: 'ref. ###',
    // mobileCellClassName: "h-[420px]",
    // mobileImgClassName: "object-contain object-center",
  },
   
  {
    id: '3',
    src: '/media/totemica/rama-t.png',
    alt: 'Totemica image 3',
    imgClassName: 'object-contain rotate-25',
    cellClassName: 'relative aspect-3/4 flex flex-col',
    ref: 'ref. ###',
  },
 
  {
    id: '4',
    src: '/media/totemica/rama-iz.png',
    alt: 'Totemica image 4',
    imgClassName: 'object-contain pr-3',
    cellClassName: 'relative h-[600px] flex flex-col',
    ref: 'ref. ###',
  },
  {
    id: '5',
    src: '/media/totemica/rama-der.png',
    alt: 'Totemica image 5',
    imgClassName: 'object-contain p-1',
    cellClassName: 'relative h-[600px] flex flex-col',
    ref: 'ref. ###',
  },
  
  {
    id: '6',
    src: '/media/totemica/rama-y.png',
    alt: 'Totemica image 6',
    imgClassName: 'object-contain p-4 ',
    cellClassName: 'relative h-96 flex flex-col',
    ref: 'ref. ###',
    mobileCellClassName: "h-[420px]",
    mobileImgClassName: "object-contain object-center py-12",
  },
];

function normalizeSlug(slug?: string | null) {
  if (!slug) return "";
  return slug.replace(/^\/+/, "");
}

export function getProjects(locale: Locale): Project[] {
  return projectsData.map((project) => localizeProject(project, locale));
}

export function getProjectBySlug(locale: Locale, slug: string) {
  const normalized = normalizeSlug(slug);
  return getProjects(locale).find((project) => normalizeSlug(project.slug) === normalized);
}

export const ruralesItems: GridItem[] = [
  {
    id: '1',
    src: '/media/rurales/rural-1.png',
    alt: 'rurales image 1',
    imgClassName: 'object-contain ',
    cellClassName: 'relative h-[300px] flex flex-col',
    ref: 'ref. ###',
    baseWidthPx: 530,
    // minWidthPx: "",
    // maxWidthPx: "",
    mobileCellClassName: "h-[420px]",
    mobileImgClassName: "object-contain scale-[1.05] object-center",
  
  },
  {
    id: '2',
    src: '/media/rurales/rural-2.png',
    alt: 'rurales image 2',
    imgClassName: 'object-contain py-8 px-6',
    cellClassName: 'relative h-[280px] flex flex-col',
    ref: 'ref. ###',
    baseWidthPx: 320,
    // minWidthPx: "",
    // maxWidthPx: "",
    mobileCellClassName: "h-[400px]",
    mobileImgClassName: "object-contain py-10",
  
  },
  {
    id: '3',
    src: '/media/rurales/rural-3.png',
    alt: 'rurales image 3',
    imgClassName: 'object-contain',
    cellClassName: 'relative aspect-3/4 flex flex-col',
    ref: 'ref. ###',
    baseWidthPx: 220,
    // minWidthPx: "",
    // maxWidthPx: "",
    mobileCellClassName: "h-[400px]",
    mobileImgClassName: "object-contain px-10",
  
  },
  {
    id: '4',
    src: '/media/rurales/rural-6.png',
    alt: 'rurales image 4',
    imgClassName: 'object-contain pr-3',
    cellClassName: 'relative h-[600px] flex flex-col',
    ref: 'ref. ###',
    baseWidthPx: 280,
    // minWidthPx: "",
    // maxWidthPx: "",
    mobileCellClassName: "h-[450px]",
    mobileImgClassName: "object-contain py-10",
  
  },
  {
    id: '5',
    src: '/media/rurales/rural-5.png',
    alt: 'rurales image 5',
    imgClassName: 'object-contain p-1',
    cellClassName: 'relative h-[600px] flex flex-col',
    ref: 'ref. ###',
    baseWidthPx: 350,
    // minWidthPx: "",
    // maxWidthPx: "",
    mobileCellClassName: "h-[350px]",
    mobileImgClassName: "object-contain py-10",
  
  },
  {
    id: '6',
    src: '/media/rurales/rural-4.png',
    alt: 'rurales image 6',
    imgClassName: 'object-contain p-4 ',
    cellClassName: 'relative h-96 flex flex-col',
    ref: 'ref. ###',
    baseWidthPx: 220,
    // minWidthPx: "",
    // maxWidthPx: "",
  
    mobileCellClassName: "h-[350px]",
    mobileImgClassName: "object-contain py-10 pl-7 ",
  },
];

const projectsData: LocalizedProject[] = [
  // SILENCE OF BLUE
  {
    title: t("Silence of Blue", "Silêncio Azul", "Silencio Azul"),
    slug: 'silence-of-blue',
    thumbnail: '',
    videoThumbnail: '/media/sob-blue.mp4',
    year: '2024',
    tagline: t(
      "Interpreting silence through light & color.",
      "Interpretando o silêncio por meio de luz e cor.",
      "Interpretando el silencio a través de la luz y el color."
    ),
    description:
    t(
      "Could silence be experienced visually? This project translates stillness into light, inviting moments of\n" +
        "pause, attention, and presence.",
      "O silêncio pode ser vivido visualmente? Este projeto traduz a quietude em luz, convidando momentos de\n" +
        "pausa, atenção e presença.",
      "¿Puede el silencio experimentarse visualmente? Este proyecto traduce la quietud en luz, invitando momentos de\n" +
        "pausa, atención y presencia."
    ),
    tags: [
      t("Light Interaction", "Interação com Luz", "Interacción con Luz"),
      t("Color Perception", "Percepção de Cor", "Percepción del Color"),
      t("Silence", "Silêncio", "Silencio"),
      t("Meditative Design", "Design Meditativo", "Diseño Meditativo"),
      t("Research", "Pesquisa", "Investigación"),
      t("Atmosphere", "Atmosfera", "Atmósfera"),
      t("Wellbeing", "Bem-estar", "Bienestar"),
      t("Emotion", "Emoção", "Emoción"),
    ],
    heroVideo: '/media/sob-blue.mp4',

    blocks: [
      {
        type: 'quote',
        quote:
       t(
         'In a world saturated with noise, speed, and constant stimulation, \n' +
           'we are slowly losing the ability to contemplate what cannot be seen,\n' +
           'but is deeply felt. Silence of Blue emerges from a need to reconnect with\n' +
           'subtle layers of experience,\n' +
           'and to explore how design can guide us to sense them again. Through light and color,\n' +
           'the installation creates a space where perception slows down and silence becomes \n' +
           'something present, rather than absent.',
         'Em um mundo saturado de ruído, velocidade e estímulos constantes, \n' +
           'estamos lentamente perdendo a capacidade de contemplar o que não pode ser visto,\n' +
           'mas é profundamente sentido. Silence of Blue surge da necessidade de se reconectar com\n' +
           'camadas sutis de experiência,\n' +
           'e de explorar como o design pode nos guiar para senti-las novamente. Por meio da luz e da cor,\n' +
           'a instalação cria um espaço onde a percepção desacelera e o silêncio se torna \n' +
           'algo presente, e não ausente.',
         'En un mundo saturado de ruido, velocidad y estímulos constantes, \n' +
           'estamos perdiendo lentamente la capacidad de contemplar lo que no puede verse,\n' +
           'pero se siente profundamente. Silence of Blue surge de la necesidad de reconectar con\n' +
           'capas sutiles de experiencia,\n' +
           'y de explorar cómo el diseño puede guiarnos a sentirlas de nuevo. A través de la luz y el color,\n' +
           'la instalación crea un espacio donde la percepción se desacelera y el silencio se vuelve \n' +
           'algo presente, y no ausente.'
       )
    },
      {
        type: 'mediaText',
        media: {
          kind: 'video',
          // Prefer embed URL for iframes
          src: 'https://www.youtube.com/embed/pVhO3a8txho',
          alt: 'Silence of Blue documentation',
          aspect: "aspect-video",
          imgFit: ""
        },
        title: t("Mechanism & Effect", "Mecanismo e Efeito", "Mecanismo y Efecto"),
        subtitle: t(
          "Melkweg Awards - 2019 nominee",
          "Melkweg Awards - indicado em 2019",
          "Melkweg Awards - nominado en 2019"
        ),
        text: t(
          "As silence grows in the room, deep blue shadows gradually expand, flooding the surface and reshaping the space. The movement is intentionally minimal.  What matters here is not interaction in the traditional sense, but to stay long enough for silence to reveal itself.",
          "À medida que o silêncio cresce no ambiente, sombras azul‑profundo se expandem lentamente, inundando a superfície e remodelando o espaço. O movimento é intencionalmente mínimo. O que importa aqui não é a interação no sentido tradicional, mas permanecer tempo suficiente para que o silêncio se revele."
          ,
          "A medida que el silencio crece en el espacio, sombras azul profundo se expanden lentamente, inundando la superficie y remodelando el espacio. El movimiento es intencionalmente mínimo. Lo importante aquí no es la interacción en el sentido tradicional, sino permanecer el tiempo suficiente para que el silencio se revele."
        ),
      },
      {
        type: 'tripticGallery',
        title: '',
        body: t(
          'Rather than presenting light as a static source, the installation treats it as a temporal material evolving over time. No single image defines the piece. Meaning emerges in the transition, in the movement from one state to the next.',
          'Em vez de apresentar a luz como uma fonte estática, a instalação a trata como um material temporal que evolui com o tempo. Nenhuma imagem isolada define a obra. O sentido surge na transição, no movimento de um estado para o outro.'
          ,
          'En lugar de presentar la luz como una fuente estática, la instalación la trata como un material temporal que evoluciona con el tiempo. Ninguna imagen aislada define la obra. El sentido emerge en la transición, en el movimiento de un estado al siguiente.'
        ),       
        media: [
          {
            kind: 'image',
            aspect: 'aspect-square',
            fit: 'object-cover',
            src: '/media/sob/sob-1.png',
            alt: 'Silence of Blue, view 1',
          },
          {
            kind: 'image',
            aspect: 'aspect-square',
            fit: 'object-cover',
            src: '/media/sob/sob-2.png',
            alt: 'Silence of Blue, view 2',
          },
          {
            kind: 'image',
            aspect: 'aspect-square',
            fit: 'object-cover',
            src: '/media/sob/sob-3.png',
            alt: 'Silence of Blue, view 3',
          },
        ],
      },
      {
        type: 'imageStory',
        leftImage: {
          src: '/media/sob/sob-4.png',
          alt: 'Silence of Blue sculptural side view',
        },
        title: '',
        subtitle: '',
        body: t(
          'Seen in daylight and without illumination, the object becomes sculptural and almost dormant. \n' +
            'Its curved surface and internal mechanism hint at movement and potential, but remain still. \n' +
            'This dual state (inactive by day, alive through light), reinforces the project’s core idea: \n' +
            'silence as a condition, not a lack. Even when inactive, the object holds presence.',
          'Visto à luz do dia e sem iluminação, o objeto se torna escultórico e quase adormecido. \n' +
            'Sua superfície curva e o mecanismo interno sugerem movimento e potencial, mas permanecem imóveis. \n' +
            'Esse estado dual (inativo de dia, vivo pela luz) reforça a ideia central do projeto: \n' +
            'o silêncio como condição, não como falta. Mesmo quando inativo, o objeto mantém presença.'
          ,
          'Visto a la luz del día y sin iluminación, el objeto se vuelve escultórico y casi dormido. \n' +
            'Su superficie curva y el mecanismo interno sugieren movimiento y potencial, pero permanecen inmóviles. \n' +
            'Este estado dual (inactivo de día, vivo mediante la luz) refuerza la idea central del proyecto: \n' +
            'el silencio como condición, no como carencia. Incluso cuando está inactivo, el objeto mantiene presencia.'
        ),
        rightImage: {
          src: '/media/sob/sob-5.png',
          alt: 'Small model of Silence of Blue',
        },
      },
      {
        type: 'inspiration',
        heading: t("Inspiration & References", "Inspiração e Referências", "Inspiración y Referencias"),
        intro:
          t(
            'This project draws from natural and artistic moments where light transforms perception. Together, these references explore how stillness, color, and illumination can create contemplative spaces.',
            'Este projeto se inspira em momentos naturais e artísticos em que a luz transforma a percepção. Juntas, essas referências exploram como quietude, cor e iluminação podem criar espaços contemplativos.'
            ,
            'Este proyecto se inspira en momentos naturales y artísticos en los que la luz transforma la percepción. Juntas, estas referencias exploran cómo la quietud, el color y la iluminación pueden crear espacios contemplativos.'
          ),
        items: [
          {
            title: t(
              "Namib Desert Shadows (Smasara)",
              "Sombras do Deserto da Namíbia (Samsara)",
              "Sombras del Desierto del Namib (Samsara)"
            ),
            body: t(
              'The slow cinematic movement of shadow and light across dune surfaces. Silence as vastness, light as revelation where shadows reshape landscape.',
              'O movimento cinematográfico lento de sombra e luz sobre as dunas. Silêncio como vastidão; luz como revelação, onde as sombras remodelam a paisagem.'
              ,
              'El movimiento cinematográfico lento de sombra y luz sobre las dunas. Silencio como vastedad; la luz como revelación donde las sombras remodelan el paisaje.'
            ),
            media: {
              kind: 'video',
              src: '/media/sob/samsara-2.mp4',
              alt: 'Shifting shadows across desert dunes',
            },
          },
          {
            title: t(
              "Bird-of-Paradise Courtship Displays",
              "Rituais de Corte do Ave‑do‑paraíso",
              "Rituales de Corte del Ave del Paraíso"
            ),
            body: t(
              'The preformative unfolding of shape, color, and presence. Transformation through form and light.',
              'O desdobrar performativo de forma, cor e presença. Transformação por meio de forma e luz.'
              ,
              'El despliegue performativo de forma, color y presencia. Transformación a través de la forma y la luz.'
            ),
            media: {
              kind: 'video',
              src: '/media/sob/bop.mp4',
              alt: 'Bird-of-paradise courtship dance',
            },
          },
          {
            title: t('Jonh Cage - 4"33"', 'John Cage - 4"33"', 'John Cage - 4"33"'),
            body: t(
              'Silence as a frame for awareness, revealing what is already present.',
              'O silêncio como moldura para a consciência, revelando o que já está presente.'
              ,
              'El silencio como marco de conciencia, revelando lo que ya está presente.'
            ),
            media: {
              kind: 'video',
              src: '/media/sob/433.mp4',
              alt: 'Jonh Cag - 4"33"',
            },
          },
          {
            title: t("James Turrel", "James Turrell", "James Turrell"),
            body: t(
              'Light as a spatial and emotional medium, capable of dissolving boundaries and altering perception.',
              'Luz como meio espacial e emocional, capaz de dissolver fronteiras e alterar a percepção.'
              ,
              'La luz como medio espacial y emocional, capaz de disolver fronteras y alterar la percepción.'
            ),
            media: {
              kind: 'video',
              src: '/media/sob/turrel.mp4',
              alt: 'James Turrel light installation',
            },
          },
        ],
      },
      {
        type: "timeline",
        title: t("Research & Process", "Pesquisa e Processo", "Investigación y Proceso"),
        description: t(
          "The project was developed through iterative experimentation with form, materials, and light behavior. Early research focused on how curved surfaces interact with light, and how color saturation affects spatial perception. Prototyping included: material tests to achieve the desired diffusion, experiments with light intensity and rhythm, mechanical exploration to support slow, continuous movement, and repeated testing of how the blue projection behaved across different surfaces and environments.",
          "O projeto foi desenvolvido por meio de experimentação iterativa com forma, materiais e comportamento da luz. As primeiras pesquisas focaram em como superfícies curvas interagem com a luz e como a saturação de cor afeta a percepção espacial. Os protótipos incluíram: testes de materiais para alcançar a difusão desejada, experimentos com intensidade e ritmo da luz, exploração mecânica para apoiar movimento lento e contínuo, e testes repetidos de como a projeção azul se comportava em diferentes superfícies e ambientes."
          ,
          "El proyecto se desarrolló mediante experimentación iterativa con forma, materiales y comportamiento de la luz. Las primeras investigaciones se centraron en cómo las superficies curvas interactúan con la luz y cómo la saturación del color afecta la percepción espacial. El prototipado incluyó: pruebas de materiales para lograr la difusión deseada, experimentos con intensidad y ritmo de la luz, exploración mecánica para sostener un movimiento lento y continuo, y pruebas repetidas de cómo la proyección azul se comportaba en distintas superficies y entornos."
        ),
        baselineAt: 0.6,
        snap: true,
        edgeFade: true,
        wheelToHorizontal: true,
        items: [
          {
            id: "water inspiration",
            type: "video",
            src: "/media/tidal/tidal-beach.mp4",
            x: 21,
            width: 168,
            height: 210,
            caption: t("Biocommunication", "Biocomunicação", "Biocomunicación"),
          },
          {
            id: "water inspiration 2",
            type: "video",
            src: "/media/tidal/research/expo-2.mp4",
            x: 186,
            y: 0,
            width: 168,
            height: 210,
            caption: t("Biocommunication", "Biocomunicação", "Biocomunicación"),
          },
          {
            id: "water inspiration 3",
            type: "video",
            src: "/media/tidal/research/exp-1.mp4",
            x: 292,
            y: 68,
            width: 84,
            height: 126,
            caption: t("Biocommunication", "Biocomunicação", "Biocomunicación"),
          },
        
      //     //////////////////////
        
          {
            id: "light experiments",
            type: "video",
            src: "/media/tidal/research/expo-1.mp4",
            x: 506,
            width: 147,
            height: 210,
            caption: t("Biocommunication", "Biocomunicação", "Biocomunicación"),
          },
          {
            id: "light experiments 2",
            type: "image",
            src: "/media/tidal/research/exp-2.png",
            x: 651,
            y: 0,
            width: 136,
            height: 189,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
      //     //////////////////////
        
          {
            id: "vacuuming shape",
            type: "video",
            src: "/media/tidal/research/exec-1.mp4",
            x: 932,
            y: 0,
            width: 210,
            height: 147,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
          {
            id: "vacuumed shape",
            type: "image",
            src: "/media/tidal/research/exec-2.png",
            x: 1139,
            y: 0,
            width: 147,
            height: 210,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
      //     //////////////////////
        
          {
            id: "baked glass",
            type: "image",
            src: "/media/tidal/research/exec-3.png",
            x: 1405,
            y: 30,
            width: 210,
            height: 147,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
          {
            id: "baked glass 2",
            type: "video",
            src: "/media/tidal/research/exec-4.mp4",
            x: 1612,
            y: 0,
            width: 136,
            height: 189,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
      //     //////////////////////
        
          {
            id: "gloss layer",
            type: "image",
            src: "/media/tidal/research/test-1.png",
            x: 1922,
            y: 0,
            width: 210,
            height: 147,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
          {
            id: "gloss layer 2",
            type: "image",
            src: "/media/tidal/research/test-2.png",
            x: 2128,
            y: 0,
            width: 136,
            height: 189,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
          {
            id: "gloss layer 3",
            type: "image",
            src: "/media/tidal/research/test-3.png",
            x: 2263,
            y: 0,
            width: 158,
            height: 210,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
      //     //////////////////////
        
          {
            id: "exploration against day light",
            type: "image",
            src: "/media/tidal/research/expo-0.png",
            x: 2572,
            y: 0,
            width: 158,
            height: 210,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
          {
            id: "exploration against day light 2",
            type: "image",
            src: "/media/tidal/research/res-1.png",
            x: 2727,
            y: -50,
            width: 200,
            height: 189,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
      //     //////////////////////
        
          {
            id: "exploration night",
            type: "image",
            src: "/media/tidal/research/exp-3.png",
            x: 3042,
            y: 0,
            width: 136,
            height: 189,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
          {
            id: "exploration night 2",
            type: "image",
            src: "/media/tidal/research/exp-6.png",
            x: 3171,
            y: 0,
            width: 136,
            height: 189,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
          {
            id: "light exploration",
            type: "image",
            src: "/media/tidal/research/exp-4.png",
            x: 3303,
            y: 0,
            width: 210,
            height: 147,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        
          {
            id: "light exploration 2",
            type: "image",
            src: "/media/tidal/research/exp-5.png",
            x: 3509,
            y: 0,
            width: 136,
            height: 189,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica"),
          },
        ]
      }
    ],
  },

  // TOTEMICA
  {
    title: t("TOTÉMICA", "TOTÉMICA", "TOTÉMICA"),
    slug: '/totemica',
    thumbnail: '/media/totemic.png',
    mobileHeroImage: '/media/totemica/rama-doble.png',
    year: '2024',
    tagline: t(
      "Hand-painted driftwood branches",
      "Madeiras flutuantes pintados à mão",
      "Maderas a la deriva pintadas a mano"
    ),
    description:
      t(
        "Each collected from coastal and rural landscapes, and animated by rhythm and color. A quiet game between the sacred and the everyday.",
        "Cada galho foi coletado em paisagens costeiras e rurais, e animado por ritmo e cor. Um jogo silencioso entre o sagrado e o cotidiano."
        ,
        "Cada pedazo de madera fue recogido en paisajes costeros y rurales, animados por ritmo y color, transformandose esculpturas. Un juego silencioso entre lo sagrado y lo cotidiano."
      ),
    videoThumbnail: '',
    heroMedia: '/media/2.png',
    tags: [
      t("Wood", "Madeira", "Madera"),
      t("Composition", "Composição", "Composición"),
      t("Color", "Cor", "Color"),
      t("Material", "Material", "Material"),
      t("Ritual", "Ritual", "Ritual"),
    ],
  },

  // TIDAL LIGHT
  {
    title: t("Tidal Light", "Marés de Luz", "Mareas de Luz"),
    slug: 'tidal-light',
    // thumbnail: '/media/tidal.png',
    heroVideo: '/media/tidal/tidal-dark.mp4',
    videoThumbnail: '/media/tidal/tidal-experiment-1.mp4',
    tagline: t(
      "Breathing light installation.",
      "Instalação: luz que respira.",
      "Instalación: luz que respira."
    ),
    year: '2023',
    description:
      t(
        "Translating the rhythm of human breath into shifting pulses of light refracted through cast tiles of water.",
        "Traduzindo o ritmo da respiração humana em pulsos de luz que se transformam ao atravessar moldes de água.",
        "Traduciendo el ritmo de la respiración humana en pulsos de luz que se transforman al atravesar moldes de agua."
      ),
    tags: [
      t("Breath Interface", "Interface de Respiração", "Interfaz de Respiración"),
      t("Water & Light", "Água e Luz", "Agua y Luz"),
      t("Rhythm", "Ritmo", "Ritmo"),
      t("Meditative Design", "Design Meditativo", "Diseño Meditativo"),
      t("Interaction", "Interação", "Interacción"),
      t("Material Research", "Pesquisa de Materiais", "Investigación de Materiales"),
      t("Wellbeing", "Bem-estar", "Bienestar"),
    ],
    blocks: [
      {
        type: 'quote',
        quote: t(
          'Have you already noticed how your breathing pace sounds like ocean waves?  Tidal Light investigates how internal rhythms relate to natural ones. The installation draws a parallel between the pace of breathing and the movement of ocean waves, both slow, repetitive, and constantly in motion.',
          'Você já percebeu como o ritmo da sua respiração soa como ondas do oceano? Tidal Light investiga como ritmos internos se relacionam com ritmos naturais. A instalação traça um paralelo entre o ritmo da respiração e o movimento das ondas do mar, ambos lentos, repetitivos e em constante movimento.',
          '¿Ya has notado cómo el ritmo de tu respiración suena como las olas del océano? Tidal Light investiga cómo los ritmos internos se relacionan con los ritmos naturales. La instalación traza un paralelo entre el ritmo de la respiración y el movimiento de las olas del mar, ambos lentos, repetitivos y en constante movimiento.'
        )
      },

      {
        type: 'mediaText',
        media: {
          kind: 'video',
          // Prefer embed URL for iframes
          src: '/media/tidal/tidal-beach.mp4',
          alt: 'Silence of Blue documentation',
          aspect: "aspect-video",
          imgFit: ""
        },
        title: t("Concept", "Conceito", "Concepto"),
        subtitle: '',
        text: t(
          'By using breath as an input, the project creates a direct connection between the body and water. Changes in breathing pace influence the behavior of light, which is projected through textured casts of water. The resulting patterns resemble tides advancing and receding, translating an invisible physiological rhythm into a visible, spatial experience.',
          'Ao usar a respiração como entrada, o projeto cria uma conexão direta entre corpo e água. Mudanças no ritmo respiratório influenciam o comportamento da luz, que é projetada através de moldes texturizados de água. Os padrões resultantes lembram marés que avançam e recuam, traduzindo um ritmo fisiológico invisível em uma experiência espacial visível.'
          ,
          'Al usar la respiración como entrada, el proyecto crea una conexión directa entre el cuerpo y el agua. Los cambios en el ritmo respiratorio influyen en el comportamiento de la luz, que se proyecta a través de moldes texturizados de agua. Los patrones resultantes recuerdan a mareas que avanzan y retroceden, traduciendo un ritmo fisiológico invisible en una experiencia espacial visible.'
        )
      },
      
      {
        type: 'tripticGallery',
        title: t("Interaction & Perception", "Interação e Percepção", "Interacción y Percepción"),
        body: t(
          'The installation responds to breathing in real time. As the participant breathes, light pulses, shifts, and flows across the water tiles. Slower breaths produce calmer, wider movements; quicker breaths generate sharper, more restless patterns.',
          'A instalação responde à respiração em tempo real. À medida que a pessoa respira, a luz pulsa, se desloca e flui pelas placas de água. Respirações mais lentas geram movimentos mais calmos e amplos; respirações mais rápidas produzem padrões mais nítidos e inquietos.'
          ,
          'La instalación responde a la respiración en tiempo real. A medida que la persona respira, la luz pulsa, se desplaza y fluye por las placas de agua. Las respiraciones más lentas producen movimientos más calmados y amplios; las respiraciones más rápidas generan patrones más nítidos e inquietos.'
        ),
        media: [
          {
            kind: 'video',
            aspect: 'aspect-video',
            fit: '',
            src: '/media/tidal/tidal-experiment-1.mp4',
            alt: 'Tidal Light, Bright Atmosphere 1',
          },
          {
            kind: 'video',
            aspect: 'aspect-video',
            fit: '',
            src: '/media/tidal/tidal-dark.mp4',
            alt: 'Tidal Light, Dark Atmosphere 2',
          },
          {
            kind: 'image',
            aspect: 'aspect-video',
            fit: '',
            src: '/media/tidal/research/exp-4.png',
            alt: 'Tidal Light, Dark Atmosphere 2',
          },
        ],
      },

      {
        type: 'gallery',
        media: [
          {
            src: '/media/tidal/tidal-frag.png',
          },
          {
            src: '/media/tidal/tidal-frag-2.png',
          },
          {
            src: '/media/tidal/tidal-frag-3.png',
          },
        ],
      },
      {
        type: 'imageStory',
        leftImage: {
          src: '/media/tidal/tidal-expo-1.png',
          alt: 'Silence of Blue sculptural side view',
        },
        title: t("Breathing gets Materialised", "A respiração se materializa", "La respiración se materializa"),
        subtitle: t("Embassy of Water - Eindhoven 2019", "Embassy of Water - Eindhoven 2019", "Embassy of Water - Eindhoven 2019"),
        body: t(
          "This project grew from an interest in how humans intuitively relate to water. Long before we understand it intellectually, we respond to its rhythm: the sound of waves, the rise and fall of tides, the sense of continuity they create. I wanted to explore how this natural rhythm could be mirrored back through the body. Breathing felt like the most direct and universal interface, deeply connected to emotional states. By linking breath to light and water, Tidal Light creates a bridge between internal pace and environmental movement.",
          "Este projeto nasceu do interesse em como os humanos se relacionam intuitivamente com a água. Muito antes de compreendê‑la intelectualmente, respondemos ao seu ritmo: o som das ondas, o sobe e desce das marés, a sensação de continuidade que criam. Eu queria explorar como esse ritmo natural poderia ser refletido de volta pelo corpo. A respiração parecia a interface mais direta e universal, profundamente conectada a estados emocionais. Ao ligar respiração, luz e água, Tidal Light cria uma ponte entre o ritmo interno e o movimento do ambiente."
          ,
          "Este proyecto nació del interés por cómo los humanos se relacionan intuitivamente con el agua. Mucho antes de comprenderla intelectualmente, respondemos a su ritmo: el sonido de las olas, el subir y bajar de las mareas, la sensación de continuidad que crean. Quería explorar cómo este ritmo natural podría reflejarse de vuelta a través del cuerpo. La respiración parecía la interfaz más directa y universal, profundamente conectada a los estados emocionales. Al vincular respiración, luz y agua, Tidal Light crea un puente entre el ritmo interno y el movimiento del entorno."
        ),
        rightImage: {
          src: '/media/tidal/tidal-expo-2.png',
          alt: 'Small model of Silence of Blue',
        },
      },
      {
        type: "timeline",
        title: t("Inspiration, Research & Process", "Inspiração, Pesquisa e Processo", "Inspiración, Investigación y Proceso"),
        description: t(
          "Material experiments focused on water as a surface rather than a liquid. I created casts that capture the textures, ripples, and distortions of water in solid form, allowing light to behave unpredictably as it passes through them.",
          "Os experimentos de material focaram na água como superfície, e não como líquido. Criei moldes que capturam as texturas, ondulações e distorções da água em forma sólida, permitindo que a luz se comporte de maneira imprevisível ao atravessá-los."
          ,
          "Los experimentos de material se centraron en el agua como superficie y no como líquido. Creé moldes que capturan las texturas, ondulaciones y distorsiones del agua en forma sólida, permitiendo que la luz se comporte de manera impredecible al atravesarlos."
        ),
        baselineAt: 0.6,
        snap: true,
        edgeFade: true,
        wheelToHorizontal: true,
        items: [
          {
            id: "1",
            type: "video",
            src: "/media/tidal/tidal-beach.mp4",
            x: 20,
            width: 160,
            height: 200,
            caption: t("Biocommunication", "Biocomunicação", "Biocomunicación")
          },
          {
            id: "2",
            type: "video",
            src: "/media/tidal/research/expo-2.mp4",
            x: 177,
            y: 0,
            width: 160,
            height: 200,
            caption: t("Biocommunication", "Biocomunicação", "Biocomunicación")
          },
          {
            id: "0",
            type: "video",
            src: "/media/tidal/research/exp-1.mp4",
            x: 278,
            y: 68,
            width: 80,
            height: 120,
            caption: t("Biocommunication", "Biocomunicação", "Biocomunicación")
          },

           //////////////////////

          {
            id: "3",
            type: "video",
            src: "/media/tidal/research/expo-1.mp4",
            x: 482,
            width: 140,
            height: 200,
            caption: t("Biocommunication", "Biocomunicação", "Biocomunicación")
          },
          {
            id: "4",
            type: "image",
            src: "/media/tidal/research/exp-2.png",
            x: 620,
            y: 0,
            width: 130,
            height: 180,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },

           //////////////////////

          {
            id: "vacuuming shape",
            type: "video",
            src: "/media/tidal/research/exec-1.mp4",
            x: 888,
            y: 0,
            width: 200,
            height: 140,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },

          {
            id: "vacuumed shape",
            type: "image",
            src: "/media/tidal/research/exec-2.png",
            x: 1085,
            y: 0,
            width: 140,
            height: 200,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },

           //////////////////////

          {
            id: "baked glass",
            type: "image",
            src: "/media/tidal/research/exec-3.png",
            x: 1338,
            y: 30,
            width: 200,
            height: 140,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },

          {
            id: "baked glass 2",
            type: "video",
            src: "/media/tidal/research/exec-4.mp4",
            x: 1535,
            y: 0,
            width: 130,
            height: 180,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },

           //////////////////////

          {
            id: "gloss layer",
            type: "image",
            src: "/media/tidal/research/test-1.png",
            x: 1830,
            y: 0,
            width: 200,
            height: 140,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },

          {
            id: "gloss layer 2",
            type: "image",
            src: "/media/tidal/research/test-2.png",
            x: 2027,
            y: 0,
            width: 130,
            height: 180,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },
        
          {
            id: "gloss layer 3",
            type: "image",
            src: "/media/tidal/research/test-3.png",
            x: 2155,
            y: 0,
            width: 150,
            height: 200,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },

           //////////////////////

          {
            id: "exploration against day light",
            type: "image",
            src: "/media/tidal/research/expo-0.png",
            x: 2450,
            y: 0,
            width: 150,
            height: 200,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },
          {
            id: "exploration against day light 2",
            type: "image",
            src: "/media/tidal/research/res-1.png",
            x: 2597,
            y: -50,
            width: 190,
            height: 180,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },
          //////////////////////
          {
            id: "explo",
            type: "image",
            src: "/media/tidal/research/exp-3.png",
            x: 2897,
            y: 0,
            width: 130,
            height: 180,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },

            {
            id: "light exploration",
            type: "image",
            src: "/media/tidal/research/exp-4.png",
            x: 3023,
            y: 0,
            width: 200,
            height: 140,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },

          {
            id: "light exploration 2",
            type: "image",
            src: "/media/tidal/research/exp-5.png",
            x: 3219,
            y: 0,
            width: 130,
            height: 180,
            caption: t("Metabolic Health", "Saúde Metabólica", "Salud Metabólica")
          },

          {
            id: "light exploration 3",
            type: "video",
            src: "/media/tidal/tidal-experiment.mp4",
            x: 3400,
            width: 260,
            height: 170,
            caption: t("Biocommunication", "Biocomunicação", "Biocomunicación")
          },
        ]
      },
       {
            type: 'magazine',
            backgroundSrc: '/media/tidal/tidal-experiment-1.mp4',
            backgroundType: "video",
            backgroundAlt: "Experiment",
            text: "",
            maxHeightClassName: "max-h-[500px]",
            className: "md:mb-44",
            textClassName: "",
            imgFit: "object-cover rounded-xs"
            },
    ],
  },

  // MOONBAR
  {
    title: t("Moonbar", "Moonbar", "Moonbar"),
    slug: 'moonbar',
    tagline: t(
      "Solar-powered bicycle handlebar",
      "Guidão de bicicleta movido a energia solar",
      "Manillar de bicicleta alimentado por energía solar"
    ),
    thumbnail: '/media/moonbar2.png',
    heroMedia: '/media/moonbar/moonbar-hero.png',
    description: t(
      "Bicycle handlebar concept powered by a small solar panel, integrating stored sunlight directly into the grip.",
      "Conceito de guidão de bicicleta alimentado por um pequeno painel solar, integrando a luz armazenada diretamente na empunhadura."
      ,
      "Concepto de manillar de bicicleta alimentado por un pequeño panel solar, integrando la luz almacenada directamente en la empuñadura."
    ),
    tags: [
      t("Product Design", "Design de Produto", "Diseño de Producto"),
      t("Solar Power", "Energia Solar", "Energía Solar"),
      t("Urban Mobility", "Mobilidade Urbana", "Movilidad Urbana"),
      t("Lighting", "Iluminação", "Iluminación"),
      t("Sustainable Design", "Design Sustentável", "Diseño Sostenible"),
    ],
    blocks: [
      {
        type: 'quote',
        quote: t(
          'The same way the moon is visible not because it creates light, but because it reflects it, Moonbar works by absorbing sunlight and releases it when needed.',
          'Da mesma forma que a lua é visível não porque cria luz, mas porque a reflete, Moonbar funciona absorvendo a luz do sol e liberando-a quando necessário.'
          ,
          'De la misma manera que la luna es visible no porque crea luz, sino porque la refleja, Moonbar funciona absorbiendo la luz del sol y liberándola cuando es necesario.'
        )
      },
      {
        type: 'mediaText',
        media: {
          kind: 'video',
          src: '/media/moonbar/moonbar-full.mp4',
          alt: 'Silence of Blue documentation',
          aspect: "aspect-video",
          imgFit: ""
        },
        title: t("Concept", "Conceito", "Concepto"),
        subtitle: t("Moonbar Prototype", "Protótipo Moonbar", "Prototipo Moonbar"),
        text: t(
          'Grip, light, and energy source are combined into a single object. By embedding the light inside the handlebar, Moonbar removes the need for external bike lights and keeps the design clean. Light runs through the curved handlebar, creating a continuous glow instead of a direct beam. The result is subtle, calm, and functional.',
          'Empunhadura, luz e fonte de energia se combinam em um único objeto. Ao embutir a luz dentro do guidão, o Moonbar elimina a necessidade de luzes externas e mantém o design limpo. A luz percorre o guidão curvo, criando um brilho contínuo em vez de um feixe direto. O resultado é sutil, calmo e funcional.'
          ,
          'Empuñadura, luz y fuente de energía se combinan en un solo objeto. Al integrar la luz dentro del manillar, Moonbar elimina la necesidad de luces externas y mantiene el diseño limpio. La luz recorre el manillar curvo, creando un brillo continuo en lugar de un haz directo. El resultado es sutil, calmado y funcional.'
        )
         },

      {
        type: 'tripticGallery',
        title: t("Design & Form", "Design e Forma", "Diseño y Forma"),
        body: t(
          'Moonbar works automatically. The solar panel charges during the day, and the light turns on at night. The glow follows the curve of the bar, improving visibility without distracting the rider. The handlebar shape is inspired by lunar phases. Different curves were explored to balance ergonomics, light distribution, and material thickness.',
          'Moonbar funciona automaticamente. O painel solar carrega durante o dia, e a luz acende à noite. O brilho acompanha a curva do guidão, melhorando a visibilidade sem distrair o ciclista. A forma do guidão é inspirada nas fases da lua. Diferentes curvas foram exploradas para equilibrar ergonomia, distribuição de luz e espessura do material.'
          ,
          'Moonbar funciona automáticamente. El panel solar se carga durante el día y la luz se enciende por la noche. El brillo sigue la curva del manillar, mejorando la visibilidad sin distraer al ciclista. La forma del manillar está inspirada en las fases lunares. Se exploraron diferentes curvas para equilibrar ergonomía, distribución de la luz y grosor del material.'
        ),
         media: [
          {
            kind: 'image',
            fit: 'object-contain object-bottom',
            aspect: 'aspect-square',
            src: '/media/moonbar/moonbar-model-0.png',
            alt: 'Moonbar bike barhandle product sketch 1',
          },
          {
            kind: 'image',
            fit: 'object-contain object-bottom',
            aspect: 'aspect-square',
            src: '/media/moonbar/moonbar-model.jpg',
            alt: 'Moonbar bike barhandle product sketch 2',
          },
          {
            kind: 'image',
            fit: 'object-contain object-bottom',
            aspect: 'aspect-square',
            src: '/media/moonbar/moonbar-sketch-3.png',
            alt: 'Moonbar bike barhandle product sketch 3',
          },
          {
            kind: 'image',
            fit: 'object-contain object-top',
            aspect: 'aspect-square',
            src: '/media/moonbar/moonbar-model-1.png',
            alt: 'Moonbar bike barhandle product model 1',
          },
          {
            kind: 'image',
            fit: 'object-contain object-top',
            aspect: 'aspect-square',
            src: '/media/moonbar/moonbar-model-2.png',
            alt: 'Moonbar bike barhandle product model 2',
          },
          {
            kind: 'image',
            fit: 'object-contain object-top',
            aspect: 'aspect-square',
            src: '/media/moonbar/moonbar-model-3.png',
            alt: 'Moonbar bike barhandle product model 3',
          },
        ],
      },

      {
        type: 'imageStory',
        leftImage: {
          src: '/media/moonbar/luna-menguante.png',
          alt: 'Silence of Blue sculptural side view',
        },
        title: t("The Moon as reference", "A Lua como referência", "La Luna como referencia"),
        subtitle: "",
        body: t(
          "I was interested in how the moon becomes visible through reflection rather than emission. That idea felt relevant for sustainable design — using what is already available instead of adding more. Moonbar translates this principle into a functional object: sunlight is collected quietly, stored, and later reflected back as light. It’s a small gesture, but one that rethinks how everyday mobility objects can work more gently with their environment.",
          "Eu me interessei por como a lua se torna visível pela reflexão, e não pela emissão. Essa ideia parecia relevante para o design sustentável — usar o que já está disponível em vez de adicionar mais. Moonbar traduz esse princípio em um objeto funcional: a luz do sol é coletada de forma silenciosa, armazenada e depois refletida como luz. É um gesto pequeno, mas que repensa como objetos cotidianos de mobilidade podem operar de forma mais gentil com o ambiente."
          ,
          "Me interesó cómo la luna se vuelve visible por reflexión y no por emisión. Esa idea parecía relevante para el diseño sostenible: usar lo que ya está disponible en lugar de añadir más. Moonbar traduce este principio en un objeto funcional: la luz solar se recoge silenciosamente, se almacena y luego se refleja como luz. Es un gesto pequeño, pero que replantea cómo los objetos cotidianos de movilidad pueden funcionar de forma más amable con su entorno."
        ),
        rightImage: {
          src: '/media/moonbar/bar.png',
          alt: 'Crescent moon - Sunlight reflection',
        },
      },
      {
        type: 'doubleGallery',

        media: [
          {
            kind: 'image',
            fit: 'object-contain',
            aspect: 'aspect-square',
            src: '/media/moonbar/moonbar-use.png',
            alt: 'Moonbar bike barhandle product use ',
          },
          {
            kind: 'image',
            fit: 'object-contain',
            aspect: 'aspect-square',
            src: '/media/moonbar/moonbar-use-1.png',
            alt: 'Moonbar bike barhandle product use 1',
          },
        ],
      },
    ],
  },

  // FROZEN WOODS
  {
    heroMedia: '/media/frozen-woods/fw-hero.png',
    year: '2024',
    tagline: t(
      "Fragments of wood slowly reappear beneath the surface.",
      "Fragmentos de madeira reaparecem lentamente sob a superfície."
      ,
      "Fragmentos de madera reaparecen lentamente bajo la superficie."
    ),
    description:
      t(
        "Material research project centered on transformation and repurposing collected wood into sculptural objects.",
        "Projeto de pesquisa de materiais centrado na transformação e reaproveitamento de madeira coletada em objetos escultóricos."
        ,
        "Proyecto de investigación de materiales centrado en la transformación y reutilización de madera recolectada en objetos escultóricos."
      ),
      tags: [
        t("Wood", "Madeira", "Madera"),
        t("Quiet", "Silêncio", "Silencio"),
        t("Material Research", "Pesquisa de Materiais", "Investigación de Materiales"),
        t("Transformation", "Transformação", "Transformación"),
        t("Repurposing", "Reaproveitamento", "Reutilización"),
      ],
    title: t("Quiet Matter", "Matéria Silenciosa", "Materia Silenciosa"),
    slug: 'quiet-matter',
    thumbnail: '/media/frozen-woods-1.png',
    blocks: [
      {
        type: 'quote',
        quote:
          t(
            'The project reflects an ongoing interest in repurposing found materials — allowing traces of their origin to remain visible within more refined, intentional forms.',
            'O projeto reflete um interesse contínuo em reaproveitar materiais encontrados — permitindo que traços de sua origem permaneçam visíveis dentro de formas mais refinadas e intencionais.'
            ,
            'El proyecto refleja un interés continuo en reutilizar materiales encontrados, permitiendo que los rastros de su origen permanezcan visibles dentro de formas más refinadas e intencionales.'
          )
      },
      {
        type: 'magazine',
        backgroundSrc: "/media/frozen-woods/terracota-3.png",
        backgroundType: "image",
        backgroundAlt: "Frozen woods research",
        imgFit: "object-cover",

        backgroundSrc2: "/media/frozen-woods/blade.png",
        backgroundType2: "image",
        backgroundAlt2: "Frozen woods research",
        imgFit2: "object-cover",

        text: "", 
        maxHeightClassName: "max-h-[700px]",
        className: "",
        textClassName: "text-md",
      },
      {
          type: 'magazine',
          backgroundSrc: '/media/frozen-woods-1.png', 
          backgroundType: "image",
          backgroundAlt: "Frozen woods research",
          text: "",
          maxHeightClassName: "max-h-[500px]",
          className: "",
          textClassName: "",
          imgFit: "object-contain px-14 md:px-0 max-h-[500px]"
      },
      {
            type: 'magazine',
            backgroundSrc: '/media/frozen-woods/pairs2.png',
            backgroundType: "image",
            backgroundAlt: "Frozen woods research",

            text: "",
            maxHeightClassName: "max-h-[500px]",
            className: "",
            textClassName: "",
            imgFit: "object-cover"
      },
      
    ],
  },

  // RURALES
  {
    title: t("RURALES", "RURALES", "RURALES"),
    slug: '/rurales',
    thumbnail: '/media/rurales.png',
    mobileHeroImage:'/media/rurales/rural-6.png',
    year: '2024',
    tagline: t(
      "Hand-painted driftwood branches",
      "Madeiras flutuantes pintadas à mão",
      "Maderas a la deriva pintadas a mano"
    ),
    description:
      t(
        "Each collected from coastal and rural landscapes, and animated by rhythm and color. A quiet game between the sacred and the everyday.",
        "Cada pedaço de madeira foi coletado em paisagens costeiras e rurais, animado por ritmo e cor, e se transformando em escultura. Um jogo silencioso entre o sagrado e o cotidiano.",
        "Cada pedazo de madera fue recogido en paisajes costeros y rurales, animado por ritmo y color, y transformandose en esulcturas. Un juego silencioso entre lo sagrado y lo cotidiano."
      ),
    videoThumbnail: '',
    heroMedia: '/media/rurales.png',
    tags: [
      t("Wood", "Madeira", "Madera"),
      t("Composition", "Composição", "Composición"),
      t("Color", "Cor", "Color"),
      t("Material", "Material", "Material"),
      t("Ritual", "Ritual", "Ritual"),
    ],
  },

   // MARIANROSAS
   {
    title: t("MARIANROSAS", "MARIANROSAS", "MARIANROSAS"),
    link: 'https://soundcloud.com/marianrosas',
    heroVideo: '/media/marianrosas.mp4',
    videoThumbnail: '/media/marianrosas.mp4',
    description:
      t("I DJ sometimes ◡̈", "Às vezes sou DJ ◡̈", "A veces soy DJ ◡̈"),
  },

   // DEV-WORK
   {
    title: t("DEV Work", "DEV Work", "DEV Work"),
    link: 'https://valenmarino.vercel.app/',
    heroVideo: '/media/dev-work.mp4',
    videoThumbnail: '/media/dev-work.mp4',
    description:
      t("Work in web frontend development.", "Trabalhos de desenvolvimento web frontend.", "Trabajos de programación web."),
  },
  
  // MERGED LANDSCAPES
  {
    title: t("Merged Landscapes", "Paisagens Fundidas", "Paisajes Fusionados"),
    slug: 'merged-landscapes',
    thumbnail: '/media/merged-landscapes.png',
    description:
      t(
        "Synthetic representations of natural growth through algorithmic textures.",
        "Representações sintéticas do crescimento natural por meio de texturas algorítmicas.",
        "Representaciones sintéticas del crecimiento natural mediante texturas algorítmicas."
      ),
  },

  // VALUE TUNING
  // {
  //   title: t("Value Tuning", "Ajuste de Valores", "Ajuste de Valores"),
  //   slug: 'value-tuning',
  //   thumbnail: '/media/value-tuning.png',
  //   description:
  //     t(
  //       "Synthetic representations of natural growth through algorithmic textures.",
  //       "Representações sintéticas do crescimento natural por meio de texturas algorítmicas.",
  //       "Representaciones sintéticas del crecimiento natural mediante texturas algorítmicas."
  //     ),
  // },

  
];
