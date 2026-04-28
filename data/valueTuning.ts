import { AlignmentIcon } from "@/components/value-tuning/svgs/AlignmentIcon";
import { ContextIcon } from "@/components/value-tuning/svgs/ContextIcon";
import { LayersIcon } from "@/components/value-tuning/svgs/LayersIcon";
import { OrderIcon } from "@/components/value-tuning/svgs/OrderIcon";
import { PhysicalityIcon } from "@/components/value-tuning/svgs/PhysicalityIcon";
import { WindowIcon } from "@/components/value-tuning/svgs/WindowIcon";
import type { ComponentType, SVGProps } from "react";

 
type BackgroundMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

type ResearchFinding = {
  quote: string;
  theme: string;
  insight: string;
  brand: string;
  background?: BackgroundMedia;
};

export type ValueTuningSvgIconProps = SVGProps<SVGSVGElement> & {
  stroke?: string;
  fill?: string;
};

export type ValueTuningSvgIcon = ComponentType<ValueTuningSvgIconProps>;

export type FrameworkParameter = {
  param: string;
  insight: string;
  icon?: ValueTuningSvgIcon;
  iconStroke?: string;
  iconFill?: string;
};
export const sensoryProtocolSteps = [
  {
    step: "01",
    title: "The Expectations",
    desc: `Before touching any product, users associate emotional words with each brand. "Authentic," "warm," "youthful"; these form the baseline of what the brand promises.`,
    insight:
      "WordCloud mapping reveals the halo effect: brand narrative shapes anticipated experience.",
    mediaType: "image",
    mediaSrc: "/media/valuetuning/expectations.png",
    mediaAlt:
      "Participants mapping emotional associations and expectations around brands",
  },
  {
    step: "02",
    title: "The Blind Test",
    desc: "Blindfolded, users evaluate the same products through touch, sound, and scent alone. No logos. No color. Just the raw sensory encounter. Every gesture is recorded.",
    insight:
      "Stripping away visual identity exposes the gap between narrative and material reality.",
    mediaType: "video",
    mediaSrc: "/media/valuetuning/blind.mov",
    mediaAlt:
      "Blindfolded participant interacting with products through touch",
  },
  {
    step: "03",
    title: "The Reveal",
    desc: "Finally, users see the product. The reveal tests whether visual branding confirms or contradicts their blind sensory assessment. The distance becomes visible.",
    insight:
      "Cognitive dissonance occurs when premium branding meets poor sensory execution.",
    mediaType: "video",
    mediaSrc: "/media/valuetuning/reveal.mov",
    mediaAlt:
      "Participant seeing the product after the blind sensory test",
  },
] as const;


export const researchFindings: ResearchFinding[] = [
    {
      quote:
        "If they do it like this [ripping gesture], you want people to know wether it's been opened or not... I will know I am the first one to open the box.",
      theme: "Tamper Evidence",
      insight:
        "Tamper-evident packaging creates emotional security and perceived newness. Users read packaging mechanics as a signal of care, integrity, and product freshness.",
      brand: "Brand C",
      background: {
        type: "video",
        src: "/media/valuetuning/research-findings/finding-1.mp4",
        alt: "Packaging detail showing first-open seal or tamper evidence",
      },
    },
    {
      quote:
        "It's actually kind of entangled. I cannot get it out, so I have to do more... I want to get the product first, that's the most important.",
      theme: "The Entanglement Problem",
      insight:
        "Cable management and internal packaging structure directly impact first impression. Complexity signals disrespect for user time.",
      brand: "Brand A",
      background: {
        type: "video",
        src: "/media/valuetuning/research-findings/finding-2.mp4",
        alt: "Packaging interaction showing tangled cable extraction",
      },
    },
    {
      quote:
        "Like, it even has an echoe...Yeah, it feels.. empty to me. It doesn't feel like quality product...",
      theme: "The Quality Hierarchy",
      insight:
        "Users intuitively categorize products into tiers. Consistency matters more than absolute quality—mismatched materials create cognitive dissonance.",
      brand: "Brand A",
      background: {
        type: "video",
        src: "/media/valuetuning/research-findings/finding-3.mp4",
        alt: "Product packaging and material detail suggesting perceived quality tiers",
      },
    },
    {
      quote:
        "I wouldn't have this next to my bed. It reminds me of an office... the tactility of it makes me think it's a practical object and not necessarily a home object.",
      theme: "Contextual Mismatch",
      insight:
        "Material choices determine spatial belonging. Hard plastic reads 'industrial'; soft-touch reads 'domestic'. Context determines appropriateness.",
      brand: "Brand A vs Brand C",
      background: {
        type: "video",
        src: "/media/valuetuning/research-findings/finding-4.mp4",
        alt: "Material interaction showing contrast between domestic and industrial feel",
      },
    },
    {
      quote:
        "This would become part of the interior [...] I could almost think of it as flowers? like taking care of it.",
      theme: "Emotional Bonding",
      insight:
        "Seamless transitions between soft-touch fabric and hardware create objects that invite touch. Users describe these as something I can grab and play with: domestic, personal, home-worthy.",
        brand: "Brand C",
      background: {
        type: "video",
        src: "/media/valuetuning/research-findings/finding-5.mp4",
        alt: "Product packaging and material detail suggesting perceived quality tiers",
      },
    },
    {
      quote:
        "ah, now I have a bunch of fallen booklets - instructions.. everything is loose.",
      theme: "Encounter with Content",
      insight:
        "Material choices determine spatial belonging. Hard plastic reads 'industrial'; soft-touch reads 'domestic'. Context determines appropriateness.",
      brand: "Brand A",
      background: {
        type: "video",
        src: "/media/valuetuning/research-findings/finding-6.mp4",
        alt: "Material interaction showing contrast between domestic and industrial feel",
      },
    },
] as const;

