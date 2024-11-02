import { useAppDispatch } from "@/app/lib/hooks";
import { sidebarAddProductSlice } from "@/app/lib/slices/sidbarAddProduct";
import React from "react";
import { IoClose } from "react-icons/io5";

function Sidbar() {
  const dispatch = useAppDispatch();

  return (
    
    <div
      id="default-modal"
      tabIndex={-1}
      className=" bg-white  w-[30%] h-full fixed  right-0 p-10 text-[26px] text-gray-500 flex flex-col  gap-4"
    >
      {/* line one */}
      <div className="flex justify-between">
        <div>Add new product</div>

        <div
          onClick={() => dispatch(sidebarAddProductSlice.actions.show())}
          className="text-[30px]"
        >
          <IoClose className="cursor-pointer" />
        </div>
      </div>
      {/* line two */}
      <form className="">
      <label htmlFor="name" className="text-[16px] mt-4">Name of the product</label>
      <input id="name" className="border-2 rounded-md w-full p-1" type="text" />
      <label htmlFor="Ingredients" className="text-[16px] mt-4">Ingredients</label>
      <input id="Ingredients" className="border-2 rounded-md w-full p-1" type="text" />
      <div className="grid grid-cols-5 mt-4 h-8 ">
      <input id="Suitable" className="border-2 rounded-md w-full col-span-1" type="checkbox" />
      <label htmlFor="Suitable" className="text-[16px] col-span-4">Suitable for vegans</label>
      </div >
      <div className="flex mt-4 gap-2">
        <div>
        <label htmlFor="Weight" className="text-[16px] ">Weight in grams</label>
        <input id="Weight" className="border-2 rounded-md w-full p-1" type="text" />
        </div>
        <div>
        <label htmlFor="Calories" className="text-[16px] ">Calories</label>
        <input id="Calories" className="border-2 rounded-md w-full p-1" type="text" />
        </div>
      </div>
      <label htmlFor="Price" className="text-[16px] mt-4">Price of product</label>
      <input id="Price" className="border-2 rounded-md w-full p-1" type="text" placeholder="$"/>

  
      </form>
  
    </div>
    
  );
}

export default Sidbar;
//"category": "drinks",
//"nameProduct": "fanta",
//"description": "Red bun,beet paty,corn",
//"price": "$8,99",
//"weight": "100g",
