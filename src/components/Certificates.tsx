"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  skills: string[];
  image: string;
  desc: string;
  date: string;
}

const certificates: CertificateItem[] = [
  {
    id: "ibm-skillsbuild",
    title: "IBM SkillsBuild Certification",
    issuer: "IBM SkillsBuild",
    skills: ["Data Viz", "Python", "Data Analytics"],
    image: "/assets/ibm_skills.jpg",
    desc: "Comprehensive certification covering data analysis foundations and Python scripting.",
    date: "2024",
  },
  {
    id: "infosys-dbms-1",
    title: "DBMS Part 1 Certification",
    issuer: "Infosys Springboard",
    skills: ["Database Systems", "SQL Queries", "Schema Design"],
    image: "/certificates/infosys_dbms_1.jpg",
    desc: "Advanced relational database management system principles, SQL design and normalizations.",
    date: "2024",
  },
  {
    id: "neocolab-java",
    title: "Java Programming Mastery",
    issuer: "NeoColab",
    skills: ["Java SE", "OOP Concepts", "Algorithms"],
    image: "/certificates/neocolab_java.jpg",
    desc: "Rigorous assessment in Java object-oriented paradigms, data structures, and code design.",
    date: "2024",
  },
  {
    id: "neocolab-dbms",
    title: "C Programming Certification",
    issuer: "NeoColab",
    skills: ["C Language", "Logic Models", "Structural Programming"],
    image: "/certificates/google-cert-5.png",
    desc: "A certification validating proficiency in C programming concepts, structural patterns, and logic models.",
    date: "2024",
  },
  {
    id: "hackerrank-sql",
    title: "SQL Basic Certification",
    issuer: "HackerRank",
    skills: ["SQL Joins", "Aggregations", "Subqueries"],
    image: "/certificates/hackerrank_sql.jpg",
    desc: "HackerRank skills verification for relational databases, join operations, and data grouping.",
    date: "2024",
  },
  {
    id: "webstan-hackathon",
    title: "Hackathon Excellence",
    issuer: "Webstan Hackathon",
    skills: ["Hackathon", "Collaboration", "Product Design"],
    image: "/certificates/webstan_hackathon.jpg",
    desc: "Certification of participation and excellence in web development hackathon challenge.",
    date: "2024",
  },
  {
    id: "codsoft-intern",
    title: "Software Development Intern",
    issuer: "CodSoft",
    skills: ["React Dev", "Git Control", "UI/UX Layouts"],
    image: "/assets/codsoft.jpg",
    desc: "Completed projects in core frontend applications using reactive frameworks and components.",
    date: "2024",
  },
  {
    id: "adobe-ai-agents",
    title: "Unleashing the Power of AI Agents",
    issuer: "Adobe",
    skills: ["AI Agents", "Artificial Intelligence", "Automation"],
    image: "/certificates/google-cert-1.jpg",
    desc: "Completed a professional certification course exploring the design, capabilities, and industrial applications of autonomous AI agents.",
    date: "2026",
  },
  {
    id: "wns-cybersmart",
    title: "CyberSmart Awareness Internship",
    issuer: "WNS Cares Foundation",
    skills: ["Cyber Security", "Social Service", "Outreach"],
    image: "/certificates/google-cert-2.jpg",
    desc: "Completed a CSR Project internship titled 'CyberSmart Awareness' applying tutoring, networking, and security awareness outreach.",
    date: "2025",
  },
  {
    id: "infosys-genai",
    title: "Generative AI Certification",
    issuer: "Infosys Springboard",
    skills: ["Generative AI", "LLMs", "Artificial Intelligence"],
    image: "/certificates/google-cert-3.jpg",
    desc: "Comprehensive certification covering Generative AI concepts, LLMs, and prompt engineering foundations.",
    date: "2025",
  },
  {
    id: "skillera-ai",
    title: "AI Certification",
    issuer: "Skillera",
    skills: ["Artificial Intelligence", "Machine Learning", "Algorithm Design"],
    image: "/certificates/google-cert-4.jpg",
    desc: "Acquired credentials in artificial intelligence methodologies, machine learning models, and algorithm design.",
    date: "2025",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section
      id="certificates"
      className="relative w-full min-h-screen scroll-mt-[90px] pt-[100px] pb-24 md:pb-32 bg-transparent overflow-hidden px-6 md:px-12"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-950/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] w-[92%] mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2"
          >
            CREDENTIALS & CREDITS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase text-glow-purple font-display"
          >
            Professional Certifications
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, idx) => {
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setSelectedCert(cert)}
                className="group glass-panel border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between h-auto pb-4 shadow-[0_10px_25px_rgba(0,0,0,0.6)] cursor-pointer hover:border-cyan-500/30 hover:bg-[#07060f]/60 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(6,182,212,0.12)] transition-all duration-300"
              >
                {/* Header (Issuer) */}
                <div className="p-4 flex justify-between items-center border-b border-white/5 bg-black/20 select-none">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.issuer}</span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500">{cert.date}</span>
                </div>

                {/* Thumbnail Display with zoom overlay */}
                <div className="mx-4 mt-4 h-[160px] overflow-hidden rounded-lg relative bg-black/40 border border-white/5 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <span className="px-3 py-1 bg-cyan-600/90 text-[9px] font-mono tracking-widest text-white uppercase rounded-full border border-cyan-400/20">
                      View Credential
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wide font-display mb-1.5 group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed line-clamp-2">
                      {cert.desc}
                    </p>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-white/5 border border-white/5 rounded font-mono text-[9px] uppercase tracking-wider text-zinc-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Inspector Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-[16/11] bg-[#0c0a15] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.25)] flex flex-col justify-between"
            >
              {/* Close bar */}
              <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#07060d]">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  {selectedCert.title} - Issued by {selectedCert.issuer}
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-1.5 border border-white/10 hover:border-red-500/50 hover:text-red-400 rounded-full text-[10px] font-mono tracking-wider uppercase text-zinc-400 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

              {/* Photo Display */}
              <div className="flex-1 bg-black overflow-hidden flex items-center justify-center p-4 relative">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
