// app/case-studies/value-tuning/page.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote, EyeOff } from "lucide-react";

const easeOutElegant = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: easeOutElegant }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: { duration: 1.2, ease: easeOutElegant }
  }
};

export default function ValueTuningCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main ref={containerRef} className="min-h-screen text-neutral-900">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-[2px] bg-neutral-900 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-7xl mx-auto w-full"
        >
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-8 mb-12 text-[9px] tracking-widest uppercase opacity-60"
          >
            <motion.span variants={fadeInUp} className="border border-0.5 border-neutral-700 py-1 px-2 rounded-full">Value Tuning</motion.span>
            <motion.span variants={fadeInUp} className="border border-0.5 border-neutral-700 py-1 px-2 rounded-full">Sensory Audit</motion.span>
            <motion.span variants={fadeInUp} className="border border-0.5 border-neutral-700 py-1 px-2 rounded-full">Brand Strategy</motion.span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: easeOutElegant, delay: 0.3 }}
            className="text-5xl md:text-[5.2rem] leading-[0.9] mb-8"
          >
            Beyond the Visual:
            <br />
            <span className="italic">The Hidden Language</span>
            <br />
            of Product Perception
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg max-w-xl leading-relaxed opacity-80"
          >
            A methodological approach I designed to decode how physical products communicate 
            value through sensory experience—transcending visual identity to reveal 
            the tactile, auditory, and olfactory signatures of luxury brands.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-12 bg-neutral-900"
          />
        </motion.div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="lg:col-span-4"
            >
              <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
                The Brief
              </span>
              <h2 className="text-3xl md:text-4xl">
                The Paradox of Inherited Trust
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-8 space-y-6 text-base leading-relaxed opacity-80"
            >
              <p>
                Signify (formerly Philips Lighting) occupied a peculiar position. 
                As a 130-year-old Dutch company, they enjoyed something most brands 
                spend millions trying to build: inherited trust. Consumers assumed 
                quality without questioning. But in the Smart Home era, this assumption 
                became a liability.
              </p>
              <p>
                The design team suspected that cost-cutting decisions in packaging and 
                materials were eroding brand perception, yet they lacked evidence to 
                advocate for change. Their concerns were dismissed as "subjective" or 
                "expensive taste." They needed proof that the <em>felt experience</em> of 
                their products matched—or failed to match—their brand promise.
              </p>
              <p>
                I was brought in to design a methodology that could capture this gap. 
                The challenge: how do you measure the invisible? How do you isolate 
                sensory perception from the noise of brand recognition?
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 text-center"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              The Hypothesis
            </span>
            <h2 className="text-3xl md:text-4xl mb-8">
              The Value Spectrum
            </h2>
            <p className="text-base opacity-80 max-w-2xl mx-auto leading-relaxed">
              I proposed that there is a measurable distance between what people 
              <em> expect </em> from a brand and what they actually <em> feel </em> when 
              touching its products. This distance determines loyalty, disappointment, 
              or indifference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-8 md:p-12 border border-neutral-300 bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg mb-4">When Expectation Exceeds Reality</h4>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  A user associates "premium" and "innovative" with a brand, but 
                  blind evaluation reveals "flimsy" materials and "entangled" packaging. 
                  The brand promise is broken before the product is even seen.
                </p>
                <p className="text-xs italic opacity-50">
                  Result: Cognitive dissonance. Trust erosion. Return risk.
                </p>
              </div>
              <div>
                <h4 className="text-lg mb-4">When Reality Exceeds Expectation</h4>
                <p className="text-sm opacity-70 leading-relaxed mb-4">
                  A user expects "practical" and "functional," but blind evaluation 
                  reveals "substantial" weight and "satisfying" acoustic closure. 
                  The product over-delivers on its promise.
                </p>
                <p className="text-xs italic opacity-50">
                  Result: Delight. Viral sharing. Brand loyalty.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    {/* The Value Spectrum Method - NEW SECTION */}     
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              The Methodology
            </span>
            <h2 className="text-3xl md:text-4xl mb-6">
              The Value Spectrum
            </h2>
            <p className="text-base opacity-80 max-w-2xl leading-relaxed">
              I designed a protocol that moves participants from conscious association 
              to unconscious perception, then to reflection. The blindfold isn't a 
              gimmick—it's a tool to isolate what David Howes calls the "sensory order," 
              the hierarchy of perception that operates beneath brand recognition.
            </p>
          </motion.div>

          {/* The Three Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                step: "01",
                title: "The Expectations",
                desc: "Before touching any product, users associate emotional words with each brand. 'Authentic,' 'warm,' 'youthful'—these form the baseline of what the brand promises.",
                insight: "WordCloud mapping reveals the halo effect: brand narrative shapes anticipated experience."
              },
              {
                step: "02",
                title: "The Blind Test",
                desc: "Blindfolded, users evaluate the same products through touch, sound, and scent alone. No logos. No color. Just the raw sensory encounter. Every gesture recorded.",
                insight: "Stripping away visual identity exposes the gap between narrative and material reality."
              },
              {
                step: "03",
                title: "The Reveal",
                desc: "Finally, users see the product. The reveal tests whether visual branding confirms or contradicts their blind sensory assessment. The distance becomes visible.",
                insight: "Cognitive dissonance occurs when premium branding meets poor sensory execution."
              }
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative"
              >
                <span className="text-xs tracking-widest opacity-40 mb-4 block">{item.step}</span>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed mb-6">{item.desc}</p>
                <div className="pt-4 border-t border-neutral-300">
                  <p className="text-xs italic opacity-60">{item.insight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      

      {/* The Blindfold Protocol */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-4"
            >
              <div className="flex items-center gap-4 mb-6">
                <EyeOff className="w-8 h-8 opacity-40" strokeWidth={1.5} />
                <span className="text-xs tracking-widest uppercase opacity-50">The Method</span>
              </div>
              <h2 className="text-3xl md:text-4xl mb-6">
                The Blindfold Protocol
              </h2>
              <p className="text-xs opacity-60 italic leading-relaxed">
                "The senses are not merely passive receptors of information but active 
                participants in the construction of reality."
              </p>
              <p className="text-xs opacity-40 mt-2">— David Howes, The Empire of the Senses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-8 space-y-8"
            >
              <div className="space-y-6 text-base leading-relaxed opacity-80">
                <p>
                  Visual branding wields immense power. A logo, a color palette, a carefully 
                  staged photograph—these elements prime our expectations before we ever touch 
                  a product. But this priming is also a distortion. When we see a luxury brand's 
                  packaging, we are not experiencing the object; we are experiencing the 
                  <em> narrative</em> we have been conditioned to associate with it.
                </p>
                <p>
                  The blindfold protocol removes this variable. By excluding sight, we access 
                  what David Howes calls the "sensory order"—the hierarchy of perception that 
                  operates beneath conscious brand recognition. Touch becomes primary. Sound 
                  becomes information. Temperature, weight, and texture speak without the 
                  interference of visual bias.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-300">
                <div>
                  <h4 className="text-xs tracking-widest uppercase mb-3 opacity-60">Visual Bias</h4>
                  <p className="text-sm leading-relaxed opacity-70">
                    Logo recognition triggers pre-conditioned quality associations. 
                    We judge what we expect, not what we feel.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs tracking-widest uppercase mb-3 opacity-60">Narrative Conditioning</h4>
                  <p className="text-sm leading-relaxed opacity-70">
                    Brand storytelling creates a "halo effect" that masks sensory 
                    inconsistencies. The eye forgives what the hand cannot.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs tracking-widest uppercase mb-3 opacity-60">Proximal Truth</h4>
                  <p className="text-sm leading-relaxed opacity-70">
                    Objects close to the body—held, touched, manipulated—are judged 
                    by different criteria than objects viewed from distance.
                  </p>
                </div>
              </div>

              <div className="p-8 border border-neutral-300 bg-white mt-8">
                <p className="text-lg leading-relaxed italic opacity-90 text-center">
                  "What feels like home? What invites the hand to linger? These questions 
                  cannot be answered through visual analysis alone. The blindfold reveals 
                  the gap between what a brand promises and what a product actually 
                  delivers to the senses."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <motion.div 
        variants={lineReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-[1px] bg-neutral-300 mx-6 md:mx-12 lg:mx-24 origin-left"
      />

      {/* Research Insights */}
        {/* 5. THE INSIGHTS (Quotes from Users) */}
        <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              Research Findings
            </span>
            <h2 className="text-3xl md:text-4xl mb-6">
              What Users Actually Feel
            </h2>
            <p className="text-base opacity-80 max-w-2xl">
              Blind sensory evaluation revealed the unspoken vocabulary of quality. 
              Users immediately sense when design intention aligns with execution—and when it doesn't.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "If they do it like this [ripping gesture], you want people to know that it's been opened or not... I will know I am the first one to open the box.",
                theme: "The Virginity Seal",
                insight: "Tamper-evident packaging creates emotional security and perceived newness. Users read packaging mechanics as brand integrity.",
                brand: "Google Home"
              },
              {
                quote: "It's actually kind of entangled. I cannot get it out, so I have to do more... I want to get the product first, that's the most important.",
                theme: "The Entanglement Problem",
                insight: "Cable management and internal packaging structure directly impact first impression. Complexity signals disrespect for user time.",
                brand: "Philips HUE"
              },
              {
                quote: "This would be Volkswagen... there's Audi, which has everything a little bit better. But there's nothing wrong with Volkswagen.",
                theme: "The Quality Hierarchy",
                insight: "Users intuitively categorize products into tiers. Consistency matters more than absolute quality—mismatched materials create cognitive dissonance.",
                brand: "Philips HUE"
              },
              {
                quote: "It reminds me of an office, so I don't necessarily feel like... the tactility of it makes me think it's a practical object and not necessarily a home object.",
                theme: "Contextual Mismatch",
                insight: "Material choices determine spatial belonging. Hard plastic reads 'industrial'; soft-touch reads 'domestic'. Context determines appropriateness.",
                brand: "Philips Sensor vs Google Home"
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-white p-8 border border-neutral-200"
              >
                <Quote className="w-6 h-6 opacity-20 mb-4" />
                <blockquote className="text-lg leading-relaxed mb-6 italic">
                  "{card.quote}"
                </blockquote>
                <div className="border-t border-neutral-200 pt-4">
                  <span className="text-xs tracking-widest uppercase opacity-50 block mb-2">
                    {card.theme}
                  </span>
                  <p className="text-sm opacity-70 leading-relaxed mb-4">
                    {card.insight}
                  </p>
                  <span className="text-xs opacity-40">— {card.brand}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* 6. THE FRAMEWORK (6 Parameters) */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-900 text-[#f5f4ed]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 text-center"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              The Framework
            </span>
            <h2 className="text-3xl md:text-4xl mb-6">
              Six Parameters of Perceived Value
            </h2>
            <p className="text-base opacity-80 max-w-2xl mx-auto">
              From the research, I distilled six measurable attributes that determine 
              whether a product feels "premium" or "cheap," regardless of its actual price.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                param: "Physicality",
                insight: "Every choice and tolerance of materials is expected to serve a purpose. Users sense when design is rushed or corners are cut."
              },
              {
                param: "Transparency",
                insight: "People value real access to content. Windows, viewing holes, immediate product visibility build trust and reduce anxiety."
              },
              {
                param: "Order",
                insight: "The sequence of opening must be coherent. This order is echo of its content—chaos signals disrespect, clarity signals care."
              },
              {
                param: "Stratification",
                insight: "Layering the opening journey determines first impressions. Each step should reveal, not obscure. Documentation belongs underneath."
              },
              {
                param: "Alignment",
                insight: "Service must align with emotions, states of mind. The product should meet the user in their everyday life, not in a manual."
              },
              {
                param: "Context",
                insight: "Material choices determine distance between object and user. Fabric reads 'home'; plastic reads 'office'. Context determines fit."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border border-neutral-700"
              >
                <h3 className="text-lg mb-3 text-[#f5f4ed]">{item.param}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.insight}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-lg italic opacity-80 max-w-3xl mx-auto">
              "Perceived quality is not the sum of individual sensory inputs, but their 
              coherence. A product that sounds premium but feels cheap creates cognitive 
              dissonance. The goal is alignment across all six parameters."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Material Context */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Material as Message
            </h2>
            <p className="text-base opacity-80 max-w-2xl mx-auto">
              Users categorize products instinctively based on tactile associations. 
              The same plastic can read "office" or "home" depending on surface treatment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div className="relative aspect-4/3 bg-neutral-100 overflow-hidden rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm tracking-widest uppercase">
                  [Insert: Soft-Touch Integration]
                </div>
              </div>
              <div>
                <span className="text-xs tracking-widest uppercase text-green-700 block mb-2">
                  Domestic Context
                </span>
                <h3 className="text-2xl mb-3">"Something I Can Hold"</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  Seamless transitions between soft-touch fabric and hardware create 
                  objects that invite touch. Users describe these as "something I can 
                  grab and play with"—domestic, personal, home-worthy.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative aspect-4/3 bg-neutral-100 overflow-hidden rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm tracking-widest uppercase">
                  [Insert: Hard Plastic Junction]
                </div>
              </div>
              <div>
                <span className="text-xs tracking-widest uppercase text-red-700 block mb-2">
                  Industrial Context
                </span>
                <h3 className="text-2xl mb-3">"Reminds Me of an Office"</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  Abrupt material transitions and hard plastic surfaces signal 
                  "practical, not domestic." Users instinctively place these products 
                  aside rather than integrating them into their living spaces.
                </p>
              </div>
            </motion.div>
          </div>

          {/* The Audi vs Volkswagen Insight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="p-8 md:p-12 border border-neutral-300 bg-white text-center"
          >
            <Quote className="w-8 h-8 opacity-20 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl leading-relaxed mb-6 italic max-w-3xl mx-auto">
              "This would be Volkswagen. There's Audi, which has everything a little 
              bit better... but there's nothing wrong with Volkswagen."
            </blockquote>
            <p className="text-sm opacity-70 max-w-xl mx-auto leading-relaxed">
              Users intuitively categorize products into quality tiers. The key is 
              consistency: Volkswagen feels "okay" because every touchpoint reinforces 
              the same message. Inconsistency—premium sound but cheap feel—creates 
              cognitive dissonance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <motion.div 
        variants={lineReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-[1px] bg-neutral-300 mx-6 md:mx-12 lg:mx-24 origin-left"
      />

      {/* Methodology Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              The Methodology
            </h2>
            <p className="text-base opacity-80 max-w-1/2">
              Value Tuning operates through five sensory audits, each designed to 
              isolate and optimize specific perceptual channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {[
              {
                num: "01",
                title: "Tactile Audit",
                desc: "Surface texture analysis, temperature conductivity, and pressure distribution mapping to optimize the 'first touch' moment.",
                placeholder: "[Texture Analysis Image]"
              },
              {
                num: "02",
                title: "Acoustic Profiling",
                desc: "Decibel measurement of opening mechanisms, closure satisfaction, and material resonance to engineer the 'sound of quality'.",
                placeholder: "[Acoustic Visualization]"
              },
              {
                num: "03",
                title: "Olfactory Branding",
                desc: "Identification of material off-gassing and intentional scent integration to create subconscious brand associations.",
                placeholder: "[Scent Mapping]"
              },
              {
                num: "04",
                title: "Visual Hierarchy",
                desc: "Beyond logo placement—analyzing reflectivity, shadow behavior, and color shift under varying light conditions.",
                placeholder: "[Light Study]"
              },
              {
                num: "05",
                title: "Proprioceptive Balance",
                desc: "Weight distribution, center of gravity, and ergonomic satisfaction in hand—crucial for perceived value.",
                placeholder: "[Weight Distribution]"
              },
              {
                num: "06",
                title: "Synthesis & Tuning",
                desc: "Cross-modal integration to ensure sensory coherence—where the whole becomes greater than the sum of parts.",
                placeholder: "[Final Product]"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/2] bg-neutral-200 mb-6 overflow-hidden rounded-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-xs tracking-widest uppercase">
                    {item.placeholder}
                  </div>
                </div>
                <span className="text-xs tracking-widest opacity-40 mb-2 block">
                  {item.num}
                </span>
                <h3 className="text-2xl mb-3 group-hover:italic transition-all duration-500">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Parameters Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              The Framework
            </span>
            <h2 className="text-3xl md:text-4xl mb-6">
              From Insight to Design Criteria
            </h2>
            <p className="text-base opacity-80 max-w-2xl leading-relaxed">
              Each sensory audit evaluates specific, measurable attributes derived 
              from user research. These parameters serve as both diagnostic tools 
              and design targets.
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                category: "Packaging Hierarchy",
                criteria: [
                  { label: "Product Visibility", desc: "User should see product within 3 seconds of opening. Viewing holes or transparent layers preferred." },
                  { label: "Documentation Layering", desc: "Manuals and warranties underneath product, not on top. Loose paper creates 'messy' perception." },
                  { label: "Single-Motion Access", desc: "Opening → Product removal should require ≤2 distinct actions. More steps = frustration." },
                  { label: "Cable Management", desc: "Cables must not be trapped in box folds. Entanglement signals poor planning." }
                ]
              },
              {
                category: "Material Confidence",
                criteria: [
                  { label: "Temperature Neutrality", desc: "Materials should feel neutral-to-warm (18-22°C) within 3 seconds. Cold plastic = 'cheap'." },
                  { label: "Surface Continuity", desc: "Transitions between materials should be seamless or intentionally layered, not abrupt." },
                  { label: "Weight Substance", desc: "Actual weight should exceed visual expectation by 15-20%. Lightness = 'flimsy'." },
                  { label: "Texture Intention", desc: "Micro-texture should signal purpose: grip zones vs. display surfaces." }
                ]
              },
              {
                category: "Contextual Fit",
                criteria: [
                  { label: "Domestic vs. Industrial", desc: "Soft-touch materials read 'home'; hard plastic reads 'office.' Context determines appropriateness." },
                  { label: "Blending vs. Standing Out", desc: "Product should be sleek enough to disappear, distinctive enough to invite touch." },
                  { label: "Orientation Clarity", desc: "Form should indicate usage: flat base, curved front, hard edges where wall meets." }
                ]
              }
            ].map((section, idx) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="border-t border-neutral-300 pt-8"
              >
                <h3 className="text-2xl md:text-3xl mb-8">
                  {section.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {section.criteria.map((criterion, cidx) => (
                    <motion.div
                      key={criterion.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cidx * 0.1 + 0.2 }}
                      className="group"
                    >
                      <h4 className="text-xs font-medium tracking-widest uppercase mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        {criterion.label}
                      </h4>
                      <p className="text-sm leading-relaxed opacity-80">
                        {criterion.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Insight Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-20 p-8 md:p-12 border border-neutral-300 bg-white"
          >
            <span className="text-xs tracking-widest uppercase opacity-60 block mb-4">
              Key Insight
            </span>
            <p className="text-xl md:text-2xl leading-relaxed italic">
              "Perceived quality is not the sum of individual sensory inputs, but their 
              coherence. A product that sounds premium but feels cheap creates cognitive 
              dissonance. The goal is alignment across all five parameters."
            </p>
          </motion.div>
        </div>
      </section>

 {/* 7. THE IMPACT */}
 <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              The Impact
            </span>
            <h2 className="text-3xl md:text-4xl mb-6">
              Beyond the Report
            </h2>
            <p className="text-base opacity-80 max-w-2xl">
              Research only matters if it changes decisions. Value Tuning was designed 
              to give designers leverage in budget conversations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Strategic",
                desc: "Demonstrated that sensorial investment in packaging directly affected brand positioning against Apple and Google. The 'Volkswagen vs Audi' metaphor became internal shorthand."
              },
              {
                title: "Tactical", 
                desc: "Identified specific friction points—cable entanglement, documentation layering, material transitions—for immediate redesign in the HUE line."
              },
              {
                title: "Political",
                desc: "Gave designers user-generated evidence to advocate for quality budgets, shifting the conversation from 'what can we save?' to 'what must we value?'"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border border-neutral-200 bg-white"
              >
                <h3 className="text-lg mb-3">{item.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Insight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="p-8 md:p-12 border border-neutral-300 bg-white text-center"
          >
            <Quote className="w-8 h-8 opacity-20 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl leading-relaxed mb-6 italic max-w-3xl mx-auto">
              "The blindfold became a metaphor for my practice: removing the obvious 
              to reveal the essential. Whether designing a lamp that breathes or 
              researching how packaging shapes desire, I'm drawn to moments where 
              the invisible becomes tangible."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* 8. REFLECTION */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
                Reflection
              </span>
              <h2 className="text-3xl md:text-4xl mb-8">
                In an Increasingly Digital World
              </h2>
              <div className="space-y-6 text-base leading-relaxed opacity-80">
                <p>
                  We touch screens but not objects. We swipe through images but rarely 
                  handle materials. The blindfold protocol recovers what we've forgotten: 
                  that the body knows things the eye has been trained to overlook.
                </p>
                <p>
                  Working with Signify, I learned that the most sophisticated technology 
                  means little if the body rejects it at first touch. The weight of a 
                  closing lid, the temperature of ceramic, the precise resistance of a 
                  hinge—these are the unspoken vocabulary of luxury.
                </p>
                <p>
                  Value Tuning was designed for a lighting company, but its application 
                  extends to any brand that asks: How do we want to be remembered? Not 
                  through what people see, but through what they feel.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] bg-neutral-200 overflow-hidden rounded-sm"
            >
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm tracking-widest uppercase">
                [Insert: Process Photo / Testing Setup]
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. NEXT / RELATED PROJECTS */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <span className="text-xs tracking-widest uppercase opacity-50 block mb-4">
              Related Work
            </span>
            <h2 className="text-3xl md:text-4xl">
              From Research to Creation
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/projects/silence-of-blue" className="group block">
                <div className="relative aspect-4/3 bg-neutral-200 mb-6 overflow-hidden rounded-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm tracking-widest uppercase">
                    [Silence of Blue]
                  </div>
                </div>
                <h3 className="text-2xl mb-2 group-hover:italic transition-all duration-500">Silence of Blue</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  Interpreting silence through light and rotation. A low-tech mechanism 
                  that captures moments of quiet and translates them into expanding blue light.
                </p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/work/pace-of-water" className="group block">
                <div className="relative aspect-4/3 bg-neutral-200 mb-6 overflow-hidden rounded-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm tracking-widest uppercase">
                    [Pace of Water]
                  </div>
                </div>
                <h3 className="text-2xl mb-2 group-hover:italic transition-all duration-500">Pace of Water</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  Materializing breath through glass and light. Tiles that respond to 
                  respiration, creating the sensation of generating ocean waves through breathing.
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-2xl mb-2">Value Tuning</h3>
            <p className="text-sm opacity-60">A methodology by Valentina Marino</p>
          </div>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm tracking-widest uppercase hover:opacity-60 transition-opacity"
          >
            Back to Index
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
   

    </main>
  );
}