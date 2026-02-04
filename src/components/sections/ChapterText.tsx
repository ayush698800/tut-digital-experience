"use client";
import { motion } from "framer-motion";

const discoveryLogs = [
  {
    category: "ARTIFACT // 001",
    title: "Veneer of Immortality",
    text: "The boy king's face was shielded by a stunning, solid gold mask. It remains the ultimate icon of ancient preservation, forged to guide the pharaoh’s spirit through the Duat.",
    point: "Mass: 10.1kg Solid Gold",
    glitch: "STATUS: SECURED"
  },
  {
    category: "X-RAY // 1968",
    title: "The Anatomy Revelation",
    text: "Forty years post-discovery, anatomy professor revealed a haunting detail: beneath the ritual resin caking his chest, the king's breastbone and front ribs are entirely absent.",
    point: "Observation: Skeletal Anomalies Detected",
    glitch: "DATA: ANOMALOUS"
  },
  {
    category: "NEURO-SCAN // 2005",
    title: "Digital Resurrection",
    text: "Using a Siemens portable CT, the team captured 1,700 cross-sectional images. The skull was rendered in 0.62mm slices, revealing intricate structures hidden for millennia.",
    point: "Resolution: 0.62mm Forensic Grade",
    glitch: "SCAN: COMPLETE"
  },
  {
    category: "DYNASTY // XVIII",
    title: "The Restoration Decree",
    text: "Formerly Tutankhaten, he dismantled the heresy of his father. He restored the old gods, returned to Amun, and ruled for nine years as the last of his royal line.",
    point: "Legacy: End of a Golden Era",
    glitch: "LINEAGE: TERMINATED"
  }
];

export default function ChapterText() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* Background Texture: Hieroglyphic "Ghost" Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none text-[8rem] font-serif leading-none break-all p-10">
        𓃠 𓆃 𓀗 𓀚 𓀱 𓁀 𓁖 𓁠 𓅓 𓆙 𓊝 𓊢 𓊩 𓊯 𓋑 𓌕 𓌗 𓌝 𓍝 𓎵 𓏏 𓏛 𓏥
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cinematic Header with Glowing Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-40"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            className="h-[1px] bg-[#D4AF37] mx-auto mb-6"
          />
          <span className="text-[#D4AF37] font-mono text-[10px] tracking-[1.2em] uppercase block mb-4">
            Forensic Investigation Log
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-zinc-200 max-w-4xl mx-auto leading-tight">
            "The mummy is in very bad condition because of what <span className="text-[#D4AF37]">Carter</span> did."
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8">
             <div className="h-[1px] w-12 bg-zinc-800" />
             <p className="text-zinc-500 font-mono text-xs uppercase">— Zahi Hawass, 2005</p>
             <div className="h-[1px] w-12 bg-zinc-800" />
          </div>
        </motion.div>

        {/* The Dossier Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          {discoveryLogs.map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Vertical "Scanner" Line animation on hover */}
              <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-zinc-800 overflow-hidden">
                <motion.div 
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="w-full h-1/4 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"
                />
              </div>

              <div className="pl-6 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-[#D4AF37] font-mono text-[10px] tracking-[0.3em] font-bold">
                    {log.category}
                  </span>
                  <span className="text-zinc-700 font-mono text-[8px] group-hover:text-[#D4AF37]/50 transition-colors">
                    {log.glitch}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-zinc-100 group-hover:translate-x-2 transition-transform duration-500">
                  {log.title}
                </h3>

                <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors leading-relaxed text-sm md:text-base border-l border-zinc-900 pl-4 py-2">
                  {log.text}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex-1 h-[1px] bg-zinc-900" />
                  <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 px-4 py-2 rounded-sm text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest shadow-inner">
                    {log.point}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}