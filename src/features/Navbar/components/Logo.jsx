import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/image_1.jpg'

const Logo = () => {
  return (
    <Link to="/">
      <img className='w-35 cursor-pointer hover:scale-120 transition-transform duration-500' src={logo} alt='celeste logo'/>
    </Link>
  )
}

export default Logo