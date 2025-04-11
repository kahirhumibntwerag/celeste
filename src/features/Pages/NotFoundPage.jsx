import React from 'react'
import {Link} from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <div className='text-8xl'>
            This Page Is Not Found
        </div>
        <Link to='/'>
            <button className='bg-black text-white rounded-3xl p-3 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>Go Back Home</button>
        </Link>
    </div>
    </>
  )
}

export default NotFoundPage