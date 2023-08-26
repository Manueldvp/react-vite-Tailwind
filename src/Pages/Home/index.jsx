import React from 'react'
import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import axios from 'axios'
import apiUrl  from '../../Api/index'


function Home() {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch(`${apiUrl}`)
    .then(res => res.json())
    .then(data => setItems(data));
  }, [])

  return (
    <Layout>
      <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
         {
        items ?.map(item => {
          return <Card key={item.id} data={item}/>
        })
      }
      </div>  
    </Layout>
  )
}

export default Home