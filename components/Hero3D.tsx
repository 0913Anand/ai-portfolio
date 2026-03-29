"use client"

import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"

export default function Hero3D(){

return(

<section className="min-h-screen grid md:grid-cols-2 items-center">

<div>

<h1 className="text-6xl font-bold">
Anand Prakash
</h1>

<p className="text-gray-400 mt-4">
Full Stack Developer
</p>

</div>

<Canvas>

ambientLight intensity={0.6} />

<Float speed={2}>

mesh>

sphereGeometry args={[2,32,32]} />

meshStandardMaterial color="#3b82f6" />

</mesh>

</Float>

<OrbitControls enableZoom={false} />

</Canvas>

</section>

)
}