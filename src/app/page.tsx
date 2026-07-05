"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import CodingProfiles from "@/components/CodingProfiles";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import GalaxyBackground from "@/components/GalaxyBackground";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          {/* Futuristic Particle & Neural Network Background */}
          <GalaxyBackground />

          {/* Navigation Bar */}
          <Navbar />

          <main className="flex-1 flex flex-col w-full relative">
            {/* 1. Hero Section */}
            <Hero />

            {/* ── Separator ── */}
            <div className="relative w-full h-px overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-48 h-12 bg-purple-600/10 blur-2xl rounded-full" />
            </div>

            {/* 2. About Me */}
            <About />

            {/* ── Separator ── */}
            <div className="relative w-full h-px overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-48 h-12 bg-cyan-600/10 blur-2xl rounded-full" />
            </div>

            {/* 3. Skills */}
            <Skills />

            {/* ── Separator ── */}
            <div className="relative w-full h-px overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-48 h-12 bg-purple-600/10 blur-2xl rounded-full" />
            </div>

            {/* 4. Featured Projects */}
            <Projects />

            {/* ── Separator ── */}
            <div className="relative w-full h-px overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-48 h-12 bg-cyan-600/10 blur-2xl rounded-full" />
            </div>

            {/* 5. Certificates Gallery */}
            <Certificates />

            {/* ── Separator ── */}
            <div className="relative w-full h-px overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-48 h-12 bg-purple-600/10 blur-2xl rounded-full" />
            </div>

            {/* 6. Experience Timeline */}
            <Experience />

            {/* ── Separator ── */}
            <div className="relative w-full h-px overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-48 h-12 bg-cyan-600/10 blur-2xl rounded-full" />
            </div>

            {/* 7. Coding Profiles */}
            <CodingProfiles />

            {/* ── Separator ── */}
            <div className="relative w-full h-px overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-48 h-12 bg-purple-600/10 blur-2xl rounded-full" />
            </div>

            {/* 8. Achievements Timeline */}
            <Achievements />

            {/* ── Separator ── */}
            <div className="relative w-full h-px overflow-visible">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-48 h-12 bg-cyan-600/10 blur-2xl rounded-full" />
            </div>

            {/* 9. Contact Form */}
            <Contact />
          </main>

          {/* Premium Footer */}
          <footer className="py-12 bg-black/80 backdrop-blur-md border-t border-white/5 text-zinc-500 text-[10px] font-mono tracking-widest relative z-10 select-none">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col items-center sm:items-start gap-1">
                <p className="uppercase text-white/90">
                  DESIGNED & DEVELOPED BY STUTI JAIN
                </p>
                <p className="text-[8px] text-zinc-600 uppercase">
                  Made with ❤️ using React, Three.js & Tailwind CSS
                </p>
              </div>
              <div className="flex gap-6">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-white transition-colors duration-300 uppercase"
                >
                  [ ASCENT TO TOP ▲ ]
                </a>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
