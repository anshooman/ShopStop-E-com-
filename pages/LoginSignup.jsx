import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Name' />  
          <input type="email" placeholder='Email ID' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>I agree to the <span>Terms & Conditions</span> and <span>privacy policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
