import React from 'react'
import { Link } from 'react-router-dom'
const DropdownMenu = () => {
  return (
    <ul className=' w-35 flex flex-col justify-between gap-3  bg-white p-1 '>
        <Link to='/'><li className='hover:underline'>Abaya</li></Link>
        <Link to='/'><li className='hover:underline'>Abaya</li></Link>
        <Link to='/'><li className='hover:underline'>Abaya</li></Link>
        <Link to='/'><li className='hover:underline'>Abaya</li></Link>
        <Link to='/'><li className='hover:underline'>Abaya</li></Link>


    </ul>
  )
}
 
export default DropdownMenu