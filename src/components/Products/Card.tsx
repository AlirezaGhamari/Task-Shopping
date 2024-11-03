import React from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

interface CardProps {
  nameProduct?: string;
  images?: string | undefined;
  weight?: number;
  description?: string;
  price?: number;
  category?:string
}

function Card({
  nameProduct,
  images,
  weight,
  description,
  price,
  category
}: CardProps): JSX.Element {
  return (
    <div className=" bg-white  rounded-xl flex flex-col justify-center items-center   gap-4 p-4">
      <img
        className="mt-[-50px] "
        src={images}
        alt={`Product ${nameProduct}`}
        width={`${category=="drinks"?70:150}`}
        height={`${category=="drinks"?70:150}`}
      />
      <div className="flex flex-col gap-1 justify-center items-center">
      <p className="text-[22px] font-extrabold"> {nameProduct}</p>

<p className="text-slate-600"> {weight}</p>
<p className="text-slate-600 text-center h-10">{description}</p>

      </div>

      <div className="flex justify-between w-full items-center ">
        <p className="text-2xl">{price}</p>
        <div className="flex items-center gap-1  ">
          <MdOutlineVisibility className="border-2 w-10 h-10 p-2 rounded-md " />
          <IoMdSettings className="border-2 w-10 h-10 p-2 rounded-md " />
        </div>
      </div>
    </div>
  );
}

export default Card;
