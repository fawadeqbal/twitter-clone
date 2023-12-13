import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import './sign-in.css'
const SignInScreen = () => {
  return (
    <div className='sign-in'>
        <SignIn/>
    </div>
  )
}

export default SignInScreen