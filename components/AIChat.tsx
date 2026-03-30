"use client"

import { useState } from "react"

export default function AIChat(){

const [message,setMessage]=useState("")
const [reply,setReply]=useState("")

async function send(){

const res=await fetch("/api/chat",{
method:"POST",
body:JSON.stringify({message})
})

const data=await res.json()
setReply(data.reply)

}

return(

<div className="fixed bottom-10 right-10 w-80 bg-black border p-4 rounded-xl">

<h3 className="font-bold mb-2">
AI Assistant
</h3>

<input
className="border p-2 w-full text-black"
placeholder="Ask about Anand..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button
onClick={send}
className="bg-white text-black px-4 py-2 mt-2"
>

Ask

</button>

<p className="mt-3 text-sm">
{reply}
</p>

</div>

)

}