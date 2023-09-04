import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { PlusSmallIcon } from '@heroicons/react/24/outline'
import {CheckCircleIcon} from '@heroicons/react/24/outline'

const Card = ({data}) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {

    context.openProductDetail()
    context.setProductDetailShow(productDetail)
    context.closeCheckoutSide()
  }

  

  const addProductsToCart = (e, productData) => {
    e.stopPropagation();
    productData.quantity = 1;
    context.openCheckoutSide()
    context.setCartProducts([...context.cartProducts, productData])
    context.closeProductDetail()
  }

const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
   
    if (isInCart) {
     
      return (
        <CheckCircleIcon className='text-white absolute m-4 p-1 top-0 right-0 flex           justify-center items-center bg-black/20 w-6 h-6 rounded-full' /> 
       )
    }
    else{
      return (
        <PlusSmallIcon className='text-white absolute m-4 p-1 top-0 right-0 flex       justify-center items-center bg-black/20 w-6 h-6 rounded-full'    onClick={(e) => addProductsToCart(e, data)}/>
     )
    }
     
    
}

  return (
    <div 
    className='bg-white cursor-pointer w-56 h-60 ' onClick={() => showProduct(data)}>
        <figure className='relative mb-2 w-full h-4/5 rounded-xl shadow-xl p-2'>
            <img className='h-full w-max object-cover rounded-lg' src={data.image} alt="headphones" />
            <span className='absolute m-4 shadow-3xl px-3 py-0.5 bottom-0 left-0 bg-white/40 rounded-md text-black/80 text-sm font-semibold'>
                {data.category}
            </span>
            {renderIcon(data.id)}
            <p className='flex justify-between gap-3 mt-3'>
                <span className='text-sm truncate font-light'>{data.title}</span>
                <span className='text-md  font-medium'>${data.price}</span>
            </p>
        </figure>
    </div>
  )
}

export default Card