export const frameworkParameters = [
  {
    param: "Physicality",
    insight:
      "Every choice and tolerance of materials is expected to serve a purpose. Users sense when design is rushed or corners are cut.",
    icon: PhysicalityIcon,
    gradient: ["#1D1D1D", "#5B5B5B", "#bcfcca"],
  },
  {
    param: "Transparency",
    insight:
      "People value real access to content. Windows, viewing holes, immediate product visibility build trust and reduce anxiety.",
    icon: WindowIcon,
    gradient: ["#6d72c3", "#301a4b", "#e5d4ed"],
  },
  {
    param: "Order",
    insight:
      "The sequence of opening must be coherent. This order is echo of 'content chaos' signals carelessness, clarity signals attention and detail.",
    icon: OrderIcon,
    gradient: ["#2E5339", "#ff5666", "#495f41"],
  },
  {
    param: "Stratification",
    insight:
      "Layering the opening journey determines first impressions. Each step should reveal, not obscure.",
    icon: LayersIcon,
    gradient: ["#FF9914", "#FF6B00", "#b27c66"],
  },
  {
    param: "Alignment",
    insight:
      "Service must align with emotions, states of mind. The product should meet the user in their everyday life.",
    icon: AlignmentIcon,
    gradient: ["#cca43b", "#A18276", "363636"],
  },
  {
    param: "Context",
    insight:
      "Material choices determine distance between object and user. Fabric reads 'home'; plastic reads 'office'.",
    icon: ContextIcon,
    gradient: ["#7d8491", "#e59f71", "#BA5A31"],
  },
];
  
  export const methodologyAudits = [
    {
      num: "01",
      title: "Tactile Audit",
      desc: "Surface texture analysis, temperature conductivity, and pressure distribution mapping to optimize the 'first touch' moment.",
      placeholder: "[Texture Analysis Image]",
    },
    {
      num: "02",
      title: "Acoustic Profiling",
      desc: "Decibel measurement of opening mechanisms, closure satisfaction, and material resonance to engineer the 'sound of quality'.",
      placeholder: "[Acoustic Visualization]",
    },
    {
      num: "03",
      title: "Olfactory Branding",
      desc: "Identification of material off-gassing and intentional scent integration to create subconscious brand associations.",
      placeholder: "[Scent Mapping]",
    },
    {
      num: "04",
      title: "Visual Hierarchy",
      desc: "Beyond logo placement—analyzing reflectivity, shadow behavior, and color shift under varying light conditions.",
      placeholder: "[Light Study]",
    },
    {
      num: "05",
      title: "Proprioceptive Balance",
      desc: "Weight distribution, center of gravity, and ergonomic satisfaction in hand—crucial for perceived value.",
      placeholder: "[Weight Distribution]",
    },
    {
      num: "06",
      title: "Synthesis & Tuning",
      desc: "Cross-modal integration to ensure sensory coherence—where the whole becomes greater than the sum of parts.",
      placeholder: "[Final Product]",
    },
  ] as const;
  
  export const designCriteriaSections = [
    {
      category: "Packaging Hierarchy",
      criteria: [
        {
          label: "Product Visibility",
          desc: "User should see product within 3 seconds of opening. Viewing holes or transparent layers preferred.",
        },
        {
          label: "Documentation Layering",
          desc: "Manuals and warranties underneath product, not on top. Loose paper creates 'messy' perception.",
        },
        {
          label: "Single-Motion Access",
          desc: "Opening → Product removal should require ≤2 distinct actions. More steps = frustration.",
        },
        {
          label: "Cable Management",
          desc: "Cables must not be trapped in box folds. Entanglement signals poor planning.",
        },
      ],
    },
    {
      category: "Material Confidence",
      criteria: [
        {
          label: "Temperature Neutrality",
          desc: `Materials should feel neutral-to-warm (18-22°C) within 3 seconds. Cold plastic = "cheap".`,
        },
        {
          label: "Surface Continuity",
          desc: "Transitions between materials should be seamless or intentionally layered, not abrupt.",
        },
        {
          label: "Weight Substance",
          desc: `Actual weight should exceed visual expectation by 15-20%. Lightness = "flimsy".`,
        },
        {
          label: "Texture Intention",
          desc: "Micro-texture should signal purpose: grip zones vs. display surfaces.",
        },
      ],
    },
    {
      category: "Contextual Fit",
      criteria: [
        {
          label: "Domestic vs. Industrial",
          desc: `Soft-touch materials read "home"; hard plastic reads "office." Context determines appropriateness.`,
        },
        {
          label: "Blending vs. Standing Out",
          desc: "Product should be sleek enough to disappear, distinctive enough to invite touch.",
        },
        {
          label: "Orientation Clarity",
          desc: "Form should indicate usage: flat base, curved front, hard edges where wall meets.",
        },
      ],
    },
  ] as const;
  
  export const impactCards = [
    {
      title: "Strategic",
      desc: "Demonstrated that sensorial investment in packaging directly affected brand positioning against Apple and Google. The 'Volkswagen vs Audi' metaphor became internal shorthand.",
    },
    {
      title: "Tactical",
      desc: "Identified specific friction points like cable entanglement, documentation layering, material transitions—for immediate redesign in the HUE line.",
    },
    {
      title: "Political",
      desc: "Gave designers user-generated evidence to advocate for quality budgets, shifting the conversation from 'what can we save?' to 'what must we value?'",
    },
  ] as const;