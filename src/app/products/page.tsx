"use client";
import Cards from "@/components/Products/Cards";
import ProductNavbar from "@/components/Products/ProductNavbar";
import Sidbar from "@/components/Products/Sidbar";
import React from "react";
import {  useAppSelector } from "../lib/hooks";

function Page() {
  const show = useAppSelector(state=>state.sidebarAddProduct.isModalOpen)


  return (

    <div className=" bg-slate-100 h-screen flex " > 
    {show && <Sidbar/> }    
      <div className={`flex flex-col  items-center gap-10 p-2 w-full`}>
      <ProductNavbar />
      <Cards/>
      </div>
 
      </div>


  );
}

export default Page;
