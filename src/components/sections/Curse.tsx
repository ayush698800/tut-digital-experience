"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Curse() {
  const containerRef = useRef(null);
  const words = "Death shall come on swift wings to him who disturbs the peace of the King.".split(" ");

  return (
    <section ref={containerRef} className="h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* BACKGROUND: The "Blood" Pulse */}
      <motion.div 
        animate={{ 
          opacity: [0, 0.15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
        className="absolute inset-0 bg-red-900 pointer-events-none z-0"
      />

      {/* RAIN: Hieroglyphic "Code" falling down */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none flex justify-around text-2xl text-[#D4AF37] font-serif">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: ["-100%", "100vh"] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          >
            𓇳 𓅃 𓋹 𓊝 𓌕 𓎵 𓏏 𓏛 𓏥 𓃠 𓆃
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl w-full relative flex items-center justify-center min-h-[400px]">
        
        {/* STEP 1: The Glitchy Red Title */}
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: [0, 1, 0.8, 1, 0],
            x: [0, -5, 5, -2, 0],
            scale: [1, 1.1, 1.1, 1.2, 1.3],
            filter: ["blur(10px)", "blur(0px)", "blur(2px)", "blur(0px)", "blur(20px)"]
          }}
          transition={{ 
            duration: 4.5, 
            times: [0, 0.1, 0.15, 0.8, 1],
            ease: "easeInOut" 
          }}
          className="text-red-700 font-serif absolute uppercase select-none tracking-[0.4em] text-center text-8xl md:text-[12rem] opacity-30 leading-none"
        >
          𓀿 <br/> CURSE
        </motion.h2>
        
        {/* STEP 2: The Inscription with "Sand Dissolve" Effect */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 relative z-10 max-w-3xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ 
                delay: 4 + (i * 0.12), 
                duration: 1,
                type: "spring",
                stiffness: 50
              }}
              className="text-[#D4AF37] text-4xl md:text-6xl font-serif italic tracking-tighter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* STEP 3: The Danger Warning Terminal */}
        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 6.5, duration: 0.5 }}
          className="absolute bottom-[-120px] flex flex-col items-center gap-3"
        >
          <div className="flex gap-2">
            <div className="h-1 w-8 bg-red-600 animate-pulse" />
            <div className="h-1 w-8 bg-red-600 animate-pulse delay-75" />
            <div className="h-1 w-8 bg-red-600 animate-pulse delay-150" />
          </div>
          <p className="text-red-600 font-mono text-[10px] tracking-[0.3em] uppercase">
            System Alert: Biological Anomaly Detected in Chamber
          </p>
          <p className="text-zinc-600 font-mono text-[8px] uppercase tracking-widest">
            — Found on the door of the treasury —
          </p>
        </motion.div>

        {/* Flash Overlay Effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0.4, 0] }}
          transition={{ delay: 4, duration: 0.3 }}
          className="absolute inset-0 bg-white mix-blend-overlay pointer-events-none z-50"
        />
      </div>

      {/* Floating Dust Particles (Improved) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -1000],
              opacity: [0, 0.4, 0],
              x: Math.random() * 100 - 50
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-5%",
            }}
          />
        ))}
      </div>
    </section>
  );
}