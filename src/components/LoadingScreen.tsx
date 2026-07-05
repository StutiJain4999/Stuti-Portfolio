"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const bootLogs = [
  "Initializing Portfolio Core Services...",
  "Loading Python Environment (v3.10.12)...",
  "Connecting to GitHub API (github.com/StutiJain4999)... OK",
  "Fetching LeetCode & GeeksforGeeks Statistics... OK",
  "Injecting Power BI Analytics Engine... OK",
  "Compiling WebGL Canvas & Three.js Shaders... OK",
  "Welcome Recruiter.",
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // 1. Simulate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random increments for realism
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    // 2. Simulate terminal log lines based on progress/time
    let currentLogIndex = 0;
    const logInterval = setInterval(() => {
      if (currentLogIndex < bootLogs.length) {
        setLogs((prev) => [...prev, bootLogs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(logInterval);
      }
    }, 450);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, []);

  useEffect(() => {
    // 3. When progress reaches 100% and logs are complete, wait and trigger exit
    if (progress === 100 && logs.length === bootLogs.length) {
      const timeout = setTimeout(() => {
        setIsFinished(true);
        // Wait for fadeout animation to complete
        const completeTimeout = setTimeout(() => {
          onComplete();
        }, 800);
        return () => clearTimeout(completeTimeout);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [progress, logs.length, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black font-mono px-6"
        >
          {/* Cyber Terminal Container */}
          <div className="w-full max-w-2xl p-8 rounded-lg border border-white/5 bg-[#050508]/85 backdrop-blur-md shadow-[0_0_50px_rgba(139,92,246,0.1)] relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[10px] text-zinc-500 tracking-widest uppercase">
                STUTI_OS_BOOT.EXE
              </span>
            </div>

            {/* Terminal Outputs */}
            <div className="min-h-[220px] flex flex-col justify-start gap-2.5 text-xs text-zinc-400 select-none">
              {logs.map((log, idx) => {
                const safeLog = log ?? "";
                const isWelcome = safeLog.includes("Welcome");
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-2 ${
                      isWelcome
                        ? "text-cyan-400 font-bold text-sm mt-4 text-glow-cyan"
                        : "text-zinc-300"
                    }`}
                  >
                    <span className={isWelcome ? "text-cyan-400" : "text-purple-500"}>
                      {isWelcome ? "★" : ">"}
                    </span>
                    <span>{safeLog}</span>
                  </motion.div>
                );
              })}
              {/* Blinking Cursor */}
              {logs.length < bootLogs.length && (
                <div className="flex items-center gap-2">
                  <span className="text-purple-500">{">"}</span>
                  <span className="w-2 h-4 bg-purple-500 animate-pulse" />
                </div>
              )}
            </div>

            {/* Loading Progress Section */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-3">
              <div className="flex justify-between text-[10px] text-zinc-500 tracking-wider">
                <span>SYSTEM DIAGNOSTICS</span>
                <span className="text-purple-400 font-bold">{progress}%</span>
              </div>
              <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden relative border border-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Cyber Grid Lines Decoration */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse-slow" />
          </div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-[9px] text-zinc-600 tracking-widest uppercase text-center"
          >
            Antigravity Core Tech // Powered by Next.js & WebGL
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
