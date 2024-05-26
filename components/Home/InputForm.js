'use client'

import { useState } from "react"

function InputForm({message, setMessage}) {
  const [value,setValue] = useState("")
  const handleInputChange=(e)=>{
    if(message.length!==0 && message[message.length-1].answer===undefined) return;
    setValue(e.target.value)
  }
  const handleSubmit=(e)=>{
    if(message.length!==0 && message[message.length-1].answer===undefined) return;
    e.preventDefault();
    let m = [...message, {question:value, answer:"This is dummy answer to above query"}]
    setMessage(m);
    setValue("")
  }
  return (
    <div className="w-3/4">
      <form onSubmit={e=>handleSubmit(e)}><input className="py-3 px-4 border rounded-lg outline-0 w-full" value={value} onChange={(e)=>handleInputChange(e)} type="text" placeholder="Message ChatGPT"/></form>
      <p className="text-gray-400 text-center text-xs py-2">ChatGPT can make mistakes. Check important info.</p>
    </div>
  )
}

export default InputForm