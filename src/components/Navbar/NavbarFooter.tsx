import Image from 'next/image';
import Link from "next/link";
import React from "react";
import { IoSend } from "react-icons/io5";
import image from "../../../public/images/Profile User Round White Icon Symbol PNG.jpeg"
import { CiMenuKebab } from "react-icons/ci";
function NavbarFooter() {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <Link className="text-gray-600 hover:text-gray-800" href={""}>
        Done for the day?
      </Link>
      <button className="bg-gradient-to-r  from-green-400 to-green-600 rounded-md p-2 hover:text-slate-100 text-white flex items-center gap-1">
        <IoSend />
        Send daily report
      </button>
      <hr/>
      <div className="grid grid-cols-7  h-[70px] w-[230px] mb-3 p-2 items-center gap-2">
        <div className=" col-span-2 rounded-full">
          <Image
            src={image}
            alt="aa"
            width={70}
            height={70}
            className="rounded-full"
          />
        </div>
        <div className="col-span-4">Name </div>
        <div className="text-[26px] col-span-1 cursor-pointer"><CiMenuKebab /></div>
      </div>
    </div>
  );
}

export default NavbarFooter;
