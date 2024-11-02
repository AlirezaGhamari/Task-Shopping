"use client";
import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdPerson4 } from "react-icons/md";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import Link from "next/link";
export default function NavbarItems() {
  
  const [items] = useState([
    { title: "Dashboard", icon: <MdDashboard />, link: "/dashboard" },
    { title: "Orders", icon: <BiSolidShoppingBagAlt />, link: "/orders" },
    { title: "Products", icon: <MdOutlineProductionQuantityLimits />, link: "/products" ,},
    { title: "Restaurants", icon: <IoLocationSharp />, link: "/restaurants" },
    { title: "Drivers", icon: <MdPerson4 />, link: "/drivers" },
  ]);
  return (
    <div>
      <ul className="flex flex-col  ">
        {items.map((item, index) => (
          <li className="px-[49px] py-4 hover:bg-slate-100 cursor-pointer " key={index}>
            <Link className="flex items-center gap-2 text-[20px]" href={item.link}>
              {item.icon}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
