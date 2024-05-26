'use client'
import Sidebar from "@/components/Home/Sidebar";
import MessageContext from "@/context/MessageContext";
import {DummyHistory} from "@/DummyHistory";
// import GetUser from "@/utils/GetUser";
import { useEffect, useState } from "react";
// import { redirect } from 'next/navigation'
// import { createClient } from '@/utils/supabase/server'
// async function GetUser() {
//     const supabase = createClient()
  
//     const { data, error } = await supabase.auth.getUser()
//     if (error || !data?.user) {
//       redirect('/login')
//     }
  
//     return data.user;
//   }

export default function RootLayout({ children }) {
  const [history, setHistory] = useState(DummyHistory);
  const [title,setTitle] = useState("")
  const [message, setMessage] = useState([]);
  const [user,setUser] = useState(undefined)
  useEffect(()=>{
    console.log(user);
  },[user])
  return (
    <main className="w-screen h-screen flex overflow-hidden">
      <div className="flex-auto basis-1/4"><Sidebar setMessage={setMessage} setTitle={setTitle} user={user} History={history} /></div>
      <div className="flex-auto basis-3/4">
        <MessageContext.Provider value={{setHistory,history, message, setMessage, title, setTitle, setUser}}>
          {children}
        </MessageContext.Provider>
      </div>
    </main>
  );
}
