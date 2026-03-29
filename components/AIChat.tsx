"use client"

import { useState } from "react"

export default function AIChat(){

const [message,setMessage]=useState("")

return(

<div className="fixed bottom-10 right-10 bg-black p-6 rounded-xl">

<input
placeholder="Ask about my projects..."
value={message}
onChange={e=>setMessage(e.target.value)}
className="text-black p-2"
/>

</div>

)
}