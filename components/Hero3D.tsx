"use client"

import { Canvas } from "@react-three/fiber"
import { Float } from "@react-three/drei"

export default function Hero3D(){

return(

<Canvas style={{height:"500px"}}>

<ambientLight intensity={0.5} />

<Float>

<mesh>

<sphereGeometry args={[2,32,32]} />

<meshStandardMaterial color="#6366f1"/>

</mesh>

</Float>

</Canvas>

)

}