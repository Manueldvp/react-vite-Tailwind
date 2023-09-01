import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
        <ul className='flex items-center gap-2'>
            <li className='font-semibold text-lg'>
                <NavLink to='/'>
                    Shoppy
                </NavLink>
            </li>
            <li>
                <NavLink to='/'
                className= {({ isActive }) =>
                isActive ? activeStyle : undefined
                 }>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to='/Electronics' onClick={() => context.searchByCategory('Electronics')}
                className= {({ isActive }) =>
                isActive ? activeStyle : undefined
                 }>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/Jewelery' onClick={() => context.searchByCategory('Jewelery')}
                className= {({ isActive }) =>
                isActive ? activeStyle : undefined
                 }>
                    Jewelery
                </NavLink>
            </li>
            <li>
                <NavLink to='/Mens-Clothing' onClick={() => context.searchByCategory("men's clothing")}
                className= {({ isActive }) =>
                isActive ? activeStyle : undefined
                 }>
                    Men's Clothing
                </NavLink>
            </li>
            <li>
                <NavLink to='/Womens-Clothing' onClick={() => context.searchByCategory("Women's clothing")}
                className= {({ isActive }) =>
                isActive ? activeStyle : undefined
                 }>
                    Women's Clothing
                </NavLink>
            </li>
            <li>
                <NavLink to='/Others'
                className= {({ isActive }) =>
                isActive ? activeStyle : undefined
                 }>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-2'>
            <li className='text-black/60'>
                default@gmail.com
            </li>
            <li>
                <NavLink to='/my-orders'
                className= {({ isActive }) =>
                isActive ? activeStyle : undefined
                 }>
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account'
                className= {({ isActive }) =>
                isActive ? activeStyle : undefined
                 }>
                    My Account
                </NavLink>
            </li>
            <li className='flex gap-1'>
                <ShoppingCartIcon  className="h-5 w-5 text-black/60"/> {context.cartProducts.length}
            </li>
        </ul>
    </nav>
  )
}

export default Navbar