import React from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import ImageGrid from '../../Components/LoadSkeleton'



function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
         return (
          context.filteredItems?.map(item => {
            return <Card key={item.id} data={item}/>
          })
        ) 
      } else {
        return (
          <ImageGrid/>
        )
      }
       
    } 
    
  

  return (
    <Layout>
      <div className='flex w-full  items-center mb-5 justify-evenly'>
        <h1 className='font-semibold'>Products</h1>
        <input type="text" placeholder='Search a...' className='rounded-lg border items-center shadow-#29 focus:outline-slate-500 h-15 p-2 w-100' onChange={(e) => context.setSearchByTittle(e.target.value)} />
        
      </div>
      
      <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div> 
      <ProductDetail/> 
    </Layout>
  )
}

export default Home