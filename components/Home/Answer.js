import ChatGPTIcon from "@/public/chatgpt-icon.jpeg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Answer({answer}) {
  return (
    <div className="flex w-full py-3 px-3">
      <div className="w-1/12 flex justify-center">
      <Avatar>
          <AvatarImage src={ChatGPTIcon} className="w-10" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-11/12 pl-4">
        <p className='font-medium text-sm'>ChatGPT</p>
        <p className="text-sm">{answer===undefined?"":answer}</p>
      </div>
    </div>
  )
}

export default Answer