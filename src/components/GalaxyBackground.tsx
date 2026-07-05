"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  baseX: number;
  baseY: number;
  depth: number; // for parallax
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  color: string;
}

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let meteors: Meteor[] = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Color choices: futuristic purple/cyan
    const colors = [
      "rgba(167, 139, 250, ", // purple
      "rgba(6, 182, 212, ",  // cyan
      "rgba(59, 130, 246, ",  // blue
      "rgba(255, 255, 255, ", // white
    ];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 8000), 180);
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 0.5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius,
          color,
          alpha: Math.random() * 0.6 + 0.2,
          baseX: x,
          baseY: y,
          depth: Math.random() * 1.5 + 0.5, // 0.5 to 2.0 depth scale
        });
      }
    };

    // Initialize meteors
    const spawnMeteor = () => {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.1; // roughly 45 degrees
      const meteorColors = ["#8B5CF6", "#06B6D4", "#ffffff"];
      meteors.push({
        x: Math.random() * width * 1.2 - width * 0.2,
        y: -50,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 6,
        angle,
        alpha: 1.0,
        color: meteorColors[Math.floor(Math.random() * meteorColors.length)],
      });
    };

    initParticles();

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    // Mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Dark Futuristic Gradient Background
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, "#080614"); // very dark purple-blue core
      bgGrad.addColorStop(0.5, "#030208");
      bgGrad.addColorStop(1, "#000000"); // pitch black at edges
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse parallax interpolation
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 2. Cursor Glow Overlay (Large ambient light behind particles)
      if (mouse.x > 0 && mouse.y > 0) {
        const glowGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          50,
          mouse.x,
          mouse.y,
          width * 0.4
        );
        glowGrad.addColorStop(0, "rgba(139, 92, 246, 0.08)"); // purple aura
        glowGrad.addColorStop(0.5, "rgba(6, 182, 212, 0.04)"); // cyan aura
        glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = glowGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Draw & Update Stars/Particles (Galaxy + Neural Network)
      particles.forEach((p) => {
        // Move particle based on velocity
        p.x += p.vx;
        p.y += p.vy;

        // Apply mouse parallax shift based on depth
        // Further depth = more movement (simulating 3D foreground) or less movement (simulating background)
        const parallaxX = (mouse.x - width / 2) * 0.03 * p.depth;
        const parallaxY = (mouse.y - height / 2) * 0.03 * p.depth;
        let finalX = p.x + parallaxX;
        let finalY = p.y + parallaxY;

        // Wrap boundaries
        if (finalX < 0) {
          p.x += width;
          finalX += width;
        } else if (finalX > width) {
          p.x -= width;
          finalX -= width;
        }

        if (finalY < 0) {
          p.y += height;
          finalY += height;
        } else if (finalY > height) {
          p.y -= height;
          finalY -= height;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(finalX, finalY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = p.radius > 1.5 ? 8 : 0;
        ctx.shadowColor = p.radius > 1.5 ? "#06B6D4" : "transparent";
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      });

      // 4. Draw Lines between close particles (Neural Network connections)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        const parallaxX1 = (mouse.x - width / 2) * 0.03 * p1.depth;
        const parallaxY1 = (mouse.y - height / 2) * 0.03 * p1.depth;
        const x1 = p1.x + parallaxX1;
        const y1 = p1.y + parallaxY1;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const parallaxX2 = (mouse.x - width / 2) * 0.03 * p2.depth;
          const parallaxY2 = (mouse.y - height / 2) * 0.03 * p2.depth;
          const x2 = p2.x + parallaxX2;
          const y2 = p2.y + parallaxY2;

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect if distance is short
          const maxDist = 120;
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            // Create a gradient between p1 and p2 color to make it look premium
            const lineGrad = ctx.createLinearGradient(x1, y1, x2, y2);
            lineGrad.addColorStop(0, `${p1.color}${lineAlpha})`);
            lineGrad.addColorStop(1, `${p2.color}${lineAlpha})`);
            ctx.strokeStyle = lineGrad;
            ctx.lineWidth = 0.5 + (1 - dist / maxDist) * 0.5;
            ctx.stroke();
          }
        }
      }

      // 5. Draw & Update Meteors (Shooting Stars)
      if (Math.random() < 0.003) {
        spawnMeteor();
      }

      meteors = meteors.filter((m) => {
        // Update meteor
        m.x += m.speed * Math.cos(m.angle);
        m.y += m.speed * Math.sin(m.angle);
        m.alpha -= 0.015;

        if (m.alpha <= 0 || m.x < -100 || m.x > width + 100 || m.y > height + 100) {
          return false; // remove
        }

        // Draw meteor streak
        ctx.beginPath();
        const startX = m.x - m.length * Math.cos(m.angle);
        const startY = m.y - m.length * Math.sin(m.angle);

        const meteorGrad = ctx.createLinearGradient(startX, startY, m.x, m.y);
        meteorGrad.addColorStop(0, "rgba(0, 0, 0, 0)");
        meteorGrad.addColorStop(0.5, `${m.color}22`);
        meteorGrad.addColorStop(1, m.color);

        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 1.5;
        ctx.moveTo(startX, startY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Draw glowing meteor head
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `#ffffff`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = m.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        return true;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-20 pointer-events-none" />;
}
