import React from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = () => {
  return (
    <ul className='w-35 flex flex-col justify-between gap-3 bg-white p-1'>
      <Link to='/collections/jackets'><li className='hover:underline'>Jackets</li></Link>
      <Link to='/collections/shirts'><li className='hover:underline'>Shirts</li></Link>
      <Link to='/collections/pants'><li className='hover:underline'>Pants</li></Link>
      <Link to='/collections/dresses'><li className='hover:underline'>Dresses</li></Link>
      <Link to='/collections/abaya'><li className='hover:underline'>Abaya</li></Link>
      <Link to='/collections/blazers'><li className='hover:underline'>Blazers</li></Link>
      <Link to='/collections/tops'><li className='hover:underline'>Tops</li></Link>
      <Link to='/collections/blouses'><li className='hover:underline'>Blouses</li></Link>
    </ul>
  )
}

export default DropdownMenu