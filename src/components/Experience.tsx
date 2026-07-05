"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Java Programming Intern",
    company: "NeoColab",
    period: "2024",
    location: "Punjab, India",
    desc: "Studied advanced algorithmic architectures and data structures in Java. Created custom OOP applications and solved complex coding problems on the Neocolab execution engine.",
    skills: ["Java SE", "OOP Concepts", "Algorithms", "Problem Solving"],
  },
  {
    role: "Power BI Internship",
    company: "Cognifyz Technologies",
    period: "2024",
    location: "Remote",
    desc: "Worked on data visualization, dashboard creation and analytics using Microsoft Power BI. Modeled data structures, designed complex calculations using DAX measures, and compiled regional price visualizations.",
    skills: ["Power BI", "DAX Formulas", "Power Query", "Data Analytics"],
  },
  {
    role: "Cyber Security Project Lead",
    company: "WNS Foundation",
    period: "2024",
    location: "Punjab, India",
    desc: "Created educational frameworks covering modern digital safety, phishing threat models, and web system security protocols. Promoted safe browsing and cyber hygiene practices in regional communities.",
    skills: ["Cyber Security", "Information Security", "Community Engagement"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen scroll-mt-[90px] pt-[100px] pb-24 md:pb-32 bg-transparent overflow-hidden px-6 md:px-12"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] w-[92%] mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2"
          >
            CAREER JOURNEY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase text-glow-purple font-display"
          >
            Professional Experience
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto pl-8 md:pl-12">
          {/* Vertical Line on Left */}
          <div className="absolute left-[9px] md:left-[13px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500/20 opacity-30" />

          {/* Timeline Cards */}
          <div className="space-y-5">
            {experiences.map((exp, index) => {
              return (
                <div
                  key={exp.role + exp.company}
                  className="relative flex flex-col items-start"
                >
                  {/* Pulsing Node on Left */}
                  <div className="absolute -left-[30px] md:-left-[42px] top-6 w-5 h-5 rounded-full bg-black border-2 border-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.4)] flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Actual Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-full"
                  >
                    <div className="glass-panel glass-panel-hover p-5 md:p-6 rounded-2xl border border-white/5 relative">
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 mb-4">
                        <span className="flex items-center gap-1.5 text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:block" />
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Header details */}
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none uppercase font-display">
                        {exp.role}
                      </h3>
                      <h4 className="text-xs md:text-sm font-mono text-purple-400 mt-2 uppercase tracking-widest font-semibold">
                        {exp.company}
                      </h4>

                      {/* Desc */}
                      <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mt-4">
                        {exp.desc}
                      </p>

                      {/* Skills listed */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md font-mono text-[9px] uppercase tracking-wider text-zinc-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
