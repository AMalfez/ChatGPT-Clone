"use client";
import InputForm from "@/components/Home/InputForm";
import Navbar from "@/components/Home/Navbar";
import DefaultHome from "@/components/Home/DefaultHome";
import Question from "@/components/Home/Question";
import Answer from "@/components/Home/Answer";
import "@/css/Scrollbar.css";
import { useContext, useEffect } from "react";
import MessageContext from "@/context/MessageContext";
function Page() {
  const { setHistory, history, message, setMessage, title, setTitle } =
    useContext(MessageContext);

  useEffect(() => {
    let h = history;
    const date = new Date();
    const date_format =
      date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      "00";
    if (title === "") {
      if (message.length === 1) {
        h = [
          ...history,
          {
            date: "" + date_format,
            title: message[0].question,
            message: [...message],
          },
        ];
      } else if (message.length > 1) {
        h = history.map((hs) => {
          if (hs.title === message[0].question)
            hs = {
              ...hs,
              message: [
                ...hs.message,
                {
                  question: message[message.length - 1].question,
                  answer: message[message.length - 1].answer,
                },
              ],
            };
          return hs;
        });
      }
    } else {
      h = history.map((hs) => {
        if (hs.title === title && message.length>hs.message.length)
          hs = {
            ...hs,
            message: [
              ...hs.message,
              {
                question: message[message.length - 1].question,
                answer: message[message.length - 1].answer,
              },
            ],
          };
        return hs;
      });
    }
    // console.log(h);
    setHistory(h);
  }, [message]);

  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <Navbar />
      <div className="w-full overflow-y-scroll h-full flex flex-col items-center">
        {message.length === 0 && (
          <DefaultHome message={message} setMessage={setMessage} />
        )}
        {message.length !== 0 &&
          message.map((msg) => (
            <div key={msg.question} className="mb-10 w-3/4">
              <Question question={msg.question} />
              <Answer answer={msg.answer} />
            </div>
          ))}
      </div>
      <InputForm message={message} setMessage={setMessage} setTitle={setTitle} />
    </div>
  );
}

export default Page;
