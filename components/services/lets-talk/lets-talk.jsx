import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CreateFloatAnimation from './create-float-animation';

const LetsTalk = () => {
  return (
    <div className='container mx-auto h-[calc(100vh-75px)] p-2 relative'>
      <CreateFloatAnimation />
      <div className='grid w-full h-full place-items-center'>
        <div className='mb-10 text-center w- h-60'>
          <div className="bg-orange-100 shadow rounded-lg py-1 px-3.5 border-2 font-semibold w-fit text-sm border-orange-300 text-orange-400 mx-auto">Live on Codelab</div>
          <h1 className='mt-3 text-2xl font-bold text-black md:text-6xl sm:text-4xl '>Let’s Talk</h1>
          <p className='mt-2 text-gray-500'>Ready to start your project or have questions? We’re here to listen and help.</p>
          <div className="flex item-center mt-5.5 gap-7 w-fit mx-auto">
            <button className='px-3 py-2 text-sm font-semibold text-center text-white transition-all ease-in-out bg-black rounded-lg cursor-pointer hover:bg-white hover:text-black duration-90 lg:text-base lg:px-6 lg:py-3'>
              Get Access <FontAwesomeIcon icon={faArrowRightLong} className='ml-2' />
            </button>
            <button className='px-3 py-2 text-sm font-semibold text-center text-black transition-all ease-in-out bg-white rounded-lg cursor-pointer hover:bg-black hover:text-white duration-90 lg:text-base lg:px-6 lg:py-3'>
              Book a call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetsTalk;
