import React from "react";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <div className="w-[15%] h-[100vh] bg-white items-center flex flex-col   p-2 ">
      <div className="font-bold p-4 h-[15%]">ovoburger</div>
      <div>
        <NavbarItems />
      </div>
    </div>
  );
}
