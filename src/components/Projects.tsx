"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    id: "fuel-dashboard",
    title: "Global Fuel Price Analytics Dashboard",
    category: "BUSINESS INTELLIGENCE & DATA SCIENCE",
    description:
      "A premium interactive analytics dashboard examining global Fuel, LPG, Diesel, and Kerosene price dynamics. Integrates regional price comparative KPIs, interactive maps, and trend analytics to deliver deep corporate business intelligence.",
    features: [
      "Quantified Diesel & LPG price anomalies across 15+ global regions.",
      "Authored custom DAX formulations for regional average price tracking.",
      "Engineered automated ETL pipelines in Power Query for data cleansing."
    ],
    tech: ["Power BI", "DAX Formulas", "Power Query", "Excel"],
    image: "/images/financial-dashboard.png",
    demo: "#",
    github: "https://github.com/StutiJain4999",
    color: "from-cyan-500/10 to-blue-500/10 border-cyan-500/20",
    accent: "text-cyan-400",
  },
  {
    id: "financial-dashboard",
    title: "Financial Analytics Dashboard",
    category: "BUSINESS INTELLIGENCE & CORPORATE MODELING",
    description:
      "A corporate financial intelligence cockpit designed to analyze quarterly revenues, operating expenses (OpEx), gross profit margins, and cash flow trends. Translates legacy tabular worksheets into structured, interactive KPIs.",
    features: [
      "Modeled net margins and operational cash flows across multiple subsidiaries.",
      "Created dynamic visual charts for real-time cost-benefit analysis.",
      "Cleaned financial spreadsheets using Power Query for reliable reporting."
    ],
    tech: ["Power BI", "DAX Formulas", "Power Query", "Excel"],
    image: "/images/global-fuel-dashboard.png",
    demo: "#",
    github: "https://github.com/StutiJain4999",
    color: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
    accent: "text-purple-400",
  },
  {
    id: "zencrypt",
    title: "ZenCrypt – Secure File Management System",
    category: "CYBERSECURITY & SECURE WEB PLATFORMS",
    description:
      "A secure file management platform featuring AES-256 encryption, JWT authentication, role-based access control, encrypted cloud storage, secure file upload/download and a modern responsive UI.",
    features: [
      "Implemented end-to-end AES-256 encryption for secure file uploads and downloads.",
      "Engineered role-based access control (RBAC) alongside robust JWT authentication.",
      "Designed a sleek, responsive dashboard for streamlined secure cloud file management."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "AES-256 Encryption"],
    image: "/images/projects/zencrypt.png",
    demo: "#",
    github: "https://github.com/StutiJain4999",
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
    accent: "text-emerald-400",
  },
  {
    id: "fuel-analysis-python",
    title: "Fuel Price Data Analysis using Python",
    category: "DATA SCIENCE & EXPLORATORY ANALYSIS",
    description:
      "Performed Exploratory Data Analysis (EDA) and Machine Learning on global fuel price datasets using Python. Created heatmaps, pair plots, scatter plots, box plots, and pie charts to reveal key pricing insights.",
    features: [
      "Analyzed regional fuel price variations and distributions using Pandas and NumPy.",
      "Visualized feature correlations and data clusters using Seaborn and Matplotlib.",
      "Applied Scikit-learn algorithms to build predictive models for future price trends."
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    image: "/images/projects/python-fuel-analysis.png",
    demo: "#",
    github: "https://github.com/StutiJain4999",
    color: "from-amber-500/10 to-orange-500/10 border-amber-500/20",
    accent: "text-amber-400",
  },
  {
    id: "pinecrest-academy",
    title: "Pinecrest Academy – Modern School Website",
    category: "FRONTEND ENGINEERING & RESPONSIVE DESIGN",
    description:
      "A fully responsive modern school website featuring a hero section, notice board, events, about section, vision section, Google Maps integration, and an interactive contact form.",
    features: [
      "Developed a responsive landing page layout using clean HTML5 semantic structure.",
      "Implemented robust styling, grid/flexbox layouts, and custom interactive CSS3 animations.",
      "Integrated dynamic Javascript components including maps API and form validation."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: "/images/projects/pinecrest-academy.png",
    demo: "#",
    github: "https://github.com/StutiJain4999",
    color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20",
    accent: "text-blue-400",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen scroll-mt-[90px] pt-[100px] pb-24 md:pb-32 bg-transparent px-6 md:px-12"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] w-[92%] mx-auto">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2"
            >
              FEATURED WORK
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase text-glow-purple font-display"
            >
              Case Studies & Dashboards
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-xs md:text-sm max-w-sm font-light leading-relaxed"
          >
            A curated selection of software projects, analytical case studies, and business intelligence dashboards.
          </motion.p>
        </div>

        {/* Responsive Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`group glass-panel rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-[#07060f]/60 shadow-[0_15px_30px_rgba(0,0,0,0.6)] h-full`}
              >
                {/* Visual Preview (Top Part) */}
                <div className="relative w-full aspect-video overflow-hidden bg-black/40 border-b border-white/5">
                  {/* Subtle inner hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`} />
                  
                  {/* Image Container with Hover Zoom */}
                  <div className="relative w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-105">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain object-center opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  </div>
                </div>

                {/* Details Panel (Bottom Part) */}
                <div className="p-6 flex-1 flex flex-col justify-between items-start">
                  <div className="w-full">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 uppercase group-hover:text-cyan-300 transition-colors font-display">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-5">
                      {project.description}
                    </p>
                  </div>

                  <div className="w-full mt-auto">
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 bg-white/5 border border-white/5 rounded font-mono text-[10px] tracking-wider uppercase text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="w-full border-t border-white/5 pt-4">
                      <a
                        href={project.demo}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer"
                      >
                        <span>View Dashboard</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                      </a>
                    </div>
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
