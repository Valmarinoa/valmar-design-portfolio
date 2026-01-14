import { cubicBezier, delay, motion, AnimatePresence, type Variants, } from "framer-motion";
   

export const easeInOutExpo: [number, number, number, number] = [0.87, 0, 0.13, 1];
const backdropDuration = 0.85;
const imageDuration = 0.5;
const imageEnterDelay = 0.45;
const imageDelay = 0.45; 
const buttonDelay = 0.25;

export const tagsContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 1.8
        },
    },
};

export const tagItem = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        delay: 0.8,
        transition: {
          
            duration: .6,
            ease: cubicBezier(0.83, 0, 0.17, 1),

        },
    },
};

export const svgVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.18,
            },
        },
};

export const pathVariants = {
        hidden: { pathLength: 0 },
        show: {
            pathLength: 1,
            transition: {
                duration: 1.2,
                ease: easeInOutExpo,
            },
        },
};





export const backdropVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: backdropDuration, ease: easeInOutExpo },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: imageDuration, // wait for image fade-out
        duration: backdropDuration,
        ease: easeInOutExpo,
      },
    },
  };
  
  export const imageVariants: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: imageEnterDelay,
        duration: imageDuration,
        ease: easeInOutExpo,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: { duration: imageDuration, ease: easeInOutExpo },
    },
  };

export const buttonVariants: Variants = {
  initial: { opacity: 0, y: -6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: buttonDelay, duration: 0.35, ease: easeInOutExpo },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.35, ease: easeInOutExpo },
  },
};
