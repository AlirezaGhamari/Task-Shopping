"use client"
import Cards from '@/components/Products/Cards'
import ProductNavbar from '@/components/Products/ProductNavbar'
import Sidbar from '@/components/Products/Sidbar'
import React from 'react'
import { useAppSelector } from '../lib/hooks'

function Page() {
  const show = useAppSelector((state) => state.sidebarAddProduct.isModalOpen);

  return (
    <div className='w-full flex items-center flex-col gap-5'>
      {show && (
        <Sidbar/>
      )}
      <ProductNavbar />
      <Cards />
    </div>
  )
}

export default Page
