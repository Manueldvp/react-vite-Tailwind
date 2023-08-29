import React from 'react'
import Layout from '../../Components/Layout'
import OrderCards from '../../Components/OrdersCard'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ArrowDownOnSquareStackIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'


function Myorders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex w-50 items-center justify-center relative gap-4'>
        <Link to='my-orders' className='absolute left-0'>
         <ArrowDownOnSquareStackIcon/>
        </Link>
        <h1>My Orders</h1>
      </div>
      
      {
        context.order.map((card, index)=> {
          <Link key={index} to={`/my-order/${order.id}`}>
            <OrderCards
          
              totalPrice={card.totalPrice} 
              totalProducts={card.totalProducts}/>
          </Link>
        }) 
      }
     
    </Layout>
  )
}

export default Myorders