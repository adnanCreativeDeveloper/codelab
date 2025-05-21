'use client';
import { faSlack, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const WhatsappPopUp = () => {
  const [popUp, setPopUp] = useState(false);
  const handlePopUp = () => {
    setPopUp(!popUp);
  }
  return (
    <div>
      <div className='w-fit h-fit fixed bottom-10 right-4 sm:right-[calc((100%-40rem)/2+1rem)] md:right-[calc((100%-48rem)/2+1rem)] lg:right-[calc((100%-64rem)/2+1rem)] xl:right-[calc((100%-80rem)/2+1rem)] 2xl:right-[calc((100%-96rem)/2+1rem)] z-40 grid place-items-center gap-2 max-sm:w-full'>
        <div className='flex items-center justify-end w-full gap-2'>
          <motion.div initial={{ y: 0, opacity: 0, display: 'block' }} animate={{ y: popUp ? 20 : 0, opacity: popUp ? 0 : 100, display: popUp ? 'none' : 'block' }} transition={{ delay: 0.1 }} className='bg-white rounded-md py-1.5 px-3 cursor-pointer drop-shadow-xl' onClick={handlePopUp}>
            <p className='text-sm text-black'>Need Help? <strong className='font-semibold'>Chat with us</strong></p>
          </motion.div>
          <div>
            <div className='drop-shadow-xl rounded-full bg-[#2DB742] p-1 h-14 w-14 grid place-items-center cursor-pointer relative' onClick={handlePopUp}>
              <motion.span className='absolute -translate-x-1/2 -translate-y-1/2  left-1/2 top-1/2' initial={{ scale: 1, rotate: 0 }} animate={{ scale: popUp ? 0 : 1, rotate: popUp ? -180 : 0 }} transition={{ duration: 0.2 }}><FontAwesomeIcon icon={faWhatsapp} className='text-4xl text-white' size={32} /></motion.span>
              <motion.span className='absolute -translate-x-1/2 -translate-y-1/2  left-1/2 top-1/2' initial={{ scale: 0, rotate: 0 }} animate={{ scale: popUp ? 1 : 0, rotate: popUp ? 180 : 0 }} transition={{ duration: 0.2 }}><FontAwesomeIcon icon={faPlus} className='text-4xl font-thin text-white rotate-45' size={32} /></motion.span>
            </div>
          </div>
        </div>
        <motion.div initial={{ y: 0, opacity: 0, display: 'none' }} animate={{ y: popUp ? 0 : 50, opacity: popUp ? 100 : 0, display: popUp ? 'block' : 'none' }} transition={{ duration: 0.3 }} className='absolute right-0 w-11/12 mb-3 overflow-hidden rounded-sm drop-shadow-xl sm:min-w-88 bottom-16 -z-30'>
          <div>
            <div className='flex items-start justify-items-start bg-[#2DB742] text-white px-3.5 py-3.5 rounded-t-md'>
              <div className='rounded-full bg-[#2DB742] p-1 h-14 w-14 grid place-items-center cursor-pointer'>
                <FontAwesomeIcon icon={faWhatsapp} className='text-4xl text-white' size={36} />
              </div>
              <div>
                <h3 className='text-lg font-semibold'>Codelab Help Desk</h3>
                <p className='mt-2 text-[#D9EBC6] text-sm'>Hi! Click one of our member below to chat <br /> on <span className='font-semibold'>WhatsApp</span></p>
              </div>
            </div>
            <div className='px-4 py-3 bg-gray-50 rounded-b-md'>
              <div><p className='p-1 text-xs text-gray-400'>The team typically replies in a few minutes.</p></div>
              <motion.div initial={{ y: 0, opacity: 0 }} animate={{ y: popUp ? 0 : 50, opacity: popUp ? 100 : 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
                <Link href='/'>
                  <div className='p-2 border-l-2 border-[#2DB742] flex items-center justify-between gap-2 mt-3 rounded-sm'>
                    <div className='flex items-center gap-2'>
                      <div className='grid w-12 h-12 p-1 rounded-full bg-gray-50 place-items-center'>
                        <Image src='/images/logo/whatsapp-icon.svg' alt='Whatsapp' width={48} height={48} className='text-4xl text-white' />
                      </div>
                      <div><p className='text-xs text-gray-400'>Chat with codelab</p></div>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faWhatsapp} className='text-green-500' size={'2x'} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhatsappPopUp;
