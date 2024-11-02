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
      className=" bg-white  w-[30%] h-full fixed  right-0 p-10 text-[26px] text-gray-500 flex flex-col gap-4"
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
      {/* line tow */}
      <div>
        <p className="text-[16px]">Name of the product</p>
        <input className="border-2 rounded-md w-full" type="text" />
      </div>
    </div>
  );
}

export default Sidbar;
