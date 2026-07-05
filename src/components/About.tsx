"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Award, Code2, GraduationCap, FolderGit2, BookOpen } from "lucide-react";

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

function Counter({ value, duration = 1.5, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimeValue: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTimeValue) startTimeValue = timestamp;
      const progress = Math.min((timestamp - startTimeValue) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (value - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen scroll-mt-[90px] pt-[100px] pb-24 md:pb-32 bg-transparent overflow-hidden px-6 md:px-12"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-950/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] w-[92%] mx-auto">
        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Biography Text (Left Column) */}
          <div className="lg:col-span-5 space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2"
            >
              WHO I AM
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase text-glow-purple font-display mb-6"
            >
              About Me
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-light text-zinc-100 leading-relaxed font-display"
            >
              {"Hi, I'm "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-normal">Stuti Jain</span>{", a Computer Science Engineering student at Lovely Professional University (LPU) specializing in Data Science and Analytics."}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-zinc-400 font-light leading-relaxed"
            >
              I bridge the gap between high-dimensional raw datasets and visual intelligence. Using Python, SQL, and Power BI, I build dynamic, interactive dashboards and data pipelines that translate numbers into corporate strategy.
            </motion.p>
          </div>

          {/* Redesigned 4-Card Profile Grid (Right Column) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            
            {/* Card 1: Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-cyan-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">ACADEMICS</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide font-display">Education</h4>
                <p className="text-xs font-semibold text-cyan-400 mt-1">B.Tech in Computer Science Engineering</p>
                <p className="text-[11px] text-zinc-300 font-mono mt-0.5">Lovely Professional University</p>
              </div>
              <p className="text-xs md:text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                Core subjects: DBMS, SQL, Java programming, and Data Structures. Expecting graduation in 2028.
              </p>
            </motion.div>

            {/* Card 2: Career Goal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-purple-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">ASPIRATION</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide font-display">Career Goal</h4>
              </div>
              <p className="text-xs md:text-sm text-zinc-400 font-light mt-2 leading-relaxed">
                To work in core data analytics and modeling teams where I can deploy predictive algorithms, optimize pipeline operations, and translate data into measurable corporate strategy.
              </p>
            </motion.div>

            {/* Card 3: Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-indigo-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">FOCUS AREAS</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide font-display">Interests</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["Predictive Analytics", "Machine Learning", "Data Visualization", "SQL Database Tuning"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] text-zinc-300 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Card 4: Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-teal-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-teal-400" />
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">STATS SUMMARY</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide font-display">Quick Facts</h4>
              </div>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between items-center text-xs border-b border-white/5 pb-1">
                  <span className="text-zinc-500 font-mono uppercase">LeetCode Solved</span>
                  <span className="text-white font-semibold font-mono"><Counter value={70} suffix="+" /></span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-white/5 pb-1">
                  <span className="text-zinc-500 font-mono uppercase">GFG Problems</span>
                  <span className="text-white font-semibold font-mono"><Counter value={200} suffix="+" /></span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-mono uppercase">Certifications</span>
                  <span className="text-white font-semibold font-mono"><Counter value={15} suffix="+" /></span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
