import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XCircleIcon } from '@heroicons/react/24/outline'
import OrderCard from '../OrderCard'
import './CheckoutSide.css'


const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)


  return (
    <aside 
    className={`${context.isCheckoutSideOpen ? 'flex' : 'hidden'} checkout-side flex-col fixed top-20  bg-white right-5 border border-black rounded-lg `}>
        <div className='flex  p-5 justify-between items-center '>
            <h2 className='font-medium text-xl'>
                My Order
            </h2>
            <XCircleIcon className='flex w-8 h-8 cursor-pointer' onClick={() => context.closeCheckoutSide()}/>
        </div>
        <div className='flex flex-col overflow-y-scroll'>
          {
            context.cartProducts.map(product => {
              return (
                <OrderCard 
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                />
            )})
          }
        </div>
    </aside>
  )
}

export default CheckoutSideMenu;