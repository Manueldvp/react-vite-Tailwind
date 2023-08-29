import React from 'react'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'


const OrderCards = props => {

    const { totalPrice, totalProducts } = props
  


  return (
  
    <div className="flex items-center mb-3 border-b-2 border-b-[#e5d8ff] border-solid w-full">

         <p>
            <span>date</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>   
     
    </div>
  

  )
}


export default OrderCards