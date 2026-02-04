"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect: Text moves slower than scroll
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">
      
      {/* BACKGROUND LAYER: Cinematic Mystery */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="w-full h-full"
        >
          {/* Use your tut1.mp4 here as a background loop if it looks atmospheric, 
              otherwise a high-res image of the valley works best */}
          <img 
            src="/footer.jpg" 
            alt="Ancient Egypt" 
            className="w-full h-full object-cover object-center grayscale brightness-[0.3]"
          />
        </motion.div>
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* TEXT LAYER */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-4"
      >
        <motion.span
          initial={{ opacity: 0, tracking: "0.1em" }}
          animate={{ opacity: 1, tracking: "0.5em" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[#D4AF37] font-mono text-xs md:text-sm uppercase mb-4 block"
        >
          Discovering the Boy King
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-serif font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] via-[#f7e49f] to-[#aa8924] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        >
          TUTANKHAMUN
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
          className="h-[1px] w-40 md:w-64 bg-[#D4AF37] mx-auto my-6"
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-zinc-400 text-sm md:text-lg uppercase tracking-[0.3em] font-light"
        >
          A Legacy Carved in <span className="text-[#D4AF37]">Gold</span> & <span className="text-[#D4AF37]">Dust</span>
        </motion.p>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">Enter the Tomb</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </motion.div>

      {/* Ambient Dust Particles (Visual Polish) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>
    </section>
  );
}