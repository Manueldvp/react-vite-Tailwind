import React from 'react'
import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { ArrowDownOnSquareStackIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


function Myorder() {
  const context = useContext(ShoppingCartContext)

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1 )
  if (index === 'last') index = context.order?.length -1

  return (
    <Layout>
      <div className='flex w-100  gap-5 mb-5'>
        <Link to='/my-orders'>
         <ArrowDownOnSquareStackIcon className='w-6 h-6'/>
        </Link>
        <h1>My Order</h1>
      </div>
      
      <div className='flex flex-col flex-1'>
          {
            context.order?.[index]?.products.map(product => {
              return (
                <OrderCard 
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                quantity={product.quantity}
                />
            )})
          }
        </div>
    </Layout>
  )
}

export default Myorder