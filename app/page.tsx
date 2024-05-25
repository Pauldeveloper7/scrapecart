// import HeroCarousel from '@/components/HeroCarousel'
import Search from '@/components/Search'
import Image from 'next/image'
import React from 'react'
import { getAllProducts } from '@/lib/action'
import ProductCard from '@/components/ProductCard'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeroCarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
const page = async () =>   {
  const allProducts =  await getAllProducts();
  
  const p =   JSON.parse(JSON.stringify(allProducts))
  // console.log(p)
  return (
    <>
      <section className='px-6  md:px-20 py-24 '>
      <div className=' flex max-xl:flex-col  gap-16'>
     <div className='flex flex-col justify-center'>
        <p className='small-text'>Smart Shopping Here :
        <ArrowForwardIcon/></p>
        <h1 className=' head-text'>Unleash  the Power of 
        <span className='text-primary'> ScrapeCart </span> </h1>
        <p className=' mt-6'>Powerful, self-serve product and 
        growth analytics to help you convert, engage, and 
        retain more.</p>

        <Searchbar/>
      
     </div>
     <HeroCarousel/>

      </div>
      </section>
      <section className='trending-section'>
        <h2 className='section-text'>Featured</h2>
            <Search product={p} key={p._id}/>
        {/* <div className=' flex flex-wrap gap-x-8 gap-y-16 '>
          {allProducts?.map((product :any)=>{
            return (
           
              <ProductCard 
              key={product._id}
              product={product} />
            )
          })} */}

        {/* </div> */}
      </section>
    </>
  )
}

export default page