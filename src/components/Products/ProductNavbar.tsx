"use client";
import React, { useEffect, useState } from "react";
import { PiHamburgerFill } from "react-icons/pi";
import { TbSoupFilled } from "react-icons/tb";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiDonerKebab } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";
import { useAppDispatch } from "@/app/lib/hooks";
import { ProductSlice } from "@/app/lib/slices/productsData";

export default function ProductNavbar() {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<string | null>(null);
  const items = [
    {
      title: "Main courses",
      icon: <PiHamburgerFill className="text-[24px]" />,
      onclick: () => {
        dispatch(ProductSlice.actions.courses());
        setActive("Main courses");
      },
    },
    { title: "Side dishes", icon: <TbSoupFilled className="text-[24px]" /> },
    {
      title: "Drinks",
      icon: <RiDrinks2Fill className="text-[24px]" />,
      onclick: () => {
        dispatch(ProductSlice.actions.drinks());
        setActive("Drinks");
      },
    },
    { title: "Other", icon: <GiDonerKebab className="text-[24px]" /> , onclick: () => {
      dispatch(ProductSlice.actions.other());
      setActive("Other");
    }, },
  ];

  useEffect(() => {
    dispatch(ProductSlice.actions.courses());
    setActive("Main courses");
  }, []);
  return (
    <>
      <div className="bg-white w-[95%] h-[10%]  rounded-xl flex justify-between items-center px-14 ">
        <ul className="flex gap-20">
          {items.map((i, index) => (
            <li
              onClick={i.onclick}
              key={index}
              className={`flex justify-center items-center gap-2 cursor-pointer hover:text-slate-700 ${
                active == i.title && "border-b-4 border-solid border-black py-7"
              }`}
            >
              {i.icon}
              {i.title}
            </li>
          ))}
        </ul>
        <div>
          <CiMenuKebab className="text-[24px] cursor-pointer" />
        </div>
      </div>
    </>
  );
}
