"use client";

import React from "react";

import { usePathname } from "next/navigation";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Space({ children }: { children: React.ReactNode }) {
  let cameraPosition = 0.15;
  const pathname = usePathname();

  if (typeof window !== "undefined") {
    cameraPosition = window.innerWidth < 768 ? 0.25 : 0.2;
  }

  return (
    <Canvas
      camera={{ position: [cameraPosition, 0, cameraPosition], far: 100 }}
    >
      <ambientLight intensity={5} />
      {pathname !== "/about" && (
        <>
          <gridHelper
            args={[70, 70]}
            position={[0, 1, 0]}
            material-color="#ffffff"
          />
          <gridHelper
            args={[70, 70]}
            position={[0, -1, 0]}
            material-color="#ffffff"
          />
          <OrbitControls />
        </>
      )}

      {children}
    </Canvas>
  );
}

export default Space;
