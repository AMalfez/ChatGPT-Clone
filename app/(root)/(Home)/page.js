"use client";
import InputForm from "@/components/Home/InputForm";
import Navbar from "@/components/Home/Navbar";
import DefaultHome from "@/components/Home/DefaultHome";
import Question from "@/components/Home/Question";
import Answer from "@/components/Home/Answer";
import "@/css/Scrollbar.css";
import { useState } from "react";
function Page() {
  const [message, setMessage] = useState([]);
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <Navbar />
      <div className="w-full overflow-y-scroll h-full flex flex-col items-center">
        {message.length === 0 && <DefaultHome message={message} setMessage={setMessage} />}
        {message.lenth !== 0 &&
          message.map((msg) => (
            <div key={msg.question} className="mb-10 w-3/4">
              <Question question={msg.question} />
              <Answer answer={msg.answer} />
            </div>
          ))}
      </div>
      <InputForm message={message} setMessage={setMessage} />
    </div>
  );
}

export default Page;
