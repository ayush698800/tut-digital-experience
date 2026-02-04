"use client";
import { motion } from "framer-motion";

const videoSections = [
  {
    id: "hook",
    name: "Tutankhamun",
    title: "The Hook",
    script: "I was a king before I was a man. I ruled… but I never lived long enough to understand power.",
    accent: "Ancient / Ethereal",
    color: "border-[#D4AF37]"
  },
  {
    id: "suffering",
    name: "Tutankhamun",
    title: "The Suffering",
    script: "My body was weak. My bones broke easily. Even walking… was pain.",
    accent: "Fragile / Vulnerable",
    color: "border-red-900/50"
  },
  {
    id: "intellect",
    name: "The Archaeologist",
    title: "The Intellectual Flex",
    script: "Modern CT scans revealed fractures, infections, and deformities. The boy king was far more fragile than legends suggest.",
    accent: "Analytical British",
    color: "border-blue-500/50"
  },
  {
    id: "revelation",
    name: "The Scientist",
    title: "Science × History",
    script: "Technology finally spoke where history was silent.",
    accent: "Precise / Professional",
    color: "border-emerald-500/50"
  },
  {
    id: "micdrop",
    name: "Tutankhamun",
    title: "The Mic Drop",
    script: "You searched my tomb for gold. But what you truly found… was my story.",
    accent: "Wise / Eternal",
    color: "border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)]"
  }
];

export default function VideoSeries() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {videoSections.map((v, i) => (
          <motion.div 
            key={v.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
          >
            {/* VIDEO CONTAINER */}
            <div className={`w-full md:w-1/2 aspect-video bg-zinc-900 rounded-none border-t-2 border-l-2 ${v.color} relative overflow-hidden group shadow-2xl`}>
              {/* Replace the <div> below with your <video> tag later */}
              <div className="absolute inset-0 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30">
                 <span className="text-[#D4AF37] font-mono text-xs tracking-widest uppercase animate-pulse">
                   [ Upload {v.id}.mp4 Here ]
                 </span>
              </div>
              
              {/* Scanline Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />
            </div>

            {/* SCRIPT & INFO */}
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-[#D4AF37] font-serif text-sm uppercase tracking-[0.3em]">{v.title}</h3>
              <h4 className="text-white text-3xl font-bold">{v.name}</h4>
              <p className="text-zinc-500 font-mono text-xs italic italic">{v.accent} Tone</p>
              <div className="h-[1px] w-20 bg-[#D4AF37]/30 my-4" />
              <p className="text-zinc-300 text-xl leading-relaxed italic font-serif">
                "{v.script}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}