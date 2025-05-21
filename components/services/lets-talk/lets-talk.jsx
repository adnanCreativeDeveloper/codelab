import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LetsTalk = () => {
  return (
    <div className='container mx-auto h-[calc(100vh-75px)] p-2 relative'>
      <div className='w-full h-full grid place-items-center'>
        <div className='w-96 h-60 bg-amber-500 text-center'>
          <div className="rounded-lg py-1.5 px-3 border-orange-500 text-orange-500 mx-auto">Live on Codelab</div>
          <h1 className='text-xl sm:text-2xl md:text-4xl font-black text-gray-800 mt-5'>Let’s Talk</h1>
          <p className='text-gray-500 text-sm mt-3'>Ready to start your project or have questions? We’re here to listen and help.</p>
          <div className="flex item-center gap-5 w-fit mx-auto">
            <button className='text-center mt-3 bg-black hover:bg-white text-white hover:text-black transition-all duration-90 ease-in-out lg:text-base text-sm px-3 lg:px-5 py-2 lg:py-2 rounded-lg font-semibold hidden md:block'>
              Get Access <FontAwesomeIcon icon={faArrowRightLong} className='ml-2' />
            </button>
            <button className='text-center mt-3 bg-white hover:bg-black text-black hover:text-white transition-all duration-90 ease-in-out lg:text-base text-sm px-3 lg:px-5 py-2 lg:py-2 rounded-lg font-semibold hidden md:block'>
              Book a call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetsTalk;
