import { useContext, useState, useRef } from 'react'
import Layout from '../../Components/Layout'
import { Link, Navigate } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'


function SignIn() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
 
  //Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  
  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)

    return <Navigate replace to={"/"}/>
  }

  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
     // Create account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
    //sign in
    handleSignIn()
  }

 
 

  const renderLogIn = () => {
    return (
      <div className='flex flex-col w-80'> 
        <p>
          <span className='font-light text-sm'>Email:</span>
          <span className='ml-2'>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className='font-light text-sm'>Password:</span>
          <span className='ml-2'>{parsedAccount?.password}</span>
        </p>
        <Link to="/">
         <button className='bg-black/90 disabled:bg-black/60 text-white w-full rounded-lg py-3 mt-4 mb-2'
         onClick={() => handleSignIn()}
         disabled={!hasUserAnAccount} >
          Log in
         </button>
        </Link>
        <div className='text-center mb-2'>
          <a className='font-light text-xs underline underline-offset-4' href="/">Forgot my Password</a>
        </div>
        <button className='rounded-lg h-10 shadow-#29 hover:bg-slate-100 disabled:bg-black/60'
        disabled={hasUserAnAccount} onClick={() => setView('create-user-info')} >
          Sign up
        </button>
      </div>
    )
  }
  
  const renderCreateUserInfo = () => {
    return(
      <form ref={form} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col'>
          <label htmlFor="name" className='font-semibold mb-2'>Your Name:</label>
          <input type="text" id='name' name='name' defaultValue={parsedAccount?.name} placeholder='Name...' className='rounded-lg shadow-#29 p-2' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='font-semibold mb-2'>Your Email:</label>
          <input type="text" id='email' name='email' defaultValue={parsedAccount?.email} placeholder='Email' className='rounded-lg shadow-#29 p-2 '/>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='font-semibold mb-2'>Your Password:</label>
          <input type="text" id='password' name='password' defaultValue={parsedAccount?.password} placeholder='*******' className='rounded-lg shadow-#29 p-2'/>
        </div>
        <Link to='/'>
          <button className='bg-black/90 text-white w-full rounded-lg mt-10 py-3' 
          onClick={() => createAnAccount()}>
            Create
          </button>
        </Link>
      </form>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

  return (
    <Layout>
      <h1 className='font-semibold mb-4 mt-4'>Welcome</h1>
      {renderView()}
    </Layout>
  )
}

export default SignIn