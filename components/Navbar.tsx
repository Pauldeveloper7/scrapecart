'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import SellIcon from '@mui/icons-material/Sell';
const Navbar = () => {
  const navIcons = [
    <SearchIcon key={1}  /> , 
    <FavoriteIcon key={2} /> ,
    <PersonIcon key={3}  /> ,
  
  ]
  return (
    <header className='w-full  '>
      <nav className='nav'>
             <Link href={'/'} className='flex items-center gap-1 '>
              
              <SellIcon className='flex items-center gap-1 red-800' />
             <p className="nav-logo">
             Scrape<span className='text-primary'>Cart</span>
             </p>
             </Link>
      <div className='flex items-center gap-5'>
      {navIcons.map((icon)=>{
        return icon
      })}
      </div>
      </nav>
    </header>
  )
}

export default Navbar