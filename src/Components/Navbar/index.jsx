import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4 hover:text-black/70'
    const activeHover = 'hover:text-black/70'

    //Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }
    // Account
    const account = localStorage.getItem('account')
    const parseAccount = JSON.parse(account)

    //Has an account
    const noAccountInLocalStorage = parseAccount ? Object.keys(parseAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage

    const renderView = () => {
        if (hasUserAnAccount && !isUserSignOut) {
            return (
                <>
                    <li className='text-black/60'>
                        default@gmail.com
                    </li>
                    <li>
                        <NavLink to='/my-orders'
                        className= {({ isActive }) =>
                        isActive ? activeStyle : activeHover
                        }>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-account'
                        className= {({ isActive }) =>
                        isActive ? activeStyle : activeHover
                        }>
                            My Account
                        </NavLink>
                    </li>
                
                    <li>
                        <NavLink to='/sign-in'
                        className= {({ isActive }) =>
                        isActive ? activeStyle : activeHover
                        }
                        onClick={() => handleSignOut()}>
                            Sign out
                        </NavLink>
                    </li>
            </>
            )
        }else {
            return (
                <li>
                    <NavLink to='/sign-in'
                        className= {({ isActive }) =>
                        isActive ? activeStyle : activeHover
                        }
                        onClick={() => handleSignOut()}>
                            Sign in
                    </NavLink>
                </li>
            )
        }
    }
    
  return (
    <nav className='flex bg-[#fdfdfd] rounded-b-3xl hover:bg-slate-100 shadow-md justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-medium/2 top-0'>
        <ul className='flex items-center gap-2'>
            <li className='font-semibold hover:text-black/70 text-lg'>
                <NavLink to={`${isUserSignOut ? '/sign-in' : '/'} `}>
                    Shoppy
                </NavLink>
            </li>
            <li>
                <NavLink to='/' onClick={() => context.setSearchByCategory()}
                className= {({ isActive }) =>
                isActive ? activeStyle : activeHover
                
                 }>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to='/Electronics' onClick={() => context.setSearchByCategory('electronics')}
                className= {({ isActive }) =>
                isActive ? activeStyle : activeHover
                 }>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/Jewelery' onClick={() => context.setSearchByCategory('jewelery')}
                className= {({ isActive }) =>
                isActive ? activeStyle : activeHover
                 }>
                    Jewelery
                </NavLink>
            </li>
            <li>
                <NavLink to='/Mens-Clothing' onClick={() => context.setSearchByCategory("men's clothing")}
                className= {({ isActive }) =>
                isActive ? activeStyle : activeHover
                 }>
                    Men's Clothing
                </NavLink>
            </li>
            <li>
                <NavLink to='/Womens-Clothing' onClick={() => context.setSearchByCategory("women's clothing")}
                className= {({ isActive }) =>
                isActive ? activeStyle : activeHover
                 }>
                    Women's Clothing
                </NavLink>
            </li>
            <li>
                <NavLink to='/Others'
                className= {({ isActive }) =>
                isActive ? activeStyle : activeHover
                 }>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-2'>  
            {renderView()}
            <li className='flex gap-1'>
                <ShoppingCartIcon onClick={() => context.openCheckoutSide()} className="h-5 cursor-pointer w-5 text-[#395B64]/60"/> {context.cartProducts.length}
            </li>  
         </ul>          
    </nav>
  )
}

export default Navbar