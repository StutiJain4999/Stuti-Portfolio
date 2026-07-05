"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    // Check if we are on a mobile/touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const timer = setTimeout(() => setIsVisible(true), 0);
    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null || 
        target.classList.contains('clickable') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';

      if (isClickable) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-9999 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          borderColor: isHovered ? "rgba(6, 182, 212, 0.8)" : "rgba(139, 92, 246, 0.5)",
          backgroundColor: isHovered ? "rgba(6, 182, 212, 0.15)" : "transparent",
          boxShadow: isHovered ? "0 0 12px rgba(6, 182, 212, 0.4)" : "none",
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
      {/* Inner Pinpoint Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-9999"
        style={{
          x: dotX,
          y: dotY,
          backgroundColor: isHovered ? "rgb(6, 182, 212)" : "rgb(139, 92, 246)",
          boxShadow: isHovered ? "0 0 8px rgb(6, 182, 212)" : "0 0 8px rgb(139, 92, 246)",
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
    </>
  );
}
