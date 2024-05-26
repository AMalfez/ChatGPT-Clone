"use client";
import SideBarString from "@/utils/SideBarString";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdDeleteOutline } from "react-icons/md";

function HistoryComponent({ message }) {
  const [showDots, setShowDots] = useState(false);
  const [showData, setShowData] = useState(true)
  const [hover, setHover] = useState(false);
  const [dotsHover, setDotsHover] = useState(false);
  const ShowDots = () => {
    setShowDots(true);
    setHover(true)
  };
  const HideDots = () => {
    setShowDots(false);
    setHover(false);
  };
  const handleSelect=()=>{
    setShowData(false)
  }
  // const handleOpen=(open)=>{
  //   if(open){
  //     setShowDots(true)
  //     setHover(true)
  //     setDotsHover(true)
  //   }else{
  //     setShowDots(false)
  //     setHover(false)
  //     setDotsHover(false)
  //   }
  // }
  return (
    <div
      onMouseEnter={ShowDots}
      onMouseLeave={HideDots}
      className={`py-2 px-2 ${!showData&&"hidden"} rounded cursor-pointer ${hover&&"bg-gray-200"} text-sm flex justify-between items-center`}
    >
      <p>{SideBarString(message)}</p>
      {/* {showDots && ( */}
      <div>
        {/* <DropdownMenu onOpenChange={(open)=>handleOpen(open)}> */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <BsThreeDots className={`outline-none ${dotsHover&&"text-gray-400"} text-md hover:text-gray-400`} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={handleSelect}><div className="text-red-600 flex items-center justify-center"><MdDeleteOutline className="mr-2" /> Remove</div></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* )} */}
    </div>
  );
}

export default HistoryComponent;
