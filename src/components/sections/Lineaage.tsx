"use client";
import { motion } from "framer-motion";

const royals = [
  { 
    name: "Amenhotep III", 
    role: "The Golden Age", 
    desc: "A powerful Pharaoh who ruled for almost four decades at the height of the 18th dynasty's golden age. His reign was the pinnacle of Egyptian power and stability.",
    stat: "40 YEAR REIGN",
    theme: "shadow-[#D4AF37]/10",
    accent: "bg-[#D4AF37]" 
  },
  { 
    name: "Akhenaten", 
    role: "The Heretic King", 
    desc: "Smashed the idols of Amun and moved the capital to Akhetaten. He forced the worship of the Aten (the sun disk), sparking one of the craziest periods in ancient history.",
    stat: "RELIGIOUS ANARCHY",
    theme: "shadow-red-900/20",
    accent: "bg-red-600 animate-pulse"
  },
  { 
    name: "Tutankhamun", 
    role: "The Divine Restorer", 
    desc: "Heir to the chaos. He changed his name to honor Amun, bringing the old gods back from the brink of extinction and restoring the world to its natural order.",
    stat: "9 YEAR RESTORATION",
    theme: "shadow-blue-900/20",
    accent: "bg-blue-500 shadow-[0_0_10px_#3b82f6]"
  }
];

export default function Lineage() {
  return (
    <section className="py-40 bg-[#030303] relative overflow-hidden">
      {/* Dynamic Background: The Sun Disk (Aten) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-28"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            className="h-1 bg-[#D4AF37] mx-auto mb-8"
          />
          <h2 className="text-white text-5xl md:text-7xl font-serif mb-6 tracking-tighter">
            Bloodline of the <span className="text-[#D4AF37]">Sun</span>
          </h2>
          <p className="text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.6em]">
            From Golden Stability to Religious Heresy
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {royals.map((king, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className={`relative p-1 bg-gradient-to-b from-zinc-800 to-transparent rounded-2xl group overflow-hidden ${king.theme} shadow-2xl`}
            >
              {/* Inner Card */}
              <div className="bg-[#080808] p-10 rounded-2xl h-full flex flex-col justify-between border border-white/5 group-hover:border-[#D4AF37]/20 transition-all duration-700">
                
                {/* Header Section */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-2 h-2 rounded-full ${king.accent}`} />
                    <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-[0.3em]">
                      {king.role}
                    </span>
                  </div>
                  
                  <h3 className="text-white text-4xl font-serif mb-6 group-hover:text-[#D4AF37] transition-colors">
                    {king.name}
                  </h3>

                  {/* Visual Divider that grows on hover */}
                  <div className="w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-700 mb-6" />

                  <p className="text-zinc-400 text-base leading-relaxed font-light">
                    {king.desc}
                  </p>
                </div>

                {/* Stat Section */}
                <div className="mt-12">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-600 font-mono text-[8px] uppercase tracking-widest">Imperial Log</span>
                    <span className="text-[#D4AF37] font-mono text-[10px] uppercase font-bold tracking-tighter">
                      {king.stat}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: 0.5 + (i * 0.2), duration: 1.5 }}
                      className={`h-full ${king.accent}`}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Numbering */}
              <div className="absolute -bottom-4 -right-2 text-white/5 text-9xl font-serif select-none italic">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}