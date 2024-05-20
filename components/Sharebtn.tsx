'use client'
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { WhatsappIcon ,WhatsappShareButton , FacebookIcon , TwitterIcon, PinterestIcon  , TwitterShareButton, FacebookShareButton, PinterestShareButton  } from 'react-share'
import { useState } from "react"
import Image from 'next/image'
interface props{
    url:string;
    title:string;
}
const Sharebtn = ( {url , title}:props) => {
    const [sharebtn, setSharebtn] = useState(false);
    function close() {
        setSharebtn(false)
      }

  return (
    <div>
     <Image 
                  src="/assets/icons/share.svg"
                  alt="share"
                  width={20}
                  height={20}
                  onClick={()=>{
                      if (navigator.clipboard) {
                          navigator.clipboard.writeText(url);
                          console.log('copied to clipboard successfully')
                        }
                        setSharebtn(true) ; 
                  }
                    }
                />
        {
            sharebtn &&
            <>
            <Transition appear show={sharebtn}>
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
                  <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                    Share this product with others
                  </DialogTitle>
                 
                  <div className='icons flex gap-7 justify-center'>
                    <WhatsappShareButton url={url}>
                    <WhatsappIcon size={32} round={true} />
                    </WhatsappShareButton>
                    <TwitterShareButton url={url}>
                  <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <FacebookShareButton url={url}>
                    <FacebookIcon size={32} round={true}/>
                    </FacebookShareButton>
                    <PinterestShareButton url={url} media={'assets/icons/share.svg'}>
                   <PinterestIcon size={32} round={true}/>
                    </PinterestShareButton>
                      </div>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                      >
                      close
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
            </>
            
        }
    </div>
  )
}

export default Sharebtn