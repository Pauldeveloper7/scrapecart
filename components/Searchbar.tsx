"use client"
import {  Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import CloseIcon from '@mui/icons-material/Close';
import { scrapeAndStoreProduct } from '@/lib/action/index'
import { FormEvent, useState } from 'react'
import { AddCircleOutlineOutlined } from '@mui/icons-material'

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(
      hostname.includes('amazon.com') || 
      hostname.includes ('amazon.') || 
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
}

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [addproduct, setaddproduct] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if(!isValidLink) return alert('Please provide a valid Amazon link')

    try {
      setIsLoading(true);

      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
   <div >
 
 <button className=" my-10   border-red-800  bg-white text-black-100 p-4 rounded-xl   " onClick={()=>setaddproduct(true)}>
           Add amazon product
        <AddCircleOutlineOutlined/>
        </button>
        {
          addproduct && (
      <Transition appear show={addproduct}>
      <Dialog as="div" className="relative z-10 focus:outline-none w-60 h-70" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                <DialogTitle as="h3" className="text-base/7 font-medium text-white flex justify-between">
                  Share this product with others
                <CloseIcon
                onClick={()=>setaddproduct(false)}
                className='text-black'
                />
                </DialogTitle>
                <div className='icons flex gap-7 justify-center mt-3'>
                <form 
      className="flex flex-wrap gap-4 mt-12" 
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter amazon product link"
        className="searchbar-input"
        id='search-input-bar'
        />

      <button 
        type="submit" 
        className="searchbar-btn"
        disabled={searchPrompt === ''}
        >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </form>
                    </div>
                {/* <div className="mt-4 flex justify-end items-end">
                  {/* <Button
                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                    onClick={()=>setaddproduct(false)}
                    >
                    close
                  </Button> */}
                {/* </div> */} 
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
                      </div>
  )
}

export default Searchbar