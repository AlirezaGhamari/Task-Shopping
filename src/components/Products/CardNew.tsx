import { useAppDispatch } from "@/app/lib/hooks";
import { sidebarAddProductSlice } from "@/app/lib/slices/sidbarAddProduct";
import React from "react";

function CardNew() {
  const dispatch = useAppDispatch()

  return (
    <div className="h-[300px]   bg-transparent border-solid border-2 rounded-xl font-extrabold text-center items-center flex justify-center cursor-pointer hover:text-slate-500" 
    onClick={()=>dispatch(sidebarAddProductSlice.actions.show())}>
      +
      <br />
      Add new
      <br />
      ptoduct
    </div>
  );
}

export default CardNew;
