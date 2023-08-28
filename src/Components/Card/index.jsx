import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { PlusSmallIcon } from '@heroicons/react/24/outline'

const Card = ({data}) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductDetailShow(productDetail)
    context.closeCheckoutSide()
  }

  const addProductsToCart = (e, productData) => {
    e.stopPropagation();
    context.setCount(context.count + 1);
    context.openCheckoutSide()
    context.setCartProducts([...context.cartProducts, productData])
    context.closeProductDetail()
  }

  return (
    <div 
    className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() => showProduct(data)}>
        <figure className='relative mb-2 w-full h-4/5'>
            <img className='w-full h-full object-cover rounded-lg' src={data.image} alt="headphones" />
            <span className='absolute m-2 px-3 py-0.5 bottom-0 left-0 bg-slate-500/60 rounded-md text-black text-sm'>
                {data.category}
            </span>
            <div className='absolute m-2 p-1 top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full' onClick={(e) => addProductsToCart(e, data)}>
              <PlusSmallIcon/>
            </div>
            <p className='flex justify-between gap-3'>
                <span className='text-sm truncate font-light'>{data.title}</span>
                <span className='text-md  font-medium'>${data.price}</span>
            </p>
        </figure>
    </div>
  )
}

export default Card