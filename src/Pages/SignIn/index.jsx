import React from 'react'
import Layout from '../../Components/Layout'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <Layout>
      <h1 className='font-semibold mb-4 mt-4'>Welcome</h1>
      <div className='flex flex-col w-80'> 
        <p>
          <span className='font-light text-sm'>Email:</span>
          <span className='ml-2'>default@mail.com</span>
        </p>
        <p>
          <span className='font-light text-sm'>Password:</span>
          <span className='ml-2'>*********</span>
        </p>
        <Link to='/'>
         <button className='bg-black/90 disabled:bg-black/60 text-white w-full rounded-lg py-3 mt-4 mb-2'>
          Log in
         </button>
        </Link>
        <div className='text-center mb-2'>
          <a className='font-light text-xs underline underline-offset-4' href="/">Forgot my Password</a>
        </div>
        <button className='rounded-lg h-10 shadow-#29 hover:bg-slate-100 disabled:bg-black/60'>
          Sign up
        </button>
        
      </div>
    </Layout>
  )
}

export default SignIn