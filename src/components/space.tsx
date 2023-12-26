"use client";

import React from "react";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Space({ children }: { children: React.ReactNode }) {
  return (
    <Canvas camera={{ position: [0.15, 0, 0.15], far: 100 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
      <gridHelper args={[100, 100]} position={[0, 1, 0]} /> {/* Upper grid */}
      <gridHelper args={[100, 100]} position={[0, -1, 0]} /> {/* Lower grid */}
      <OrbitControls />
    </Canvas>
  );
}

export default Space;
