"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    q: "Who discovered Tutankhamun's tomb in 1922?",
    a: ["Zahi Hawass", "Howard Carter", "Lord Carnarvon", "Amenhotep III"],
    correct: 1,
  },
  {
    q: "What was the 'startling fact' revealed by the 1968 X-ray?",
    a: ["The king was murdered", "The golden mask was fake", "His breastbone and front ribs were missing", "He was 80 years old"],
    correct: 2,
  },
  {
    q: "In which year was the first ever CT scan performed on Tut's mummy?",
    a: ["1922", "1968", "2005", "2026"],
    correct: 2,
  },
  {
    q: "Which Pharaoh promoted the worship of the sun disk, Aten?",
    a: ["Tutankhamun", "Amenhotep III", "Akhenaten", "Smenkhkare"],
    correct: 2,
  },
  {
    q: "Why did Howard Carter have to chisel the mummy away from the coffin?",
    a: ["To check for hidden gold", "Because the ritual resins had hardened", "To fit it in the scanner", "To protect it from thieves"],
    correct: 1,
  },
  {
    q: "Grammar: Choose the correct passive voice: 'Carter discovered the tomb.'",
    a: ["The tomb is discovered by Carter.", "The tomb was discovered by Carter.", "The tomb had discovered by Carter.", "Carter was discovered by the tomb."],
    correct: 1,
  },
  {
    q: "Grammar: Identify the synonym for 'Scrutiny' used in the text.",
    a: ["Inspection", "Ignorance", "Discovery", "Curse"],
    correct: 0,
  },
  {
    q: "What does 'Tutankhamun' actually mean?",
    a: ["Son of the Sun", "Living Image of Amun", "King of the World", "The Golden One"],
    correct: 1,
  },
  {
    q: "Grammar: 'I didn't sleep a wink.' What does this idiom mean?",
    a: ["Slept very well", "Did not sleep at all", "Slept with one eye open", "Had a nightmare"],
    correct: 1,
  },
  {
    q: "What was the final verdict of the 2005 CT scan investigation?",
    a: ["He was murdered by a blow to the head", "Nothing as serious had happened to him", "The mummy was a replica", "He died of old age"],
    correct: 1,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return; // Lock input
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    
    if (index === questions[current].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  return (
    <section className="min-h-screen bg-[#050505] py-20 px-6 flex items-center justify-center relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dust.png')]" />

      <div className="max-w-2xl w-full z-10">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="bg-[#0a0a0a] border border-[#D4AF37]/20 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              {/* Question Header */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-[#D4AF37] font-mono text-[10px] tracking-[0.3em] uppercase">
                  Data Fragment {current + 1} / {questions.length}
                </span>
                <div className="h-1 w-24 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#D4AF37]" 
                    initial={{ width: 0 }}
                    animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-white text-2xl md:text-3xl font-serif mb-10 leading-tight italic">
                {questions[current].q}
              </h2>

              {/* Options Grid */}
              <div className="space-y-4">
                {questions[current].a.map((option, i) => {
                  const isCorrect = i === questions[current].correct;
                  const isSelected = i === selectedAnswer;
                  
                  // Dynamic Styling
                  let buttonStyle = "border-zinc-800 text-zinc-500";
                  if (isAnswered) {
                    if (isCorrect) buttonStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                    else if (isSelected) buttonStyle = "border-red-600 bg-red-600/10 text-red-500";
                    else buttonStyle = "border-zinc-900 text-zinc-700 opacity-50";
                  }

                  return (
                    <button
                      key={i}
                      disabled={isAnswered}
                      onClick={() => handleAnswerClick(i)}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 font-light flex justify-between items-center ${buttonStyle}`}
                    >
                      <span>{option}</span>
                      {isAnswered && isCorrect && <span className="text-xs font-mono uppercase tracking-widest text-emerald-500">Correct</span>}
                      {isAnswered && isSelected && !isCorrect && <span className="text-xs font-mono uppercase tracking-widest text-red-600">Incorrect</span>}
                    </button>
                  );
                })}
              </div>

              {/* Prompt to move forward */}
              <AnimatePresence>
                {isAnswered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 flex justify-center"
                  >
                    <button 
                      onClick={nextQuestion}
                      className="px-10 py-3 bg-[#D4AF37] text-black font-mono text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
                    >
                      Next Archive →
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Results Screen */
            <motion.div
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              className="text-center bg-[#0a0a0a] border-2 border-[#D4AF37] p-12 rounded-3xl shadow-[0_0_60px_rgba(212,175,55,0.1)]"
            >
              <h2 className="text-[#D4AF37] font-serif text-5xl mb-4 italic underline decoration-zinc-800 underline-offset-8">Scan Complete</h2>
              <p className="text-zinc-500 font-mono uppercase tracking-[0.4em] mb-10 text-[10px]">Retrieval Score Verified</p>
              
              <div className="relative inline-block mb-10">
                <div className="text-8xl font-serif text-white">{score}</div>
                <div className="absolute -right-12 bottom-2 text-zinc-700 font-mono text-2xl">/ {questions.length}</div>
              </div>

              <div className="p-6 border border-zinc-900 rounded-2xl mb-12 bg-zinc-950/50">
                <p className="text-zinc-400 text-sm leading-relaxed font-light italic">
                  {score >= 8 
                    ? "Your biological and historical understanding of the KV62 site is absolute. You have cleared the forensic audit." 
                    : "Data corruption detected. Some historical facts were misinterpreted. Re-entry into the tomb is recommended."}
                </p>
              </div>

              <button 
                onClick={() => { setCurrent(0); setScore(0); setShowResult(false); setIsAnswered(false); setSelectedAnswer(null); }}
                className="group relative px-8 py-4 border border-[#D4AF37] overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 text-[#D4AF37] group-hover:text-black font-mono text-xs uppercase tracking-widest font-bold">
                  Reset System Interface
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}