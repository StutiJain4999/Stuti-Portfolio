"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, Database, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    accent: "text-purple-400",
    glow: "rgba(139, 92, 246, 0.4)",
    borderColor: "group-hover:border-purple-500/30",
    barColor: "bg-gradient-to-r from-purple-600 to-indigo-500",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 88 },
      { name: "C++", level: 85 },
      { name: "SQL", level: 92 },
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    title: "Data Analytics",
    icon: BarChart3,
    accent: "text-cyan-400",
    glow: "rgba(6, 182, 212, 0.4)",
    borderColor: "group-hover:border-cyan-500/30",
    barColor: "bg-gradient-to-r from-cyan-600 to-blue-500",
    skills: [
      { name: "Power BI", level: 95 },
      { name: "Excel", level: 90 },
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 90 },
      { name: "Matplotlib & Seaborn", level: 88 },
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    accent: "text-blue-400",
    glow: "rgba(59, 130, 246, 0.4)",
    borderColor: "group-hover:border-blue-500/30",
    barColor: "bg-gradient-to-r from-blue-600 to-cyan-500",
    skills: [
      { name: "MySQL", level: 92 },
      { name: "DBMS Concepts", level: 90 },
      { name: "Data Normalization", level: 88 },
      { name: "Query Optimization", level: 85 },
    ],
  },
  {
    title: "Developer Tools",
    icon: Terminal,
    accent: "text-pink-400",
    glow: "rgba(236, 72, 153, 0.4)",
    borderColor: "group-hover:border-pink-500/30",
    barColor: "bg-gradient-to-r from-pink-600 to-purple-500",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter Notebook", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen scroll-mt-[90px] pt-[100px] pb-24 md:pb-32 bg-transparent overflow-hidden px-6 md:px-12"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-950/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-950/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow [animation-delay:2s]" />

      <div className="max-w-[1400px] w-[92%] mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2"
          >
            CAPABILITIES & STACK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase text-glow-purple font-display"
          >
            Technical Competencies
          </motion.h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className={`group glass-panel p-6 md:p-8 rounded-3xl border border-white/5 transition-all duration-500 hover:bg-[#06040c]/50 ${category.borderColor}`}
                style={{
                  boxShadow: `0 0 0 rgba(0,0,0,0)`,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className={`p-3 rounded-2xl bg-white/5 border border-white/5 ${category.accent} transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider font-display">
                    {category.title}
                  </h3>
                </div>

                {/* Redesigned Skills Grid Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02 }}
                      className="px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-between gap-3 group/item"
                    >
                      <span className="text-xs font-semibold text-zinc-300 group-hover/item:text-white uppercase tracking-wider truncate">
                        {skill.name}
                      </span>
                      
                      {/* Dots Mastery Indicator */}
                      <div className="flex gap-1 flex-shrink-0">
                        {[1, 2, 3, 4, 5].map((dot) => {
                          const active = dot <= Math.round(skill.level / 20);
                          return (
                            <span
                              key={dot}
                              className={`w-1.5 h-1.5 rounded-full ${
                                active
                                  ? category.accent.replace("text-", "bg-")
                                  : "bg-zinc-800"
                              } transition-colors duration-300`}
                            />
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
