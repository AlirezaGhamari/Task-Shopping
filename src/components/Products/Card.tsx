import React from 'react';


interface CardProps {
  nameProduct?: string;
  images?: string | undefined;
  weight?: number;
  description?: string;
  price?: number;
}

function Card({ nameProduct, images, weight, description, price, }: CardProps): JSX.Element {

  return (
    <div className='h-[300px] bg-white rounded-xl flex flex-col justify-center items-center'>
            <img  className=' h-[150px] w-[150px]   bg-none' src={images} alt={`Product ${nameProduct}`} />

      <p className='text-[22px] font-extrabold'> {nameProduct}</p>

      <p className='text-slate-600'> {weight}</p>
      <p className='text-slate-600'>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Card
