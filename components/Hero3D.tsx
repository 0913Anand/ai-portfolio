"use client"

import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"

export default function Hero3D() {

  return (

    <Canvas style={{ height: "500px" }}>

      <ambientLight intensity={0.6} />

      <Float speed={2}>

        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>

      </Float>

      <OrbitControls enableZoom={false} />

    </Canvas>

  )
}