import { useRoutes, BrowserRouter } from 'react-router-dom'
import React from 'react'
import ShoppingCartProvider from '../../Context'
import Home from '../Home'
import CheckoutSideMenu from '../../Components/CheckoutSide'
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
    {  path: '/my-orders/last', element: <MyOrder/> },
    {  path: '/*', element: <NotFound/> },
    {  path: '/sing-in', element: <SingIn/> },
  ])
  return routes;
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
