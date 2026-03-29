"use client"

import { motion } from "framer-motion"

export default function Projects(){

return(

<section className="py-32">

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
className="text-4xl text-center"
>

Projects

</motion.h2>

</section>

)
}