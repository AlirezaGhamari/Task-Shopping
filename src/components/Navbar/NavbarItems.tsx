"use client";
import React, { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdPerson4 } from "react-icons/md";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItems() {
  const pathname = usePathname();
  const [active, setActive] = useState("");

  const items = [
    { title: "Dashboard", icon: <MdDashboard />, link: "/dashboard" },
    { title: "Orders", icon: <BiSolidShoppingBagAlt />, link: "/orders" },
    { title: "Products", icon: <MdOutlineProductionQuantityLimits />, link: "/products" },
    { title: "Restaurants", icon: <IoLocationSharp />, link: "/restaurants" },
    { title: "Drivers", icon: <MdPerson4 />, link: "/drivers" },
  ];

  useEffect(() => {
    const defult = pathname;
    setActive(defult);
  }, [pathname]);

  return (
    <div>
      <ul className="">
        {items.map((item, index) => (
          <li
            key={index}
            className={`px-[45px] py-4 hover:bg-slate-100 cursor-pointer ${
              active === item.link ? "bg-slate-100 border-x-4 border-green-500 ml-[-4px]" : ""
            }`}
          >
            <Link href={item.link} className="flex items-center gap-4 text-[20px]">
              {item.icon}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}