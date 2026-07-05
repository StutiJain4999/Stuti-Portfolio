"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Database, BarChart3 } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Floating 3D geometries that float and spin around the section
function FloatingShape({ position, color, geometryType }: { position: [number, number, number]; color: string; geometryType: "torus" | "octahedron" | "sphere" | "ring" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.007;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometryType === "torus" && <torusGeometry args={[0.4, 0.15, 16, 64]} />}
        {geometryType === "octahedron" && <octahedronGeometry args={[0.5]} />}
        {geometryType === "sphere" && <sphereGeometry args={[0.35, 32, 32]} />}
        {geometryType === "ring" && <ringGeometry args={[0.3, 0.5, 32]} />}
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Floating3DCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#06B6D4" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#8B5CF6" />
        <FloatingShape position={[-3, 2, -1]} color="#8B5CF6" geometryType="torus" />
        <FloatingShape position={[3.5, 1.5, -2]} color="#06B6D4" geometryType="octahedron" />
        <FloatingShape position={[-2.5, -2, 0]} color="#3B82F6" geometryType="ring" />
        <FloatingShape position={[2.8, -1.8, -1]} color="#a78bfa" geometryType="sphere" />
      </Canvas>
    </div>
  );
}

const roles = [
  "Future Data Scientist",
  "Power BI Developer",
  "Data Analyst",
  "Python Developer",
  "Machine Learning Enthusiast",
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Mouse move handler for parallax elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Custom typing animation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const role = roles[currentRoleIdx];
    const typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && currentText === role) {
      timer = setTimeout(() => setIsDeleting(true), 1800); // pause at full text
    } else if (isDeleting && currentText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
      }, 100);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? role.substring(0, currentText.length - 1)
            : role.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-transparent py-24 px-6 md:px-12"
    >
      {/* 3D Floating Geometries Background */}
      <Floating3DCanvas />

      {/* Main Content Layout */}
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Column: Typography & CTAs */}
        <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6"
          >
            <div className="flex items-center gap-2 p-1.5 px-3.5 rounded-full border border-cyan-500/20 bg-cyan-950/15 text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Available for Opportunities</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none uppercase animate-pulse-slow font-display"
          >
            STUTI JAIN
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 text-lg sm:text-2xl font-semibold tracking-wider bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-400 bg-clip-text text-transparent uppercase font-display"
          >
            Computer Science Engineering Student
          </motion.h2>

          {/* Typing Role Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 text-xl sm:text-2xl font-bold min-h-[40px] flex items-center justify-center lg:justify-start gap-2"
          >

            <span className="text-cyan-400 text-glow-cyan font-mono tracking-wide">
              {currentText}
            </span>
            <span className="w-1.5 h-6 bg-purple-500 animate-pulse" />
          </motion.div>

          {/* Mini Bio Summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-sm sm:text-base text-zinc-400 max-w-lg leading-relaxed font-light mx-auto lg:mx-0"
          >
            Data analytics enthusiast and developer crafting neural dashboards and high-speed algorithms at Lovely Professional University. Bridging modern databases with interactive visuals.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative px-8 py-3.5 rounded-full overflow-hidden text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 to-cyan-600 shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer animate-pulse-slow"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span>Explore My Work</span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3.5 rounded-full border border-cyan-500/20 bg-cyan-950/10 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/20 transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Column: Rotating Circular Photo Frame */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center select-none"
            style={{
              transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
            }}
          >
            {/* Outer Cyber Grid Frame */}
            <div className="absolute inset-0 rounded-full border border-white/5 bg-radial-gradient-glow pointer-events-none" />

            {/* Rotating Cyan Ring */}
            <div className="absolute -inset-2.5 rounded-full border border-dashed border-cyan-500/30 animate-[spin_40s_linear_infinite]" />

            {/* Rotating Purple Gradient Ring */}
            <div className="absolute -inset-5 rounded-full border-2 border-transparent border-t-purple-500/40 border-b-cyan-500/40 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Glowing Aura */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 blur-xl pointer-events-none" />

            {/* Photo Container */}
            <div className="w-full h-full rounded-full p-2.5 bg-[#050508]/85 border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.15)] flex items-center justify-center overflow-hidden">
              <img
                src="/assets/photo_2.jpeg"
                alt="Stuti Jain Blazer"
                className="w-full h-full rounded-full object-cover grayscale-[20%] contrast-[105%] hover:scale-105 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Tech Float Icons */}
            <div className="absolute -top-3 -right-3 p-3 rounded-full bg-[#050508]/90 border border-white/10 text-cyan-400 animate-bounce">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="absolute -bottom-3 -left-3 p-3 rounded-full bg-[#050508]/90 border border-white/10 text-purple-400 animate-bounce [animation-delay:1s]">
              <Database className="w-5 h-5" />
            </div>
            <div className="absolute top-1/2 -left-8 p-2.5 rounded-full bg-[#050508]/90 border border-white/10 text-blue-400 animate-pulse [animation-delay:0.5s]">
              <Code2 className="w-4.5 h-4.5" />
            </div>
          </motion.div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1.5 cursor-pointer z-10" onClick={() => scrollToSection("about")}>
        <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-500 uppercase hover:text-white transition-colors duration-300">SCROLL ENTRY</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="p-1 rounded-full border border-white/10 hover:border-cyan-500 transition-colors duration-300"
        >
          <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
}
