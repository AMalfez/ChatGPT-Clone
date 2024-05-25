import "@/css/Scrollbar.css";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import ChatGPTIcon from "@/public/chatgpt-icon.jpeg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Sidebar() {
  return (
    <div
      className="overflow-y-scroll overflow-x-hidden h-screen flex flex-col items-center relative"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="flex justify-between w-full items-center h-14">
        <p className="flex ml-4">
          <Image
            className="rounded-full mr-3"
            width={25}
            height={10}
            src={ChatGPTIcon}
          />
          ChatGPT
        </p>
        <div className="cursor-pointer">
          <FaEdit />
        </div>
      </div>
      <div className="flex justify-between w-full rounded items-center h-14 absolute bottom-0 mb-3 ml-4 z-50 cursor-pointer hover:bg-gray-300">
        <p className="flex ml-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="ml-4 text-sm">Alfez Mansuri</span>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
