import React, { useState } from 'react'
import {auth } from "../firebase"
import {signInWithEmailAndPassword , signOut ,onAuthStateChanged} from "firebase/auth"
import { async } from '@firebase/util'
import { useEffect } from 'react'

function Login() {

let [email,setEmail] = useState("")
let [password,setPassword] = useState("")

let [loader,setLoader] = useState(false)
let [error,setError] =useState("")
let [user,setUser] = useState(null)


const trackEmail = function(e) {
  setEmail(e.target.value);
}

const trackPassword = (e) => {
  setPassword(e.target.value)
}

const printDetails = async function() {   // using async for promises
  //alert(email + " " + password)
  try{
  setLoader(true)
  let userCred = await signInWithEmailAndPassword(auth,email, password)
  //console.log(userCred.user)
  setUser(userCred.user)
  } catch(err){
    setError(err.message)
    // After some time - > error messaage remove
    setTimeout(()=>{
      setError("")
    },2000)
  }
  setLoader(false)
}

const signout = async function (){
  await signOut(auth);
  setUser(null);
}

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user)
      // ...
    } else {
      // User is signed out
      // ...
      setUser(null)
    }
    
  });

},[]);

  return (
   <>
   {
    error!="" ? <h1>Error is {error}</h1> :
    loader ==true ? <h1>......Loading</h1>:
    user!=null ? 
    <>
    <button
      onClick={signout}
    >Signout</button>
    <h1>user is {user.uid}</h1> 
    </>
    : 
    <>
    <input type="email" onChange={trackEmail} value={email} placeholder="email"></input> 
      <br></br>
      <input type="password" onChange={trackPassword} value={password} placeholder="password"></input>
      <br></br>
      <button type='click' onClick={printDetails}>Login</button>
    </>
   }
    </>
  )
}

export default Login