"use client"
import React, {  } from 'react';
import { PiHamburgerFill } from "react-icons/pi";
import { TbSoupFilled } from "react-icons/tb";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiDonerKebab } from "react-icons/gi";
import { CiMenuKebab } from "react-icons/ci";

export default function ProductNavbar() {
  
  const items = [
    { title: "Main courses", icon: <PiHamburgerFill className='text-[24px]' /> },
    { title: "Side dishes", icon: <TbSoupFilled className='text-[24px]' /> },
    { title: "Drinks", icon: <RiDrinks2Fill className='text-[24px]' /> },
    { title: "Other", icon: <GiDonerKebab className='text-[24px]' /> }
  ];

  return (
    <>
    
      <div className='bg-white w-[90%] h-[10%] rounded-xl flex justify-between items-center px-14'>
        <ul className='flex gap-10'>
          {items.map((i, index) => (
            <li 
              key={index} 
              className='flex justify-center items-center gap-2 cursor-pointer hover:text-slate-700'
            >
              {i.icon}{i.title}
            </li>
          ))}
        </ul>
        <div >
          <CiMenuKebab className='text-[24px] cursor-pointer' />
        </div>
      </div>
     
    </>
  );
}