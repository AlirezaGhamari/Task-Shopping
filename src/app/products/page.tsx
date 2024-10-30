import Cards from '@/components/Products/Cards'
import ProductNavbar from '@/components/Products/ProductNavbar'
import React from 'react'

function page() {
  return (
    <div className='w-full flex items-center flex-col gap-5'>
      search
      <ProductNavbar/>
      <Cards/>
    </div>
  )
}

export default page
