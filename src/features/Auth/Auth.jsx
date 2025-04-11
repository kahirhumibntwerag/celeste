import React from 'react'
import {useState} from 'react'
import {auth, googleProvider} from '../../config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    if(auth.currentUser){
        console.log(auth.currentUser.email)
    }
    const sigIn = async ()=>{
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(error){
            console.error(error)
        }
    }
    const sigInWithGoogle = async ()=>{
        try{
            await signInWithPopup(auth, googleProvider)
        }catch(error){
            console.error(error)
        }
    }
    const logOut = async ()=>{
        try{
            await signOut(auth)
        }catch(error){
            console.error(error)
        }
    }
    

  return (
    <div>
        <input
        placeholder='Email...'
        onChange={(e)=> setEmail(e.target.value)}/>
        <input
        placeholder='Password...'
        onChange={(e)=> setPassword(e.target.value)}
        type='password'/>
        <button className='bg-black text-white px-4 cursor-pointer'
        onClick={sigIn}>Sign In</button>
        <button className='bg-green-800 text-white px-4 cursor-pointer'
        onClick={sigInWithGoogle}>google</button>
        <button className='bg-green-800 text-white px-4 cursor-pointer'
        onClick={logOut}>Sign Out</button>

    </div>
  )
}

export default Auth