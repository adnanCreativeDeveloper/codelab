'use client'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const SidebarForm = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  useEffect(() => {
    const handleIsSidebar = (e) => {
      if (e.target.classList.contains('sidebar-form-close')) {
        setIsSidebar(false);
        console.log('get in touch btn');
      } else if (e.target.classList.contains('sidebar-form-open')) {
        setIsSidebar(true);
        console.log('sidebar btn');
      }
    };
    document.addEventListener('click', handleIsSidebar);

    return () => {
      document.removeEventListener('click', handleIsSidebar);
    };
  }, []);

  return (
    <section className={`fixed top-0 ${isSidebar ? 'right-0' : '-right-full'} z-50 w-full h-screen sm:w-3/4 md:w-1/2 lg:w-1/3 duration-300 bg-black p-5 overflow-y-auto
    sm:max-h-[calc(40rem)] 
        md:max-h-[calc(48rem)] 
        lg:max-h-[calc(64rem)] 
        xl:max-h-[calc(80rem)] 
        2xl:max-h-[calc(96rem)]`}>
      <div className="sidebar-form-close size-7 hover:bg-gray-700 cursor-pointer shadow-2xl hover:text-white duration-300 grid place-items-center rounded-full bg-white absolute top-5 right-5"><FontAwesomeIcon className='sidebar-form-close' icon={faTimes} /></div>
      <div>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold text-white'>Got a <span className="text-red-600">Project?</span></h1>
          <p className='text-md text-gray-500 mt-2'>Share the details of your project – like scope, timeframes, or business challenges. Our team will thoroughly review the materials and respond to you promptly.</p>
          <p className='text-gray-300 mt-5'>I'm interested in:</p>
        </div>
        <form action="">
          <div className='mt-10'>
            <input type="text" name="user-first-name" id="use-first-name" placeholder='Enter First Name' className='text-white py-2.5 px-3 rounded-md w-full bg-gray-800 mb-5' />
            <input type="text" name="user-last-name" id="use-last-name" placeholder='Enter Last Name' className='text-white py-2.5 px-3 rounded-md w-full bg-gray-800 mb-5' />
            <input type="email" name="user-email" id="use-email" placeholder='Enter Email' className='text-white py-2.5 px-3 rounded-md w-full bg-gray-800 mb-5' />
            <textarea name="user-email" id="use-email" placeholder='Enter your message' className='text-white py-2.5 px-3 rounded-md w-full bg-gray-800 mb-3 resize-y min-h-40'></textarea>
            <button className='rounded-sm py-2 px-4 text-white bg-red-600 cursor-pointer font-semibold'>Submit</button>
          </div>
        </form>
      </div>

    </section>
  );
}

export default SidebarForm;
