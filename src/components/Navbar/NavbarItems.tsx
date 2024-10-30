import React from 'react'
import { MdDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdPerson4 } from "react-icons/md";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
export default function NavbarItems() {
    
  return (
    <div>
      <ul className='flex flex-col gap-4 '>
        <li className='flex items-center gap-2 '> <MdDashboard /> Dashboard</li>
        <li className='flex items-center gap-2'><BiSolidShoppingBagAlt/> Orders</li>
        <li className='flex items-center gap-2'> <MdOutlineProductionQuantityLimits />Products</li>
        <li className='flex items-center gap-2'> <IoLocationSharp />Restaurants</li>
        <li  className='flex items-center gap-2'><MdPerson4 />Drivers</li>
      </ul>
    </div>
  )
}
