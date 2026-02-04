"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const events = [
  { 
    year: "1332 BC", 
    title: "Ascension of the Living Image", 
    desc: "Tutankhaten takes the throne. Amidst religious ruins, he restores Amun to glory, beginning a nine-year reign that would end in a mystery buried for millennia.",
    coord: "LAT 25.7402° N" 
  },
  { 
    year: "1922 AD", 
    title: "The Curse of the Seal", 
    desc: "Howard Carter breaks the silence of KV62. 'Can you see anything?' he was asked. 'Yes,' he replied. 'Wonderful things.' A timeline frozen in gold is reopened.",
    coord: "KV62.VOK" 
  },
  { 
    year: "1968 AD", 
    title: "The Missing Ribs", 
    desc: "An anatomy professor performs a forbidden scan. Beneath the ritual resin, a shocking truth: the King's breastbone and front ribs are gone. The first crack in the myth.",
    coord: "XRAY.RAD.01" 
  },
  { 
    year: "2005 AD", 
    title: "Digital Resurrection", 
    desc: "A portable Siemens CT scanner creates 1,700 digital images. Head to toe, the King is rebuilt in 0.62mm slices. The ghost finally gets a face.",
    coord: "CT.SCAN.808" 
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-40 bg-[#050505] text-white relative">
      {/* Background Ambience: Ghostly Year Numbers */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none font-serif italic text-9xl">
        <div className="absolute top-[10%] -left-10">1332BC</div>
        <div className="absolute top-[40%] -right-10">1922AD</div>
        <div className="absolute top-[70%] -left-10 text-[#D4AF37]">2005AD</div>
      </div>

      <div className="max-w-5xl mx-auto relative px-6">
        
        {/* THE GOLDEN SCEPTER (Timeline Line) */}
        <div className="absolute left-1/2 top-0 w-[2px] bg-zinc-900 h-full -translate-x-1/2 z-0" />
        <motion.div 
          style={{ scaleY, opacity }}
          className="absolute left-1/2 top-0 w-[4px] bg-gradient-to-b from-[#D4AF37] via-[#f7e49f] to-[#aa8924] origin-top h-full -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(212,175,55,0.5)]"
        />

        {events.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
            className={`mb-48 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            {/* Empty space for the alternating layout */}
            <div className="hidden md:block w-5/12" />

            {/* THE ANKH CIRCLE */}
            <div className="z-30 relative">
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                className="h-14 w-14 rounded-full bg-black border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] backdrop-blur-md"
              >
                <span className="text-[#D4AF37] text-xs font-serif font-bold tracking-tighter">𓋹</span>
              </motion.div>
              {/* Pulsing Aura */}
              <div className="absolute inset-0 h-14 w-14 rounded-full bg-[#D4AF37]/20 animate-ping -z-10" />
            </div>

            {/* CONTENT CARD */}
            <div className="w-full md:w-5/12 group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37]/50 to-transparent rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative p-8 bg-[#0a0a0a] border border-zinc-800 rounded-lg group-hover:border-[#D4AF37]/50 transition-all duration-500">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-[#D4AF37] text-3xl font-serif font-bold italic">{event.year}</h2>
                  <span className="text-[9px] font-mono text-zinc-600 tracking-widest">{event.coord}</span>
                </div>

                <h3 className="text-white text-xl font-serif tracking-wide mb-3 group-hover:text-[#D4AF37] transition-colors">{event.title}</h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {event.desc}
                </p>

                {/* Decorative Bottom Bar */}
                <div className="mt-6 flex gap-1">
                  <div className="h-[2px] w-8 bg-[#D4AF37]" />
                  <div className="h-[2px] w-2 bg-zinc-800" />
                  <div className="h-[2px] w-2 bg-zinc-800" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}