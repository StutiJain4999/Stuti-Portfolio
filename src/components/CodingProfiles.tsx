"use client";

import { motion } from "framer-motion";
import { Award, Code2, ArrowUpRight } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const profiles = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/stuti-jain-02a55b322/",
    icon: LinkedinIcon,
    username: "stuti-jain-02a55b322",
    tag: "Professional Connection",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:border-blue-500/40",
    accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    hoverBg: "from-blue-600/10 to-transparent",
  },
  {
    name: "GitHub",
    url: "https://github.com/StutiJain4999",
    icon: GithubIcon,
    username: "StutiJain4999",
    tag: "Repository Hub",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:border-purple-500/40",
    accent: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    hoverBg: "from-purple-600/10 to-transparent",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/12408204/",
    icon: Code2,
    username: "12408204",
    tag: "DSA Algorithms",
    glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:border-amber-500/40",
    accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    hoverBg: "from-amber-600/10 to-transparent",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/stutijanzm9",
    icon: Award,
    username: "stutijanzm9",
    tag: "Computer Science GFG",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:border-emerald-500/40",
    accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    hoverBg: "from-emerald-600/10 to-transparent",
  },
];

export default function CodingProfiles() {
  return (
    <section
      id="profiles"
      className="relative w-full min-h-screen scroll-mt-[80px] py-24 md:py-32 bg-transparent overflow-hidden px-6 md:px-12"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] w-[92%] mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2"
          >
            RECRUITER NETWORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase text-glow-purple font-display"
          >
            Coding & Social Profiles
          </motion.h2>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {profiles.map((prof, idx) => {
            const Icon = prof.icon;
            return (
              <motion.div
                key={prof.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group glass-panel p-4 rounded-xl border border-white/5 flex flex-col justify-between items-center text-center h-auto relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 ${prof.glow}`}
              >
                {/* Gradient background hover aura */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${prof.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="flex flex-col items-center gap-2.5 z-10 w-full">
                  <div className={`p-2.5 rounded-xl border ${prof.accent} transition-transform duration-500 group-hover:scale-105`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-zinc-300 font-mono font-light truncate max-w-full">
                    {prof.username}
                  </p>
                </div>

                <a
                  href={prof.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1 py-1.5 mt-3 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/10 rounded-lg text-[10px] font-mono tracking-widest uppercase text-zinc-300 hover:text-white transition-all duration-300 cursor-pointer z-10"
                >
                  <span>Visit Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
