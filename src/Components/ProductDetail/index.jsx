import React from 'react'
import './ProductDetail.css'
import { XCircleIcon } from '@heroicons/react/24/outline'

const ProductDetail = () => {
  return (
    <aside className='product-detail flex flex-col fixed  bg-white right-0 border border-black rounded-lg'>
        <div className='flex p-5 justify-between items-center '>
            <h2 className='font-medium text-xl'>
                Detail
            </h2>
            <XCircleIcon className='flex w-8 h-8'/>
        </div>
    </aside>
  )
}

export default ProductDetail