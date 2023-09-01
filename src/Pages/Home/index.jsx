import React from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'



function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.searchByTittle?.length > 0) {
      if (context.filteredItems?.length > 0) {
         return (
          context.filteredItems?.map(item => {
            return <Card key={item.id} data={item}/>
          })
        ) 
      } else {
        return (
          <div>No matches found</div>
        )
      }
         
    } else {
      return (
          context.items?.map(item => {
            return <Card key={item.id} data={item}/>
          })
       )
    }
  }

  return (
    <Layout>
      <div className='flex w-50 items-center justify-center'>
        <h1>Products</h1>
      </div>
      <div className='items-center'>
        <input type="text" placeholder='Search a...' className='rounded-lg border items-center mb-5 border-black focus:outline-slate-500 h-15 p-2 w-100' onChange={(e) => context.setSearchByTittle(e.target.value)} />
      </div>
      <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div> 
      <ProductDetail/> 
    </Layout>
  )
}

export default Home