"use client";
import SideBarString from "@/utils/SideBarString";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

function HistoryComponent({ message }) {
  const [showDots, setShowDots] = useState(false);
  const ShowDots = () => {
    setShowDots(true);
  };
  const HideDots = () => {
    setShowDots(false);
  };
  return (
    <div
      onMouseEnter={ShowDots}
      onMouseLeave={HideDots}
      className="py-2 px-2 rounded cursor-pointer hover:bg-gray-200 text-sm flex justify-between items-center"
    >
      <p>{SideBarString(message)}</p>
      {showDots && <BsThreeDots className="text-md hover:text-gray-400" />}
    </div>
  );
}

export default HistoryComponent;
