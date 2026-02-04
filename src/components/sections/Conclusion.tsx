"use client";
import { motion } from "framer-motion";

export default function Conclusion() {
  return (
    <section className="min-h-screen bg-[#050505] relative flex flex-col items-center justify-center py-32 px-6 text-center overflow-hidden">
      
      {/* BACKGROUND: Sunset over the Valley of the Kings effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1400] via-black to-black z-0" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/papyros.png')] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-5xl z-10"
      >
        <motion.span 
          initial={{ letterSpacing: "0.2em" }}
          whileInView={{ letterSpacing: "1em" }}
          className="text-[#D4AF37] font-mono text-[10px] uppercase mb-4 block"
        >
          Final Log Entry // Case Closed
        </motion.span>
        
        <h2 className="text-white text-6xl md:text-8xl font-serif mb-12 italic tracking-tighter">
          "The King is at <span className="text-[#D4AF37]">Peace</span>."
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 text-left items-start mt-12">
          <div className="space-y-8">
            <p className="text-zinc-400 leading-relaxed text-xl font-light">
              As the CT scan monitor dimmed in the <span className="text-white underline decoration-[#D4AF37] decoration-2 underline-offset-8">Valley of the Kings</span>, the boy king transitioned from a forensic puzzle back into a human soul. 3,000 years of silence had finally been translated into truth.
            </p>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative p-6 border-l border-zinc-800 bg-zinc-900/20 rounded-r-xl"
            >
              <p className="text-[#D4AF37] italic text-lg font-serif">
                "I didn't sleep a wink the night before... but now I think I will go and sleep." 
              </p>
              <p className="text-zinc-600 font-mono text-[10px] mt-4 uppercase tracking-widest">— Dr. Zahi Hawass, 2005</p>
            </motion.div>
          </div>

          {/* THE "EXAM READY" INTERACTIVE CARD */}
          <motion.div 
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(212,175,55,0.1)" }}
            className="relative p-1 bg-gradient-to-br from-[#D4AF37]/40 via-zinc-800 to-transparent rounded-3xl"
          >
            <div className="p-8 bg-black rounded-[22px] border border-white/5 backdrop-blur-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-pulse" />
                <h3 className="text-white font-mono tracking-widest uppercase text-xs">Knowledge Retrieval Archive</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  { label: "DYNASTY", val: "Amenhotep III (Golden Age) & Akhenaten (The Heretic)" },
                  { label: "DISCOVERY", val: "1922: Howard Carter breaks the seal of KV62" },
                  { label: "FORENSICS", val: "CT scans revealed missing ribs and a fractured leg" },
                  { label: "SIGNIFICANCE", val: "The first ever CT scan of a Pharaoh in history" }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-1 border-b border-zinc-900 pb-4 last:border-0"
                  >
                    <span className="text-[#D4AF37] font-mono text-[8px] uppercase tracking-widest">{item.label}</span>
                    <span className="text-zinc-300 text-xs font-light tracking-wide">{item.val}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* THE FINAL SEAL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="mt-32 flex flex-col items-center"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border border-[#D4AF37]/30 rounded-full flex items-center justify-center relative mb-6"
          >
             <div className="absolute inset-2 border border-[#D4AF37]/10 rounded-full" />
             <span className="text-[#D4AF37] text-4xl select-none">𓋹</span>
          </motion.div>
          <p className="text-zinc-600 uppercase tracking-[0.8em] text-[10px] font-mono">
            Tutankhamun // Forever Immortal
          </p>
        </motion.div>
      </motion.div>
      
      {/* Scroll to bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
}