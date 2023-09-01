import React from 'react'
import { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'



const OrderCards = props => {

    const { totalPrice, totalProducts } = props
  


  return (
  
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg border-solid w-80 p-4">

         <p className='flex justify-between w-full'>
            <div className='flex flex-col' >
              <span>date</span>
              <span>{totalProducts}</span>
            </div>
            <div className='flex items-center'>
              <span className='text-bold'>{totalPrice}</span>
              <ChevronRightIcon className='h-6 w-6'/>
            </div>
        </p>   
     
    </div>
  

  )
}


export default OrderCards