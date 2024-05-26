import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { CiUser, CiSettings, CiLogout } from "react-icons/ci";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function ProfileDropdown() {
  return (
    <div className="w-full h-full">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full outline-none">
          <p className="flex ml-4 items-center w-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="ml-4 text-sm">Alfez Mansuri</span>
          </p>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>a_mansuri@ch.iitr.ac.in</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center justify-center">
              <CiUser className="mr-2" /> My GPT
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center justify-center">
              <MdOutlineDashboardCustomize className="mr-2" /> Customize
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center justify-center">
              <CiSettings className="mr-2" /> Settings
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center justify-center">
              <CiLogout className="mr-2" /> Log out
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ProfileDropdown;
