import InputForm from "@/components/Home/InputForm"
import Image from "next/image"
import ChatGPTIcon from "@/public/chatgpt-icon.jpeg";
import Navbar from "@/components/Home/Navbar";

function Page() {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <Navbar/>
      <div className="w-full h-full border border-red-500 flex flex-col justify-center items-center">
      <Image
            className="rounded-full mr-3"
            width={50}
            height={10}
            src={ChatGPTIcon}
          />
        <p className="text-2xl font-medium mt-5">How can I help you today?</p>
      </div>
      <InputForm/>
    </div>
  )
}

export default Page