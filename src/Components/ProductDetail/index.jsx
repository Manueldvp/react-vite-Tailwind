import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './ProductDetail.css'
import { XCircleIcon } from '@heroicons/react/24/outline'


const ProductDetail = () => {

  const context = useContext(ShoppingCartContext)


  return (
    <aside 
    className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed   bg-white right-0 border border-black rounded-lg`}>
        <div className='flex p-5 justify-between items-center '>
            <h2 className='font-medium text-xl'>
                Detail
            </h2>
            <XCircleIcon className='flex w-8 h-8 cursor-pointer' onClick={() => context.closeProductDetail()}/>
        </div>
        <figure>
          <img className='w-full h-full rounded-lg p-5'  src={context.productDetailShow.image} alt="img" />
        </figure>
        <p className='flex flex-col gap-1 '>
          <span className='font-bold text-2xl p-2'>
            ${context.productDetailShow.price}
          </span>
          <span className='font-semibold p-2'>
            {context.productDetailShow.title}
          </span>
          <span className='font-light text-sm p-2'>
            {context.productDetailShow.description}
          </span>
        </p>
    </aside>
  )
}

export default ProductDetail