"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/theme-context";

const easeOutElegant = [0.22, 1, 0.36, 1] as const;

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isLast?: boolean;
}

function AccordionItem({ title, children, isOpen, onToggle, index, isLast }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className={`border-b border-neutral-950 ${isLast ? 'border-b-0' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full pt-6 flex items-center justify-between group cursor-pointer"
        aria-expanded={isOpen}
      >
        <motion.h3 
          className="tracking-widest text-[12px] uppercase text-left"
          animate={{ 
            opacity: isOpen ? 1 : 0.7,
          }}
          transition={{ duration: 0.5, ease: easeOutElegant }}
        >
          {title}
        </motion.h3>
        
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { duration: 0.6, ease: easeOutElegant },
              opacity: { duration: 0.4, ease: "easeInOut" }
            }}
            className="overflow-hidden"
          >
            <motion.div
              ref={contentRef}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.5, ease: easeOutElegant, delay: 0.1 }}
              className="pb-5 pt-2"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ServiceSubItemProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}

function ServiceSubItem({ title, items, isOpen, onToggle }: ServiceSubItemProps) {
  
  return (
    <div className="border-b border-neutral-950 border-opacity-30 w-full md:w-1/2">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between group cursor-pointer"
      >
        <span className="text-sm md:text-base font-medium text-left">
          {title}
        </span>
        
        <motion.svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="opacity-60"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: easeOutElegant }}
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="#666666"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOutElegant }}
            className="overflow-hidden"
          >
            <ul className="pb-4 space-y-2 ">
              {items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: easeOutElegant,
                    delay: idx * 0.05 
                  }}
                  className="text-sm opacity-70 pl-4 border-l border-neutral-950 border-opacity-40"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  aboutContent: string;
  aboutTitle: string;
  readMore: string;
  readLess: string;
  servicesTitle: string;
  services: Array<{ title: string; items: string[] }>;
}

export default function Accordion({
  aboutContent,
  aboutTitle,
  readMore,
  readLess,
  servicesTitle,
  services,
}: AccordionProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [expandedServices, setExpandedServices] = useState<Record<number, boolean>>({});
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleService = (index: number) => {
    setExpandedServices(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Truncate content for preview (first 200 characters)
  const previewLength = 300;
  const shouldTruncate = aboutContent.length > previewLength;
  const previewText = shouldTruncate 
    ? aboutContent.slice(0, previewLength) + "..." 
    : aboutContent;

  return (
    <div className="w-full mx-auto text-neutral-950">
      {/* About Section */}
      <AccordionItem
        title={aboutTitle}
        isOpen
        onToggle={() => toggleSection("about")}
        index={0}
      >
        <div className="space-y-4 flex flex-col items-end">
          <motion.div
            initial={false}
            animate={{ 
              opacity: isAboutExpanded ? 1 : 0.85,
            }}
            className="relative md:w-1/2"
          >
            <p className="text-sm leading-relaxed text-neutral-950 items-end pt-5 md:pt-0 justify-end">
              {isAboutExpanded ? aboutContent : previewText}
            </p>
            
            {!isAboutExpanded && shouldTruncate && (
              <div className="absolute  bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f5f4ed] text-neutral-950 to-transparent pointer-events-none" />
            )}
          </motion.div>
          
          {shouldTruncate && (
            <motion.button
              onClick={() => setIsAboutExpanded(!isAboutExpanded)}
              className="text-[9px] tracking-widest uppercase text-neutral-950 opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 md:w-1/2"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              {isAboutExpanded ? readLess : readMore}
             
            </motion.button>
          )}
        </div>
      </AccordionItem>

      {/* Services Section */}
      <AccordionItem
        title={servicesTitle}
        isOpen
        onToggle={() => toggleSection("services")}
        index={1}
        isLast
      >
        <div className="space-y-0 flex flex-col justify-end relative items-end">
          {services.map((service, idx) => (
            <ServiceSubItem
              key={idx}
              title={service.title}
              items={service.items}
              isOpen={expandedServices[idx] || false}
              onToggle={() => toggleService(idx)}
            />
          ))}
        </div>
      </AccordionItem>
    </div>
  );
}