import React from 'react'
import { useState } from 'react'
import { ChevronRightIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'



const OrderCards = props => {

    const { date,  totalPrice, totalProducts } = props
  


  return (
  
    <div className="flex hover:bg-slate-100 justify-between items-center mb-3 mt-4 shadow-#29 rounded-lg border-solid w-80 p-4">

         <div className='flex justify-between w-full'>
            <div className='flex flex-col' >
              <span className='font-md italic'>{date}</span>
              <div className='flex mt-2 shadow-#29 rounded-lg hover:bg-white p-2 gap-2 items-center'>
                <ShoppingBagIcon className='h-5 w-5 text-black/50 hover:text-black'/>
                <span className='font-semibold'>{totalProducts}</span>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold hover:text-black/80 '>{totalPrice}</span>
              <ChevronRightIcon className='h-5 w-5 hover:text-black/80'/>
            </div>
        </div>   
     
    </div>
  

  )
}


export default OrderCards