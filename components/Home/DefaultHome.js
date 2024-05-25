import React from 'react'
import ChatGPTIcon from "@/public/chatgpt-icon.jpeg";
import SampleMsg from './SampleMsg';
import Image from 'next/image';

function DefaultHome() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
            className="rounded-full mr-3"
            width={50}
            height={10}
            src={ChatGPTIcon}
          />
        <p className="text-2xl font-medium mt-5 mb-15">How can I help you today?</p>
        <SampleMsg/>
      </div>
  )
}

export default DefaultHome