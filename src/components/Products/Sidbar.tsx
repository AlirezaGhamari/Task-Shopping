import { useAppDispatch } from "@/app/lib/hooks";
import { ProductSlice } from "@/app/lib/slices/productsData";
import { sidebarAddProductSlice } from "@/app/lib/slices/sidbarAddProduct";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";

function Sidbar() {
  const dispatch = useAppDispatch();
  
  const [data, setData] = useState({
    nameProduct: "",
    description: "",
    Weight: "",
    price: "",
    category: "",
  });

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      className=" bg-white  w-[30%] h-full fixed  right-0 p-10 text-[26px] text-gray-700 flex flex-col  gap-4"
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
        <label htmlFor="name" className="text-[16px] mt-4 font-bold">
          Name of the product
        </label>
        <input
          id="name"
          className="border-2 rounded-md w-full p-1"
          type="text"          value={data.nameProduct}
          onChange={(e) => setData({ ...data, nameProduct: e.target.value })}


        />
        <label htmlFor="category" className="text-[16px] mt-4 font-bold">
          category
        </label>
        <input
          id="category"
          className="border-2 rounded-md w-full p-1"
          type="text"
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
        />
        <label htmlFor="Ingredients" className="text-[16px] mt-4 font-bold">
          Ingredients
        </label>
        <input
          id="Ingredients"
          className="border-2 rounded-md w-full p-1"
          type="text"   
                 value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}

        />
        <div className="flex items-center mt-4 h-8 gap-2 ">
          <input
            id="Suitable"
            className="border-2 rounded-md w-[40px] h-[40px] "
            type="checkbox"
          />
          <label htmlFor="Suitable" className="text-[16px]  font-bold">
            Suitable for vegans
          </label>
        </div>
        <div className="flex mt-4 gap-2">
          <div>
            <label htmlFor="Weight" className="text-[16px] ">
              Weight in grams
            </label>
            <input
              id="Weight"
              className="border-2 rounded-md w-full p-1"
              type="text"
              value={data.Weight}
              onChange={(e) => setData({ ...data, Weight: e.target.value })}
    
            />
          </div>
          <div>
            <label htmlFor="Calories" className="text-[16px] ">
              Calories
            </label>
            <input
              id="Calories"
              className="border-2 rounded-md w-full p-1"
              type="text"
            />
          </div>
        </div>
        <label htmlFor="Price" className="text-[16px] mt-4">
          Price of product
        </label>
        <input
          id="Price"
          className="border-2 rounded-md w-full p-1"
          type="text"
          placeholder="$"
          value={data.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}

        />
      </form>
      <button
      className="bg-gray-700 flex justify-center items-center text-white text-[16px] p-2 rounded-md hover:text-slate-100 hover:bg-gray-600"
        onClick={() =>
          dispatch(
            ProductSlice.actions.add({

              nameProduct:data.nameProduct,
              weight: data.Weight,
              description: data.description,
              price: data.price,
              category: data.category,
            })
          )
        }
      >
        <div>
        <FaPlus />
        <FaHamburger />

        </div>
        Add product to the menu
      </button>
    </div>
  );
}

export default Sidbar;
