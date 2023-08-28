import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const OrderCard = props => {
    

    const { id, title, image, price } = props
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(price);

    const handleOnChange = (event) => {
    setQuantity(event.target.value);
    setTotal(price * event.target.value);
    
}

  return (
    <div className='flex justify-between items-center rounded-lg mb-4'>
        <div className='flex items-center gap-5'>
            <figure className='w-20 h-20 p-4 '>
                <img className='rounded-lg  object-cover' src={image} alt={title} />
            </figure>

            <p className='text-md w-24 truncate font-light'>{title}</p>
        </div>

        <div className='flex items-center justify-items-center'> 
         <input className='w-10 bg-white' type="number" name='quantity' value={quantity}
                onChange={(e) => handleOnChange(e) }/>
        </div>

        <div className='flex gap-2 items-center px-4'>
            
            <p className='text-lg w-16 font-bold'>${total}</p>
            <XMarkIcon className='w-5 h-5 cursor-pointer'/>
        </div>

    </div>
  )
}

export default OrderCard