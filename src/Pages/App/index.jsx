import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import React from 'react'
import { useContext } from 'react'
import ShoppingCartProvider from '../../Context'
import {initializeLocalStorage, ShoppingCartContext} from '../../Context'
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
  const context = useContext(ShoppingCartContext)
  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  // Has an account
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    {  path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    {  path: 'Electronics', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    {  path: 'Jewelery', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    {  path: 'Mens-Clothing', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    {  path: 'Womens-Clothing', element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/sign-in'}/> },
    {  path: '/my-account', element: <MyAccount/> },
    {  path: '/my-order', element: <MyOrder/> },
    {  path: '/my-orders', element: <Myorders/> },
    {  path: '/my-orders/last', element: <MyOrder/> },
    {  path: '/my-orders/:id', element: <MyOrder/> },
    {  path: '/*', element: <NotFound/> },
    {  path: '/sign-in', element: <SingIn/> },
  ])
  return routes;
}

const App = () => {
  initializeLocalStorage()
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
