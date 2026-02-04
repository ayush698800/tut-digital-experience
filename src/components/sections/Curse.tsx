"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Curse() {
  const containerRef = useRef(null);
  const [particles, setParticles] = useState<{ id: number; left: string; delay: number; x: number }[]>([]);
  const words = "Death shall come on swift wings to him who disturbs the peace of the King.".split(" ");

  // Generate particles ONLY on the client to prevent Hydration Error
  useEffect(() => {
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      x: Math.random() * 100 - 50
    }));
    setParticles(newParticles);
  }, []);

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

      {/* RAIN: Hieroglyphic "Code" */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none flex justify-around text-2xl text-[#D4AF37] font-serif">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: ["-100%", "100vh"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          >
            𓇳 𓅃 𓋹 𓊝 𓌕 𓎵 𓏏 𓏛 𓏥 𓃠 𓆃
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl w-full relative flex items-center justify-center min-h-[400px]">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: [0, 1, 0.8, 1, 0],
            x: [0, -5, 5, -2, 0],
            scale: [1, 1.1, 1.1, 1.2, 1.3],
            filter: ["blur(10px)", "blur(0px)", "blur(2px)", "blur(0px)", "blur(20px)"]
          }}
          transition={{ duration: 4.5, times: [0, 0.1, 0.15, 0.8, 1], ease: "easeInOut" }}
          className="text-red-700 font-serif absolute uppercase select-none tracking-[0.4em] text-center text-8xl md:text-[12rem] opacity-30 leading-none"
        >
          𓀿 <br/> CURSE
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 relative z-10 max-w-3xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 4 + (i * 0.12), duration: 1, type: "spring", stiffness: 50 }}
              className="text-[#D4AF37] text-4xl md:text-6xl font-serif italic tracking-tighter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              {word}
            </motion.span>
          ))}
        </div>

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
            System Alert: Biological Anomaly Detected
          </p>
        </motion.div>
      </div>

      {/* Floating Dust Particles - Fixed for Build */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -1000],
              opacity: [0, 0.4, 0],
              x: p.x
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: p.delay
            }}
            style={{
              left: p.left,
              bottom: "-5%",
            }}
          />
        ))}
      </div>
    </section>
  );
}