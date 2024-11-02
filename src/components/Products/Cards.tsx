import React from 'react'
import Card from './Card'
import CardNew from './CardNew'

function Cards() {
  

  return (
    <div className=' w-[90%]  grid grid-cols-4 gap-8 '>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
<CardNew/>
    </div>
  )
}

export default Cards
