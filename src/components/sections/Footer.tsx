"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Parallax effect: The image moves slightly slower to create depth
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <footer ref={containerRef} className="relative w-full bg-black overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* THE IMAGE CONTAINER WITH PARALLAX GAZE */}
      <div className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <motion.div 
          style={{ y, scale }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="/footer.jpg" 
            alt="Tutankhamun's Eyes" 
            className="w-full h-full object-cover object-center brightness-125 contrast-125 grayscale-[20%]"
          />
          
          {/* Cinematic Overlays: Deep Shadow and Golden Tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black opacity-90" />
          <div className="absolute inset-0 bg-[#1a1400]/40 mix-blend-color" />
          
          {/* Scanning Line overlaying the eyes for a tech-history blend */}
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none"
          />
        </motion.div>

        {/* CLOSING CREDITS OVERLAY */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="z-10"
          >
            {/* The Main Title with "Gold Burn" Glow */}
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] via-[#f7e49f] to-[#aa8924] font-serif text-6xl md:text-9xl tracking-[0.3em] uppercase mb-8 drop-shadow-[0_0_30px_rgba(212,175,55,0.4)] italic">
              Rest in Peace
            </h2>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-[1px] bg-[#D4AF37]/50 mx-auto mb-12" 
            />
            
            {/* Detailed Credits Block */}
            <div className="space-y-6 backdrop-blur-sm bg-black/20 p-8 rounded-full border border-white/5">
              <div className="space-y-1">
                <p className="text-zinc-500 font-mono text-[10px] tracking-[0.5em] uppercase">Archive Title</p>
                <p className="text-white font-serif text-lg md:text-xl tracking-widest uppercase">
                  The Discovery of Tut: <span className="text-[#D4AF37]">A Digital Experience</span>
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div>
                  <p className="text-zinc-500 font-mono text-[8px] tracking-[0.5em] uppercase mb-1">Curation</p>
                  <p className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm">Team AYS</p>
                </div>
                <div>
                  <p className="text-zinc-500 font-mono text-[8px] tracking-[0.5em] uppercase mb-1">Source Material</p>
                  <p className="text-zinc-300 font-serif italic text-sm tracking-wide">NCERT Hornbill - Chapter 3</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Interactive Icon */}
        <motion.div 
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
            <div className="text-[#D4AF37] text-4xl cursor-pointer hover:scale-125 transition-transform duration-500">𓋹</div>
        </motion.div>
      </div>

      {/* FOOTER BAR: THE BLACK VOID */}
      <div className="relative z-10 py-12 bg-black text-center border-t border-white/5">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4 mb-4">
             <div className="h-[1px] w-8 bg-zinc-800 self-center" />
             <span className="text-zinc-700 font-mono text-[9px] uppercase tracking-[0.8em]">End of Transmission</span>
             <div className="h-[1px] w-8 bg-zinc-800 self-center" />
          </div>
          <p className="text-zinc-600 text-[10px] font-mono tracking-widest uppercase opacity-50">
            &copy; 2026 VALLEY OF THE KINGS DIGITAL RECONSTRUCTION // ALL SECRETS REVEALED
          </p>
        </div>
      </div>
    </footer>
  );
}