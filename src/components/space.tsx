"use client";

import React from "react";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Space({ children }: { children: React.ReactNode }) {
  let cameraPosition = 0.15;

  if (typeof window !== "undefined") {
    cameraPosition = window.screen.width < 768 ? 0.25 : 0.15;
  }

  return (
    <Canvas
      camera={{ position: [cameraPosition, 0, cameraPosition], far: 100 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
      <gridHelper args={[100, 100]} position={[0, 1, 0]} />
      <gridHelper args={[100, 100]} position={[0, -1, 0]} />
      <OrbitControls />
    </Canvas>
  );
}

export default Space;
