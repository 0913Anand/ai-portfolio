"use client"

import { motion } from "framer-motion"

export default function AppleHero(){

return(

<section className="h-screen flex flex-col justify-center items-center text-center">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-6xl font-bold"
>

Anand Prakash

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:0.5}}
className="text-gray-400 mt-6 text-xl"
>

Full Stack Developer

</motion.p>

</section>

)

}