"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import * as THREE from "three";

function MorphingMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    
    // Rotate slowly
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.003;

    // Follow mouse position slightly
    const targetX = mouse.current.x * 0.4;
    const targetY = mouse.current.y * 0.4;
    
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    
    // Change distortion on interaction
    const material = meshRef.current.material as THREE.MeshStandardMaterial & { distort?: number; speed?: number };
    if (material) {
      material.distort = THREE.MathUtils.lerp(
        material.distort || 0, 
        clicked ? 0.6 : hovered ? 0.45 : 0.35, 
        0.05
      );
      material.speed = THREE.MathUtils.lerp(
        material.speed || 0, 
        clicked ? 4.0 : hovered ? 2.5 : 1.5, 
        0.05
      );
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.2}>
      <Sphere
        ref={meshRef}
        args={[1.3, 64, 64]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <MeshDistortMaterial
          color={clicked ? "#06B6D4" : hovered ? "#3B82F6" : "#8B5CF6"}
          roughness={0.1}
          metalness={0.9}
          distort={0.35}
          speed={1.5}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 180;
  
  const [positions] = useState(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 8;
    }
    return arr;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.015;
    pointsRef.current.rotation.x = time * 0.005;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#a78bfa"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ThreeScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <div className="w-full h-full flex items-center justify-center text-zinc-500">Loading scene...</div>;

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.0], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#06B6D4" />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <MorphingMesh />
        <Particles />
      </Canvas>
    </div>
  );
}
