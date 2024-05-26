'use client'
import Sidebar from "@/components/Home/Sidebar";
import MessageContext from "@/context/MessageContext";
import {DummyHistory} from "@/DummyHistory";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [history, setHistory] = useState(DummyHistory);
  const [title,setTitle] = useState("")
  const [message, setMessage] = useState([]);
  return (
    <main className="w-screen h-screen flex overflow-hidden">
      <div className="flex-auto basis-1/4"><Sidebar setMessage={setMessage} setTitle={setTitle} History={history} /></div>
      <div className="flex-auto basis-3/4">
        <MessageContext.Provider value={{setHistory,history, message, setMessage, title, setTitle}}>
          {children}
        </MessageContext.Provider>
      </div>
    </main>
  );
}
