'use client'
import Link from 'next/link'
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import {useState}  from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SellIcon from '@mui/icons-material/Sell';
import { useRouter } from 'next/navigation';
import { scrapeAndStoreProduct } from '@/lib/action/index'
import { FormEvent } from 'react'
import PersonIcon from '@mui/icons-material/Person';
const Navbar = () => {
   
  


  const route = useRouter()
  const navIcons = [
    <SearchIcon key={1}
    onClick = {()=>{route.push('#search-input-bar')}}

    /> , 
    <FavoriteIcon key={2}
    onClick = {()=>{route.push('#search-bar')}}

     /> ,
    <PersonIcon key={3} 
     /> ,
  
  ]
  return (
    <header className='w-full  '>
      <nav className='nav'>
             <Link href={'/'} className='flex items-center gap-1 '>
              
              <SellIcon className='flex items-center gap-1 red-800'/>
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