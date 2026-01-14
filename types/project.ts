export type ThemeClasses = {
  text: string;
  bg: string;
  border: string;
  mobileModalBg: string;
  logo: string;
  nav: string; 
};

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}
export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}

export type GridItem = {
  id: string;
  src: string;
  alt?: string;
  imgClassName?: string;
  cellClassName?: string;
  ref?: string;

  // Desktop carousel sizing
  baseWidthPx?: number;
  minWidthPx?: number;
  maxWidthPx?: number;

  // ✅ Mobile-only overrides
  mobileCellClassName?: string;   // wrapper height/aspect just for mobile
  mobileImgClassName?: string;    // image tweaks just for mobile
};



// BLOCKS 
export type QuoteBlock = {
  type: 'quote';
  quote: string;
};

export type TextTripticBlock = {
  type: 'tripticGallery';
  title?: string;
  subtitle?: string;
  body?: string;
  media: {
    kind: 'video' | 'image';
    aspect: string;
    fit: string;
    src: string;
    alt?: string;
  }[];
};

export type DoubleBlock = {
  type: 'doubleGallery';
  media: {
    kind: 'video' | 'image';
    fit: string;
    src: string;
    alt?: string;
    aspect: string;
  }[];
};

export type VideoBlock = {
  type: 'videoFull';
  caption: string;
  media: { src: string; alt?: string };
};

export type GalleryBlock = {
  type: 'gallery';
  media: { src: string; alt?: string }[];
};

// Media + copy block (for your MediaTextBlock component)
export type MediaTextBlock = {
  type: 'mediaText';
  media: {
    kind: 'video' | 'image';
    src: string; // local "/media/..." or external URL
    alt?: string;
  };
  title: string;
  subtitle: string;
  text: string;
  reverse?: boolean; // if you ever want to flip sides
};

export type ImageStoryBlock = {
  type: 'imageStory';
  leftImage: { src: string; alt?: string };
  title: string;
  subtitle: string;
  body: string;
  rightImage?: { src: string; alt?: string }; // optional small image
};

export type InspirationItem = {
  title: string;
  subtitle?: string;
  body: string;
  media: {
    kind: 'video' | 'image';
    src: string; // "/media/..." or external URL
    alt?: string;
  };
};

export type InspirationBlock = {
  type: 'inspiration';
  heading: string;
  intro: string;
  items: InspirationItem[];
};

export type MagazineBlock = {
  type: 'magazine';
  backgroundSrc: string;
  backgroundType: string;
  backgroundAlt: string;
  text?: string;
  maxHeightClassName?: string; 
  className?: string;
  textClassName?: string;
  imgFit?: string
};

type MediaType = "image" | "video";

export type TimelineItem = {
  id: string;
  type: MediaType;
  src: string;
  alt?: string;
  poster?: string;
  x: number;
  y?: number;
  width: number;
  height: number;
  caption?: string;
};

export type TimelineBlock = {
  type: "timeline";
  title?: string;
  description?: string;
  items: TimelineItem[];
  heightClassName?: string;       
  timelineHeightClassName?: string; 
  className?: string;
  baselineAt?: number;
  startLabel?: string;
  canvasWidthPx?: number;
  sidePaddingPx?: number;
  snap?: boolean;
  edgeFade?: boolean;
  wheelToHorizontal?: boolean;
};

// Union of all supported block types
export type ProjectDetailBlock =
  | QuoteBlock
  | MediaTextBlock
  | TextTripticBlock
  | ImageStoryBlock
  | VideoBlock
  | InspirationBlock
  | DoubleBlock
  | MagazineBlock
  | TimelineBlock
  | GalleryBlock;

// ---------- PROJECT TYPE ----------

export type Project = {
  title: string;
  slug: string;
  thumbnail?: string; // used in ring / grid
  mobileHeroImage?: string;
  year?: string;
  tagline?: string; // short line under title
  description?: string; // right-column intro text
  tags?: string[];
  heroMedia?: string; // optional hero image
  heroVideo?: string; // optional hero video
  videoThumbnail?: string; // video used in ring if you like
  blocks?: ProjectDetailBlock[]; // nested content for detail page
};
