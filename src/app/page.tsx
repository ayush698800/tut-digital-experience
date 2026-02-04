"use client";
import Hero from "@/components/sections/Hero";
import Lineage from "@/components/sections/Lineaage";
import ChapterText from "@/components/sections/ChapterText";
import Timeline from "@/components/sections/Timeline";
import Scanner from "@/components/sections/Scanner";
import VideoSeries from "@/components/sections/VideoSeries";
import Curse from "@/components/sections/Curse";
import Quiz from "@/components/sections/Quiz"; // <-- NEW IMPORT
import Conclusion from "@/components/sections/Conclusion";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-[#D4AF37] selection:text-black scroll-smooth">
      <Hero />
      <Lineage />
      <ChapterText />
      <Timeline />
      <Scanner />
      <VideoSeries />
      <Curse />
      <Quiz /> {/* <-- QUIZ ADDED HERE */}
      <Conclusion />
      <Footer />
    </main>
  );
}