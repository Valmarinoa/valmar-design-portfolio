"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getMessages } from "@/data/messages";
import useLocale from "@/lib/use-locale";
import { easeOutElegant, fadeInUp } from "@/anim/animations";

export default function AboutPage() {
  const locale = useLocale();
  const messages = getMessages(locale);

  return (
    <main className="min-h-screen m-auto max-w-6xl w-full px-4 pb-16 pt-28 text-neutral-900">
      {/* Top Section */}
      <div className="mx-auto w-full flex gap-6 h-[50vh]">
        <motion.div 
          className="md:w-1/2 w-1/4 flex text-5xl md:text-6xl overflow-visible"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.2 }}
        >
          <h2 className="leading-10">Valentina Marino</h2>
        </motion.div>
        
        <div className="md:w-1/2 flex-1 flex relative">
          <motion.div 
            className="aspect-square h-[50%] md:h-[60%] absolute bottom-0 left-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: easeOutElegant, delay: 0.4 }}
          >
            <Image
              src="/media/me2.png"
              alt="About the creator"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(min-width: 768px) 100vw, 100vw"
            />
          </motion.div>
        </div>
      </div>

      {/* Divider Line with width animation */}
      <motion.div 
        className="h-[0.5px] w-full bg-neutral-900 my-10 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: easeOutElegant, delay: 0.6 }}
      />

      {/* Bottom Section */}
      <div className="mx-auto w-full flex gap-6 h-fit">
        <motion.div 
          className="md:w-1/2 w-1/4 flex tracking-widest text-[12px]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutElegant, delay: 0.8 }}
        >
          {messages.about.about.toUpperCase()}
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex-1 relative "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeOutElegant, delay: 1 }}
        >
          <p className="text-sm">{messages.about.content}</p>
        </motion.div>
      </div>
    </main>
  );
}