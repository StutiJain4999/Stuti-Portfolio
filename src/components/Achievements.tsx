"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, TrendingUp, Trophy } from "lucide-react";

const achievements = [
  {
    title: "200+ GeeksforGeeks Problems Solved",
    category: "ALGORITHMS & DSA",
    desc: "Demonstrated strong logic and data structures foundations by solving 200+ programming puzzles and algorithmic tasks on GFG.",
    icon: Trophy,
    color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  },
  {
    title: "70+ LeetCode Problems Solved",
    category: "PROBLEM SOLVING",
    desc: "Engaged in competitive programming exercises, perfecting logic, arrays, strings and graph questions on LeetCode.",
    icon: TrendingUp,
    color: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  },
  {
    title: "IBM Data Visualization with Python",
    category: "DATA SCIENCE",
    desc: "Acquired skills in data representation, dashboard planning, and python plotting libraries (Matplotlib, Seaborn) through IBM SkillsBuild.",
    icon: Award,
    color: "text-purple-400 border-purple-500/20 bg-purple-500/5",
  },
  {
    title: "Power BI Analytics Internship",
    category: "BUSINESS INTELLIGENCE",
    desc: "Successfully finalized a remote Power BI analytics internship at Cognifyz, designing metrics dashboards.",
    icon: CheckCircle2,
    color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
  },
  {
    title: "Java Programming Certification",
    category: "SOFTWARE ENGINEERING",
    desc: "Secured credential verification in Java SE core paradigms, object mappings, OOP, and exceptions management through NeoColab.",
    icon: Award,
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
  },
  {
    title: "SQL & DBMS Certifications",
    category: "DATABASE SYSTEMS",
    desc: "Obtained database structure foundations, normalization models and HackerRank SQL Basic credentials.",
    icon: CheckCircle2,
    color: "text-pink-400 border-pink-500/20 bg-pink-500/5",
  },
  {
    title: "Webstan Hackathon Competitor",
    category: "COLLABORATION",
    desc: "Collaborated under intense hackathon deadlines to mock, design and build responsive web projects.",
    icon: Trophy,
    color: "text-teal-400 border-teal-500/20 bg-teal-500/5",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full min-h-screen scroll-mt-[90px] pt-[100px] pb-24 md:pb-32 bg-transparent overflow-hidden px-6 md:px-12"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-950/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] w-[92%] mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2"
          >
            HONORS & MILESTONES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase text-glow-purple font-display"
          >
            Achievements & Milestones
          </motion.h2>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-white/10 pl-6 md:pl-8 space-y-4">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Glowing Node on vertical line */}
                <div className="absolute -left-[37px] md:-left-[45px] top-1 p-1 bg-black border border-white/20 rounded-full group-hover:border-cyan-400 transition-colors z-10">
                  <div className="w-3.5 h-3.5 rounded-full bg-zinc-800 group-hover:bg-cyan-400 transition-all duration-300 animate-pulse" />
                </div>

                {/* Glass card content */}
                <div className="glass-panel glass-panel-hover p-4 rounded-xl border border-white/5 flex flex-col md:flex-row gap-4 items-start">
                  {/* Icon wrap */}
                  <div className={`p-2 rounded-xl border ${item.color} flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text details */}
                  <div className="flex-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase group-hover:text-cyan-300 transition-colors font-display">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
