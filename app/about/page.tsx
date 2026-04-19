"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getMessages } from "@/data/messages";
import useLocale from "@/lib/use-locale";
import { easeOutElegant, fadeInUp } from "@/anim/animations";
import Accordion from "@/components/Accordion";

export default function AboutPage() {
  const locale = useLocale();
  const messages = getMessages(locale);

  return (
    <main className="min-h-screen m-auto max-w-6xl w-full px-4 pb-16 pt-28 text-neutral-900">
      {/* Top Section */}
      <div className="mx-auto w-full flex  h-[50vh]">
        <motion.div 
          className="md:w-1/2 w-1/4 flex flex-col gap-2 md:text-6xl overflow-visible relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.2 }}
        >
          <h2 className="leading-10 text-4xl mb-2 md:mb-0 whitespace-nowrap ">Valentina Marino</h2>
          <h4 className="hidden md:inline-block text-base opacity-80 md:text-lg whitespace-nowrap leading-6">Product & Experience Designer and Developer</h4>
          <h4 className="md:hidden inline-block text-lg opacity-80 md:text-lg whitespace-nowrap md:whitespace-normal leading-6 font-light">Product & Experience <br/>Designer and Developer</h4>
          <div className="text-lg whitespace-nowrap gap-2 md:absolute relative bottom-0 flex flex-col">
            <a className="underline">Email</a>
            <a className="underline" href="https://www.linkedin.com/in/valentina-marino-arboleda">LinkedIn</a>
            <a className="underline" href="https://www.instagram.com/valmarino.a/">Instagram</a>
            <a className="underline" href="https://github.com/Valmarinoa">GitHub</a>
            <a className="underline" href="https://souncloud/marianrosas">SoundCloud</a>


            </div>
          
        </motion.div>

        <div className="md:w-1/2 flex-1 flex relative">
          <motion.div 
            className="aspect-square h-[50%] md:h-[60%] absolute bottom-0 left-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: easeOutElegant, delay: 0.4 }}
          >
            <Image
              src="/media/yo.png"
              alt="About the creator"
              fill
              className="object-cover rounded-md"
              loading="lazy"
              sizes="(min-width: 768px) 100vw, 100vw"
            />
          </motion.div>
        </div>
      </div>

   

<motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeOutElegant, delay: 0.6 }}
    
        >
        <Accordion
          aboutTitle={messages.about.about}
          aboutContent={messages.about.content}
          profileTitle={messages.profile.title}
          readMore={messages.about.readMore}
          readLess={messages.about.readLess}
          servicesTitle={messages.services.title}
          services={messages.services.items}
          />
      </motion.div>


   
    </main>
  );
}