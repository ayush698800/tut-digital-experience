"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const videoSections = [
  {
    id: "hook",
    name: "Tutankhamun",
    title: "The Silent King",
    videoSrc: "/tut1.mp4",
    script: "I was a king before I was a man. I ruled… but I never lived long enough to understand power.",
    color: "border-[#D4AF37]",
    bgTheme: "bg-gradient-to-br from-black via-zinc-950 to-zinc-900",
    statusText: "Initiating Life-Stream...",
    hoverColor: "hover:border-[#D4AF37]/80",
  },
  {
    id: "suffering",
    name: "Tutankhamun",
    title: "The Fragile Vessel",
    videoSrc: "/tut2.mp4",
    script: "My body was weak. My bones broke easily. Even walking… was pain.",
    color: "border-red-900/50",
    bgTheme: "bg-gradient-to-br from-black via-red-950/20 to-black",
    statusText: "Analyzing Trauma Data...",
    hoverColor: "hover:border-red-700/80",
  },
  {
    id: "revelation",
    name: "The Scientist",
    title: "Digital Unveiling",
    videoSrc: "/sci1.mp4",
    script: "This was the first time a mummy was examined without being harmed. Technology finally spoke where history was silent.",
    color: "border-emerald-500/50",
    bgTheme: "bg-gradient-to-br from-black via-emerald-950/20 to-black",
    statusText: "CT Scan Processing...",
    hoverColor: "hover:border-emerald-700/80",
  },
  {
    id: "haws",
    name: "Zahi Hawass",
    title: "The Forensic Verdict",
    videoSrc: "/haws.mp4",
    script: "The mummy is in very bad condition because of what Carter did in the 1920s. Today, we restore his dignity through science.",
    color: "border-blue-500/50",
    bgTheme: "bg-gradient-to-br from-black via-blue-950/20 to-black",
    statusText: "Restoration Protocols Active...",
    hoverColor: "hover:border-blue-700/80",
  },
  {
    id: "micdrop",
    name: "Tutankhamun",
    title: "The Enduring Legacy",
    videoSrc: "/tut3.mp4",
    script: "You searched my tomb for gold. But what you truly found… was my story.",
    color: "border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.3)]",
    bgTheme: "bg-gradient-to-br from-black via-[#D4AF37]/10 to-black",
    statusText: "Legacy Archived.",
    hoverColor: "hover:border-[#D4AF37]/80",
  }
];

// FIX 1: Explicitly allow null in the RefObject type
const useVideoInView = (videoRef: React.RefObject<HTMLVideoElement | null>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {}); // Catch play errors (browser policy)
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.6 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef]);
};

// FIX 2: Create a sub-component to handle hooks for EACH video
const VideoItem = ({ v }: { v: typeof videoSections[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoInView(videoRef);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ margin: "-100px" }}
      className={`flex flex-col items-center p-6 rounded-3xl ${v.bgTheme} shadow-xl group`}
    >
      <motion.div 
        initial={{ rotateY: 10, scale: 0.9 }}
        whileInView={{ rotateY: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`relative w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] max-h-[65vh] bg-zinc-950 rounded-2xl border-2 ${v.color} ${v.hoverColor} overflow-hidden shadow-2xl mb-10 transition-all duration-500`}
      >
        <video 
          ref={videoRef}
          src={v.videoSrc}
          className="w-full h-full object-cover"
          controls
          playsInline
          muted
          loop
        />
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px]" />
      </motion.div>

      <div className="text-center space-y-5 max-w-2xl px-4">
        <div className="space-y-2">
          <span className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-[0.4em] block">
            {v.title}
          </span>
          <h4 className="text-white text-4xl md:text-5xl font-serif italic">
            {v.name}
          </h4>
        </div>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6" 
        />
        
        <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light italic px-4">
          {v.script.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ color: "rgba(90, 90, 95, 1)", opacity: 0.6 }}
              whileInView={{ color: "rgba(255, 255, 255, 1)", opacity: 1 }}
              transition={{ delay: idx * 0.07, duration: 0.3 }}
              className="inline-block mr-1.5"
            >
              {word}
            </motion.span>
          ))}
        </p>

        <div className="mt-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-zinc-800 bg-zinc-900/50 rounded-full">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
            </div>
            <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-[0.2em]">
              {v.statusText}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function VideoSeries() {
  return (
    <section className="bg-black py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-48 relative z-10">
        {videoSections.map((v) => (
          <VideoItem key={v.id} v={v} />
        ))}
      </div>
    </section>
  );
}