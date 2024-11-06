import React from 'react'
import Navbar from '@/components/Navbar/Navbar'

function layout({children}:{children:React.ReactNode}) {

  return (
    <div className=' w-full h-screen'>
      {children}
    </div>
  )
}

export default layout