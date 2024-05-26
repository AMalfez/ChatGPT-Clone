import "@/css/Scrollbar.css";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import ChatGPTIcon from "@/public/chatgpt-icon.jpeg";
import HistoryComponent from "./HistoryComponent";
import { SevenDayData, ThrityDayData } from "@/utils/DateCompare";
import ProfileDropdown from "./ProfileDropdown";

function Sidebar({History, setHistory}) {
  const SevenDayDatas = SevenDayData(History)
  const ThirtyDayDatas = ThrityDayData(History)
  return (
    <div
      className="bg-gray-50 overflow-x-hidden h-screen flex flex-col items-center pl-2 pr-2 pb-2"
    >
      <div className="flex justify-between py-3 w-full items-center bg-gray-50 h-14">
        <p className="flex ml-4 mr-4">
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

      <div className="w-full overflow-y-scroll h-full pr-2">
        <div className="ml-3 mt-5">
          <p className="py-2 px-2 rounded text-xs text-gray-400 font-medium">Previous 7 Days</p>
          {SevenDayDatas.map(h=> h!==undefined && (
            <HistoryComponent key={h.message} message={h.message}/>
          ))}
          
        </div>
        <div className="ml-5 mt-5">
          <p className="py-2 px-2 rounded text-xs text-gray-400 font-medium">Previous 30 Days</p>
          {ThirtyDayDatas.map(h=> h!==undefined && (
            <HistoryComponent key={h.message} message={h.message}/>
          ))}
          
        </div>
      
      </div>

      <div className="py-2 flex justify-between w-full items-center rounded hover:bg-gray-300 h-14 ml-4 mr-4 z-50">
        <ProfileDropdown/>
      </div>
    </div>
  );
}

export default Sidebar;
