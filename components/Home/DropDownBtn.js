"use client"

import * as React from "react"
import { FaChevronDown } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownBtn() {
  const { setTheme } = useTheme()
  const [showStatusBarOne, setShowStatusBarOne] = React.useState(true)
  const [showStatusBarTwo, setShowStatusBarTwo] = React.useState(false)
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="ml-4"><Button variant="ghost">ChatGPT <FaChevronDown className="ml-2"/></Button></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-2">
        <DropdownMenuCheckboxItem
          checked={showStatusBarOne}
          onCheckedChange={setShowStatusBarOne}
        >
          ChatGPT Plus
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBarTwo}
          onCheckedChange={setShowStatusBarTwo}
        >
          ChatGPT
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <div onClick={() => setTheme("dark")} className="w-full py-3 px-5 cursor-pointer hover:bg-gray-100">Dark Mode <FaMoon className="inline ml-2"/></div>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
