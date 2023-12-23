"use client";

import React, { useRef, useMemo } from "react";

import { useFrame } from "@react-three/fiber";
import { BoxGeometry, EdgesGeometry } from "three";

function Cube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  // Create the geometry for the cube
  const boxGeometry = useMemo(() => new BoxGeometry(0.1, 0.1, 0.1), []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
    }

    if (lineRef.current) {
      lineRef.current.rotation.x += 0.02;
      lineRef.current.rotation.y += 0.02;
    }
  });

  return (
    <>
      <mesh ref={meshRef} geometry={boxGeometry}>
        <meshStandardMaterial color="black" />
      </mesh>
      <lineSegments ref={lineRef} geometry={new EdgesGeometry(boxGeometry)}>
        <lineBasicMaterial attach="material" color="white" />
      </lineSegments>
    </>
  );
}

export default Cube;
