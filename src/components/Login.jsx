import React, { useState,useRef, use } from 'react';
import { CheckValidData } from '../utils/ValidData';
import Header from './header';
function Login() {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);

    const email=useRef(null);
    const password=useRef(null);
   // const name=useRef(null);

    const HandleOnSubmit=()=>{
          // console.log(email.current.value);
          // console.log(password.current.value);
          // console.log(name.current.value);
         const msg= CheckValidData(email.current.value,password.current.value);
        setErrorMessage(msg);
    }
    const toggleSignInform=()=>{
         setIsSignInForm(!isSignInForm);
    }
    return ( 
       <div>
          
          <Header />

          <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg' alt='background'/>
          </div>
          <form onSubmit={(e)=>{e.preventDefault()}} className='absolute p-11 w-3/12 my-36 mx-auto right-0 left-0 text-xl text-white opacity-80 bg-black rounded-lg '>
            <h1 className='py-3 text-bold text-3xl'>{isSignInForm? "Sign In" :"Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='full name'className='p-4 my-3 bg-gray-800 w-full' />
            }
            <input type='text' ref={email} placeholder='email address' className='p-4 my-3 bg-gray-800 w-full'></input>
            <input type='password' placeholder='password' ref={password} className='p-4 my-3  bg-gray-800 w-full'></input>
            <p className='text-red-500 text-lg p-2 ' >{errorMessage}</p>
            <button onClick={HandleOnSubmit} className='bg-red-700   w-full p-4 my-6 rounded-lg ' >{isSignInForm?" Sign In":"Sign Up"}</button>
            <p onClick={toggleSignInform} className='cursor-pointer' >{isSignInForm ?" New user ? please Sign Up." :"Allready User Please Sign In."}</p>
          </form>

       </div>
       
        
      
      
     );
}

export default Login;