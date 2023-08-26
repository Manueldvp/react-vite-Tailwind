import { useRoutes, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import { cartContextProvider } from '../../Context'

import React from 'react'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../Myorder'
import Myorders from '../Myorders'
import NotFound from '../NotFound'
import SingIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {  path: '/', element: <Home/> },
    {  path: '/my-account', element: <MyAccount/> },
    {  path: '/my-order', element: <MyOrder/> },
    {  path: '/my-orders', element: <Myorders/> },
    {  path: '/*', element: <NotFound/> },
    {  path: '/sing-in', element: <SingIn/> },
  ])
  return routes;
}

const App = () => {
  return (
    <>
      <cartContextProvider>
        <BrowserRouter>
          <AppRoutes/>
          <Navbar/>
        </BrowserRouter>
      </cartContextProvider>  
    </>
  )
}

export default App
