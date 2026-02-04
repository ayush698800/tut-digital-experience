"use client";
import { motion } from "framer-motion";

const scanData = [
  { 
    point: "CRANIAL STRUCTURE", 
    detail: "CT reveals a greyish head; neck vertebrae appear with startling clarity, as if in an anatomy textbook.",
    tag: "SCAN_HEAD_01"
  },
  { 
    point: "THORACIC VOID", 
    detail: "The 1968 mystery confirmed: beneath the hardened resin, the breastbone and front ribs are entirely absent.",
    tag: "SCAN_CHEST_02"
  },
  { 
    point: "SKELETAL PRECISION", 
    detail: "0.62mm digital slices used to recreate the skull in 3D. Every bone fragment accounted for in high-resolution.",
    tag: "SCAN_SKULL_03"
  }
];

export default function Scanner() {
  return (
    <section className="min-h-screen bg-[#020202] flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden">
      
      {/* BACKGROUND: Matrix-style Grid & Pulse */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a12_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a12_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 via-transparent to-transparent opacity-50" />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="z-10 text-center mb-24"
      >
        <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block animate-pulse">
          Establishing Satellite Link // 25.7402° N
        </span>
        <h2 className="text-white text-5xl md:text-7xl font-serif mb-4 tracking-tighter">
          Forensic <span className="text-[#D4AF37]">Autopsy</span>
        </h2>
        <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest italic border-y border-zinc-800 py-2 inline-block">
          Siemens Multidetector CT-System // Phase II Complete
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-3 gap-12 items-center">
        
        {/* LEFT DATA COLUMN */}
        <div className="space-y-16 order-2 md:order-1">
          {scanData.slice(0, 2).map((item, i) => (
            <motion.div 
              key={i}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-6"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-transparent" />
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600 font-mono text-[8px]">{item.tag}</span>
                <div className="h-[1px] w-4 bg-blue-900" />
              </div>
              <h4 className="text-white font-serif text-2xl mb-2 group-hover:text-blue-400 transition-colors">
                {item.point}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* CENTER: THE HOLOGRAPHIC MUMMY */}
        <div className="relative group order-1 md:order-2">
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full animate-pulse" />
          
          <div className="relative h-[500px] w-72 mx-auto bg-[#080808] rounded-[100px] border-x border-blue-500/20 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(30,58,138,0.2)]">
            
            {/* Animated Scanning Beam */}
            <motion.div 
              animate={{ top: ["5%", "90%", "5%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent z-20"
            >
              <div className="w-full h-[2px] bg-blue-400 shadow-[0_0_20px_#3b82f6]" />
            </motion.div>

            {/* The Mummy Silhouette */}
            <div className="relative text-[#D4AF37] opacity-30 text-9xl font-serif select-none">
              𓀾
              {/* Internal Organ Glows */}
              <motion.div 
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500 blur-xl rounded-full"
              />
            </div>

            {/* Depth Data Overlay */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="text-blue-500 font-mono text-[8px] animate-pulse">0.62mm SLICES</span>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 h-3 bg-blue-900 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT DATA COLUMN */}
        <div className="space-y-16 order-3">
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="relative pr-6 text-right"
          >
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-transparent" />
            <div className="flex items-center justify-end gap-2 mb-2">
              <div className="h-[1px] w-4 bg-blue-900" />
              <span className="text-blue-600 font-mono text-[8px]">{scanData[2].tag}</span>
            </div>
            <h4 className="text-white font-serif text-2xl mb-2">{scanData[2].point}</h4>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">{scanData[2].detail}</p>
          </motion.div>
          
          {/* System Terminal Box */}
          <div className="p-6 bg-[#080808] border border-blue-500/30 rounded-lg backdrop-blur-md">
            <div className="flex gap-1.5 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            </div>
            <p className="text-[9px] font-mono text-blue-400 leading-tight">
              &gt; CT_SYSTEM_ACTIVE<br/>
              &gt; ANALYZING 1700 DIGITAL X-RAYS<br/>
              &gt; RESOLUTION_SET: 0.62mm<br/>
              &gt; DETECTING CRANIAL ANOMALIES...<br/>
              &gt; _
            </p>
          </div>
        </div>

      </div>
      
    </section>
  );
}