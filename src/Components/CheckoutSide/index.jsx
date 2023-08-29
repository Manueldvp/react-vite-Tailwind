import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XCircleIcon } from '@heroicons/react/24/outline'
import OrderCard from '../OrderCard'
import totalPrice, { qty } from '../../utils'
import './CheckoutSide.css'


const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)

  
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts);
  }

  const increaseQuantity = (id, quantity) => {
    const productCart = context.cartProducts.find(cartItem => cartItem.id === id);
    productCart.quantity += 1;
    context.setCartProducts([...context.cartProducts]); // Causar un renderizado actualizando el estado
  }

  const decreaseQuantity = (id, quantity) => {
    const deletedProduct = context.cartProducts.filter(product => product.id != id);
    const productCart = context.cartProducts.find(cartItem => cartItem.id === id);
    productCart.quantity -= 1;
    context.setCartProducts([...context.cartProducts]); 
    if (productCart.quantity === 0){
      context.setCartProducts(deletedProduct);
    } 
  }

  const handleCheckout = () => {

    const getIdProductCart = context.cartProducts.map((cart) => {
      return cart.id
    })

    const orderToAdd = {
      date: '01.02.23',
      products: context.cartProducts,
      totalProducts: qty(context.cartProducts),
      totalPrice: totalPrice(context.cartProducts),
      id: getIdProductCart,
    }
    context.setOrder([...context.order,  orderToAdd])
    context.setCartProducts([])
    console.log(orderToAdd.id);
  }
 

  return (
    <aside 
    className={`${context.isCheckoutSideOpen ? 'flex' : 'hidden'} checkout-side flex-col fixed top-20  bg-white right-5 border border-black rounded-lg `}>
        <div className='flex  p-5 justify-between items-center '>
            <h2 className='font-medium text-xl'>
                My Order
            </h2>
            <XCircleIcon className='flex w-8 h-8 cursor-pointer' onClick={() => context.closeCheckoutSide()}/>
        </div>
        <div className='flex flex-col flex-1 overflow-y-scroll'>
          {
            context.cartProducts.map(product => {
              return (
                <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                quantity={product.quantity}
                handleDelete={handleDelete}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                />
            )})
          }
        </div>
        <div className='px-2'>
          <p>
            <span>Total</span>
            <span>${totalPrice(context.cartProducts)}</span>
          </p>
          <Link to='my-orders/last'>
              <button onClick={() => handleCheckout()} className='w-full h-10 mb-5 bg-slate-400 rounded-lg'>Checkout</button>
          </Link>
        </div>
    </aside>
  )
}

export default CheckoutSideMenu;