import React from 'react'
import logo from '../../assets/image_1.jpg'
import NavLinks from './components/NavLinks'
import Logo from './components/Logo'
import Searchbar from './components/Searchbar'
import LoginIcon from './components/LoginIcon'
import BagIcon from './components/BagIcon'

import SidebarIcon from './components/SidebarIcon'

const Navbar = () => {


  return (
<>
  <nav className='flex h-20 px-10 justify-between items-center bg-white align-middle lg:relative fixed top-0 left-0 w-full z-50'>
    <div className='flex-1 hidden lg:flex'>
      <NavLinks/>
    </div>
    
    <div className='flex-shrink flex justify-start md:justify-center'>
      <Logo/>
    </div>

    <div className='flex-1 flex justify-end items-center text-center gap-6'>
      <Searchbar/>
      <LoginIcon/>
      <BagIcon/>
      <SidebarIcon/>
    </div>
  </nav>
  </>  )
}

export default Navbar