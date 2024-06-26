import ChatGPTIcon from "@/public/chatgpt-icon.jpeg";
import SampleMsg from './SampleMsg';
import Image from 'next/image';

function DefaultHome({message, setMessage, setTitle}) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Image
            className="rounded-full mr-3"
            alt='this is default home page'
            width={50}
            height={10}
            src={ChatGPTIcon}
          />
        <p className="text-2xl font-medium mt-5 mb-10">How can I help you today?</p>
        <SampleMsg message={message} setTitle={setTitle} setMessage={setMessage}/>
      </div>
  )
}

export default DefaultHome