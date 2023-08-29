import React from 'react'
import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'

function Myorder() {
  const context = useContext(ShoppingCartContext)
  console.log(context.order?.slice(-1)[0].products);
  return (
    <Layout>
      My Order
      <div className='flex flex-col flex-1'>
          {
            context.order?.slice(-1)[0].products.map(product => {
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