import React from 'react'
import Layout from '../../Components/Layout'
import OrderCards from '../../Components/OrdersCard'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'


function Myorders() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order);
  return (
    <Layout>
      <div className='flex w-50 items-center justify-center'>
        <h1>My Orders</h1>
      </div>
      
      {
        
        context.order.map((card, index) => (
          
          <Link key={index} to={`/my-orders/${index}`}>
            <OrderCards
          
              totalPrice={card.totalPrice} 
              totalProducts={card.totalProducts}/>
          </Link>
          )
          
        ) 
        
      }
        
    </Layout>
    
  )
  
}

export default Myorders