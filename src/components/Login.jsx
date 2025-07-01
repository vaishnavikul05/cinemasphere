import React, { useState,useRef, useDispatch } from 'react';
import Header from './header';
import { CheckValidData } from '../utils/ValidData';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth}  from "../utils/firebase.js";
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice.js';

function Login() {
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate();

    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);

    const HandleOnSubmit=()=>{
          // console.log(email.current.value);
          // console.log(password.current.value);
          // console.log(name.current.value);

         const msg= CheckValidData(email.current.value,password.current.value);
        setErrorMessage(msg);
        if(msg) return;

        if(!isSignInForm){
          //sign up logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                
                const user = userCredential.user;
                updateProfile(user,{
                   displayName: name.current.value, photoURL: "https://st4.depositphotos.com/4326917/24326/v/450/depositphotos_243263326-stock-illustration-user-avatar-illustration-anonymous-sign.jpg"

                }).then(()=>{
                 
                      navigate("/browse");
                }).catch((e)=>{
                     setErrorMessage(e.message);
                })
                console.log(user);
               
               
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage)
              });
        }else{
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                  const user = userCredential.user;
                   console.log(user);
                   navigate("/browse");

                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                   setErrorMessage(errorCode+"-"+errorMessage)
                });
        }
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
            {!isSignInForm && <input type='text' ref={name} placeholder='full name'className='p-4 my-3 bg-gray-800 w-full' />
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