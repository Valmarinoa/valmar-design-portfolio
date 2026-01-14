// data/projects.ts
import type { GridItem, Project, ThemeClasses } from '@/types/project';

export type ThemeKey =
  | "totemica"
  | "rurales"

  export const THEMES: Record<ThemeKey, ThemeClasses> = {
    // Project-level themes (recommended)
    totemica: {
      text: "text-amber-500",
      bg: "transparent",
      border: "border-amber-500",
      mobileModalBg: "bg-amber-500",
    },
    rurales: {
      text: "text-blue-950",
      bg: "transparent",
      border: "border-blue-950",
      mobileModalBg: "transparent",
    },
  }
  
  export function getTheme(theme: ThemeKey): ThemeClasses {
    return THEMES[theme] ?? THEMES.rurales;
  }

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

export const projects: Project[] = [
  // SILENCE OF BLUE
  {
    title: 'Silence of Blue',
    slug: 'silence-of-blue',
    thumbnail: '',
    videoThumbnail: '/media/sob-blue.mp4',
    year: '2024',
    tagline: 'Interpreting silence through light & color.',
    description:
    'Could silence be experienced visually?'+
    ' This project translates stillness into light, inviting moments of\n' +
     'pause, attention, and presence.',
    tags: ['Light Interaction', 'Color Perception', 'Silence', 'Meditative Design', 'Research', 'Atmosphere', 'Wellbeing', 'Emotion'],
    heroVideo: '/media/sob/1.mp4',

    blocks: [
      {
        type: 'quote',
        quote:
       'In a world saturated with noise, speed, and constant stimulation, \n' +
       'we are slowly losing the ability to contemplate what cannot be seen,\n' +
       'but is deeply felt. Silence of Blue emerges from a need to reconnect with\n' +
       'subtle layers of experience,\n' +
       'and to explore how design can guide us to sense them again. Through light and color,\n' +
      'the installation creates a space where perception slows down and silence becomes \n' +
      'something present, rather than absent.'      
    },
      // {
      //   type: 'quote',
      //   quote:'Light installation exploring how silence can be experienced through slow, shifting fields of deep blue illumination. The piece emerges from an increasing need in our culture to reconnect with what we cannot see but deeply feel.'
      // },
      {
        type: 'mediaText',
        media: {
          kind: 'video',
          // Prefer embed URL for iframes
          src: 'https://www.youtube.com/embed/pVhO3a8txho',
          alt: 'Silence of Blue documentation',
        },
        title: 'Mechanism & Effect',
        subtitle: 'Melkweg Awards - 2019 nominee',
        text: 'As silence grows in the room, deep blue shadows gradually expand, flooding the surface and reshaping the space. The movement is intentionally minimal.  What matters here is not interaction in the traditional sense, but to stay long enough for silence to reveal itself.',
      },
      {
        type: 'tripticGallery',
        title: '',
        body: 'Rather than presenting light as a static source, the installation treats it as a temporal material evolving over time. No single image defines the piece. Meaning emerges in the transition, in the movement from one state to the next.' ,       
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
        body: 'Seen in daylight and without illumination, the object becomes sculptural and almost dormant. \n' +
         'Its curved surface and internal mechanism hint at movement and potential, but remain still. \n' +
         'This dual state (inactive by day, alive through light), reinforces the project’s core idea: \n' +
         'silence as a condition, not a lack. Even when inactive, the object holds presence.',
        rightImage: {
          src: '/media/sob/sob-5.png',
          alt: 'Small model of Silence of Blue',
        },
      },

      {
        type: 'inspiration',
        heading: 'Inspiration & References',
        intro:
          'This project draws from natural and artistic moments where light transforms perception. Together, these references explore how stillness, color, and illumination can create contemplative spaces.',
        items: [
          {
            title: 'Namib Desert Shadows (Smasara)',
            body: 'The slow cinematic movement of shadow and light across dune surfaces. Silence as vastness, light as revelation where shadows reshape landscape.',
            media: {
              kind: 'video',
              src: '/media/sob/samsara-2.mp4',
              alt: 'Shifting shadows across desert dunes',
            },
          },
          {
            title: 'Bird-of-Paradise Courtship Displays',
            body: 'The preformative unfolding of shape, color, and presence. Transformation through form and light.',
            media: {
              kind: 'video',
              src: '/media/sob/bop.mp4',
              alt: 'Bird-of-paradise courtship dance',
            },
          },
          {
            title: 'Jonh Cage - 4"33"',
            body: 'Silence as a frame for awareness, revealing what is already present.',
            media: {
              kind: 'video',
              src: '/media/sob/433.mp4',
              alt: 'Jonh Cag - 4"33"',
            },
          },
          {
            title: 'James Turrel',
            body: 'Light as a spatial and emotional medium, capable of dissolving boundaries and altering perception.',
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
        title: "Research & Process",
        description: "The project was developed through iterative experimentation with form, materials, and light behavior. Early research focused on how curved surfaces interact with light, and how color saturation affects spatial perception. Prototyping included: material tests to achieve the desired diffusion, experiments with light intensity and rhythm, mechanical exploration to support slow, continuous movement, and repeated testing of how the blue projection behaved across different surfaces and environments.",
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
            caption: "Biocommunication",
          },
          {
            id: "water inspiration 2",
            type: "video",
            src: "/media/tidal/research/expo-2.mp4",
            x: 186,
            y: 0,
            width: 168,
            height: 210,
            caption: "Biocommunication",
          },
          {
            id: "water inspiration 3",
            type: "video",
            src: "/media/tidal/research/exp-1.mp4",
            x: 292,
            y: 68,
            width: 84,
            height: 126,
            caption: "Biocommunication",
          },
        
          //////////////////////
        
          {
            id: "light experiments",
            type: "video",
            src: "/media/tidal/research/expo-1.mp4",
            x: 506,
            width: 147,
            height: 210,
            caption: "Biocommunication",
          },
          {
            id: "light experiments 2",
            type: "image",
            src: "/media/tidal/research/exp-2.png",
            x: 651,
            y: 0,
            width: 136,
            height: 189,
            caption: "Metabolic Health",
          },
        
          //////////////////////
        
          {
            id: "vacuuming shape",
            type: "video",
            src: "/media/tidal/research/exec-1.mp4",
            x: 932,
            y: 0,
            width: 210,
            height: 147,
            caption: "Metabolic Health",
          },
        
          {
            id: "vacuumed shape",
            type: "image",
            src: "/media/tidal/research/exec-2.png",
            x: 1139,
            y: 0,
            width: 147,
            height: 210,
            caption: "Metabolic Health",
          },
        
          //////////////////////
        
          {
            id: "baked glass",
            type: "image",
            src: "/media/tidal/research/exec-3.png",
            x: 1405,
            y: 30,
            width: 210,
            height: 147,
            caption: "Metabolic Health",
          },
        
          {
            id: "baked glass 2",
            type: "video",
            src: "/media/tidal/research/exec-4.mp4",
            x: 1612,
            y: 0,
            width: 136,
            height: 189,
            caption: "Metabolic Health",
          },
        
          //////////////////////
        
          {
            id: "gloss layer",
            type: "image",
            src: "/media/tidal/research/test-1.png",
            x: 1922,
            y: 0,
            width: 210,
            height: 147,
            caption: "Metabolic Health",
          },
        
          {
            id: "gloss layer 2",
            type: "image",
            src: "/media/tidal/research/test-2.png",
            x: 2128,
            y: 0,
            width: 136,
            height: 189,
            caption: "Metabolic Health",
          },
        
          {
            id: "gloss layer 3",
            type: "image",
            src: "/media/tidal/research/test-3.png",
            x: 2263,
            y: 0,
            width: 158,
            height: 210,
            caption: "Metabolic Health",
          },
        
          //////////////////////
        
          {
            id: "exploration against day light",
            type: "image",
            src: "/media/tidal/research/expo-0.png",
            x: 2572,
            y: 0,
            width: 158,
            height: 210,
            caption: "Metabolic Health",
          },
          {
            id: "exploration against day light 2",
            type: "image",
            src: "/media/tidal/research/res-1.png",
            x: 2727,
            y: -50,
            width: 200,
            height: 189,
            caption: "Metabolic Health",
          },
        
          //////////////////////
        
          {
            id: "exploration night",
            type: "image",
            src: "/media/tidal/research/exp-3.png",
            x: 3042,
            y: 0,
            width: 136,
            height: 189,
            caption: "Metabolic Health",
          },
        
          {
            id: "exploration night 2",
            type: "image",
            src: "/media/tidal/research/exp-6.png",
            x: 3171,
            y: 0,
            width: 136,
            height: 189,
            caption: "Metabolic Health",
          },
        
          {
            id: "light exploration",
            type: "image",
            src: "/media/tidal/research/exp-4.png",
            x: 3303,
            y: 0,
            width: 210,
            height: 147,
            caption: "Metabolic Health",
          },
        
          {
            id: "light exploration 2",
            type: "image",
            src: "/media/tidal/research/exp-5.png",
            x: 3509,
            y: 0,
            width: 136,
            height: 189,
            caption: "Metabolic Health",
          },
        ]
        
      }

    
    ],
  },

  // TOTEMICA
  {
    title: 'TOTÉMICA',
    slug: '/totemica',
    thumbnail: '/media/totemic.png',
    mobileHeroImage: '/media/totemica/rama-doble.png',
    year: '2024',
    tagline:'Hand-painted driftwood branches',
    description:
      'Each collected from coastal and rural landscapes, and animated by rhythm and color. A quiet game between the sacred and the everyday.',
    videoThumbnail: '',
    heroMedia: '/media/2.png',
    tags: ['Wood', 'Composition', 'Color', 'Material', 'Ritual'],

    // blocks: [] // you can add later if needed
  },

  // TIDAL LIGHT
  {
    title: 'Tidal Light',
    slug: 'tidal-light',
    // thumbnail: '/media/tidal.png',
    heroVideo: '/media/tidal/tidal-dark.mp4',
    videoThumbnail: '/media/tidal/tidal-experiment-1.mp4',
    tagline: 'Breathing light installation.',
    year: '2023',
    description:
      'Translating the rhythm of human breath into shifting pulses of light refracted through cast tiles of water.',
    tags: ['Breath Interface', 'Water & Light', 'Rhythm', 'Meditative Design', 'Interaction', 'Material Research', 'Wellbeing'],
    blocks: [
      {
        type: 'quote',
        quote: 'Have you already noticed how your breathing pace sounds like ocean waves?  Tidal Light investigates how internal rhythms relate to natural ones. The installation draws a parallel between the pace of breathing and the movement of ocean waves, both slow, repetitive, and constantly in motion.'      },

      {
        type: 'mediaText',
        media: {
          kind: 'video',
          // Prefer embed URL for iframes
          src: '/media/tidal/tidal-beach.mp4',
          alt: 'Silence of Blue documentation',
        },
        title: 'Concept',
        subtitle: '',
        text: 'By using breath as an input, the project creates a direct connection between the body and water. Changes in breathing pace influence the behavior of light, which is projected through textured casts of water. The resulting patterns resemble tides advancing and receding, translating an invisible physiological rhythm into a visible, spatial experience.' 
      },
      
      {
        type: 'tripticGallery',
        title: 'Interaction & Perception',
        body: 'The installation responds to breathing in real time. As the participant breathes, light pulses, shifts, and flows across the water tiles. Slower breaths produce calmer, wider movements; quicker breaths generate sharper, more restless patterns.',
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
        title: 'Breathing gets Materialised',
        subtitle:"Embassy of Water - Eindhoven 2019",
        body: "This project grew from an interest in how humans intuitively relate to water. Long before we understand it intellectually, we respond to its rhythm: the sound of waves, the rise and fall of tides, the sense of continuity they create. I wanted to explore how this natural rhythm could be mirrored back through the body. Breathing felt like the most direct and universal interface, deeply connected to emotional states. By linking breath to light and water, Tidal Light creates a bridge between internal pace and environmental movement.",
        rightImage: {
          src: '/media/tidal/tidal-expo-2.png',
          alt: 'Small model of Silence of Blue',
        },
      },
      {
        type: "timeline",
        title: "Inspiration, Research & Process",
        description: "Material experiments focused on water as a surface rather than a liquid. I created casts that capture the textures, ripples, and distortions of water in solid form, allowing light to behave unpredictably as it passes through them.",
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
            caption: "Biocommunication"
          },
          {
            id: "2",
            type: "video",
            src: "/media/tidal/research/expo-2.mp4",
            x: 177,
            y: 0,
            width: 160,
            height: 200,
            caption: "Biocommunication"
          },
          {
            id: "0",
            type: "video",
            src: "/media/tidal/research/exp-1.mp4",
            x: 278,
            y: 68,
            width: 80,
            height: 120,
            caption: "Biocommunication"
          },

           //////////////////////

          {
            id: "3",
            type: "video",
            src: "/media/tidal/research/expo-1.mp4",
            x: 482,
            width: 140,
            height: 200,
            caption: "Biocommunication"
          },
          {
            id: "4",
            type: "image",
            src: "/media/tidal/research/exp-2.png",
            x: 620,
            y: 0,
            width: 130,
            height: 180,
            caption: "Metabolic Health"
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
            caption: "Metabolic Health"
          },

          {
            id: "vacuumed shape",
            type: "image",
            src: "/media/tidal/research/exec-2.png",
            x: 1085,
            y: 0,
            width: 140,
            height: 200,
            caption: "Metabolic Health"
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
            caption: "Metabolic Health"
          },

          {
            id: "baked glass 2",
            type: "video",
            src: "/media/tidal/research/exec-4.mp4",
            x: 1535,
            y: 0,
            width: 130,
            height: 180,
            caption: "Metabolic Health"
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
            caption: "Metabolic Health"
          },

          {
            id: "gloss layer 2",
            type: "image",
            src: "/media/tidal/research/test-2.png",
            x: 2027,
            y: 0,
            width: 130,
            height: 180,
            caption: "Metabolic Health"
          },
        
          {
            id: "gloss layer 3",
            type: "image",
            src: "/media/tidal/research/test-3.png",
            x: 2155,
            y: 0,
            width: 150,
            height: 200,
            caption: "Metabolic Health"
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
            caption: "Metabolic Health"
          },
          {
            id: "exploration against day light 2",
            type: "image",
            src: "/media/tidal/research/res-1.png",
            x: 2597,
            y: -50,
            width: 190,
            height: 180,
            caption: "Metabolic Health"
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
            caption: "Metabolic Health"
          },

            {
            id: "light exploration",
            type: "image",
            src: "/media/tidal/research/exp-4.png",
            x: 3023,
            y: 0,
            width: 200,
            height: 140,
            caption: "Metabolic Health"
          },

          {
            id: "light exploration 2",
            type: "image",
            src: "/media/tidal/research/exp-5.png",
            x: 3219,
            y: 0,
            width: 130,
            height: 180,
            caption: "Metabolic Health"
          },

          {
            id: "light exploration 3",
            type: "video",
            src: "/media/tidal/tidal-experiment.mp4",
            x: 3400,
            width: 260,
            height: 170,
            caption: "Biocommunication"
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
    title: 'Moonbar',
    slug: 'moonbar',
    tagline: 'Solar-powered bicycle handlebar',
    thumbnail: '/media/moonbar2.png',
    heroMedia: '/media/moonbar/moonbar-hero.png',
    description: 'Bicycle handlebar concept powered by a small solar panel, integrating stored sunlight directly into the grip.',
    tags: ['Product Design', 'Solar Power',  'Urban Mobility', 'Lighting', 'Sustainable Design'],
    blocks: [
      {
        type: 'quote',
        quote: 'The same way the moon is visible not because it creates light, but because it reflects it, Moonbar works by absorbing sunlight and releases it when needed.'      },
      {
        type: 'mediaText',
        media: {
          kind: 'video',
          src: '/media/moonbar/moonbar-full.mp4',
          alt: 'Silence of Blue documentation',
        },
        title: 'Concept',
        subtitle: 'Moonbar Prototype',
        text: 'Grip, light, and energy source are combined into a single object. By embedding the light inside the handlebar, Moonbar removes the need for external bike lights and keeps the design clean. Light runs through the curved handlebar, creating a continuous glow instead of a direct beam. The result is subtle, calm, and functional.'
         },

      {
        type: 'tripticGallery',
        title: 'Design & Form',
        body: 'Moonbar works automatically. The solar panel charges during the day, and the light turns on at night. The glow follows the curve of the bar, improving visibility without distracting the rider. The handlebar shape is inspired by lunar phases. Different curves were explored to balance ergonomics, light distribution, and material thickness.',
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
        title: 'The Moon as reference',
        subtitle: "",
        body: "I was interested in how the moon becomes visible through reflection rather than emission. That idea felt relevant for sustainable design — using what is already available instead of adding more. Moonbar translates this principle into a functional object: sunlight is collected quietly, stored, and later reflected back as light. It’s a small gesture, but one that rethinks how everyday mobility objects can work more gently with their environment.",
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
    tagline: 'Interpreting silence through color.',
    description:
      'An interactive light installation that translates the rhythm of human breath into shifting pulses of light refracted through cast tiles of water.',
    tags: ['Light', 'Low-tech', 'Silence', 'Meditative Interface', 'Color'],
    title: 'Frozen Woods',
    slug: 'frozen-woods',
    thumbnail: '/media/frozen-woods-1.png',
    blocks: [
      {
        type: 'quote',
        quote:
          'Light installation exploring how silence can be experienced through slow, shifting fields of deep blue illumination. The piece emerges from an increasing need in our culture to reconnect with what we cannot see but deeply feel.',
      },
      {
        type: 'magazine',
        backgroundSrc: "/media/frozen-woods/double.png",
        backgroundType: "image",
        backgroundAlt: "Frozen woods research",
        text: "'An interactive light installation that translates the rhythm of human breath into shifting pulses of light refracted through cast tiles of water.'",
        maxHeightClassName: "max-h-[700px]",
        className: "",
        textClassName: "text-md",
        imgFit: "object-cover rounded-sm"
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
          imgFit: "object-contain"
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
            imgFit: "object-cover rounded-sm"
            },
    ],
  },

  // RURALES
  {
    title: 'RURALES',
    slug: '/rurales',
    thumbnail: '/media/rurales.png',
    mobileHeroImage:'/media/rurales/rural-6.png',
    year: '2024',
    tagline:'Hand-painted driftwood branches',
    description:
      'Each collected from coastal and rural landscapes, and animated by rhythm and color. A quiet game between the sacred and the everyday.',
    videoThumbnail: '',
    heroMedia: '/media/rurales.png',
    tags: ['Wood', 'Composition', 'Color', 'Material', 'Ritual'],
  },

  // VALUE TUNING
  {
    title: 'Value Tuning',
    slug: 'value-tuning',
    thumbnail: '/media/value-tuning.png',
    description:
      'Synthetic representations of natural growth through algorithmic textures.',
  },

  // MERGED LANDSCAPES
  {
    title: 'Merged Landscapes',
    slug: 'merged-landscapes',
    thumbnail: '/media/merged-landscapes.png',
    description:
      'Synthetic representations of natural growth through algorithmic textures.',
  },
];
