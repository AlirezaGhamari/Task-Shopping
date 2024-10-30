import React from "react";
import NavbarItems from "./NavbarItems";
import NavbarFooter from "./NavbarFooter";
import { IoLocationSharp } from "react-icons/io5";
export default function Navbar() {
  return (
    <div className="w-[15%] h-[100vh] bg-white items-center flex flex-col justify-between   ">
      <div className="flex flex-col gap-8">
        <p className="font-bold p-4 py-6 h-[15%] text-center text-[22px] flex items-center justify-center"> <IoLocationSharp  className="rotate-180 text-green-500 text-[30px]"/>ovoburger</p>
        <NavbarItems />
      </div>
      <NavbarFooter />
    </div>
  );
}
