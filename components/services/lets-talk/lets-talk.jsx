import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const LetsTalk = () => {
  return (
    <div className='container mx-auto h-[calc(100vh-75px)] p-2 relative'>
      <div className='absolute inset-0 h-full w-full bg-amber-500/20'>
        <div className='relative'>
          <Image fill src={'/images/services/figma.png'} alt='figma' className='object-cove h-auto size-[113px]' />
        </div>
        <div className='relative'>
          <Image fill src={'/images/services/figma.png'} alt='figma' className='object-cove h-auto size-[113px]' />
        </div>
        <div className='relative'>
          <Image fill src={'/images/services/figma.png'} alt='figma' className='object-cove h-auto size-[113px]' />
        </div>
        <div className='relative'>
          <Image fill src={'/images/services/figma.png'} alt='figma' className='object-cove h-auto size-[113px]' />
        </div>
      </div>
      <div className='w-full h-full grid place-items-center'>
        <div className='w- h-60 text-center mb-10'>
          <div className="bg-orange-100 shadow rounded-lg py-1 px-3.5 border-2 font-semibold w-fit text-sm border-orange-300 text-orange-400 mx-auto">Live on Codelab</div>
          <h1 className='text-2xl sm:text-4xl md:text-6xl font-bold text-black mt-3'>Let’s Talk</h1>
          <p className='text-gray-500 mt-2'>Ready to start your project or have questions? We’re here to listen and help.</p>
          <div className="flex item-center mt-5.5 gap-7 w-fit mx-auto">
            <button className='text-center cursor-pointer bg-black hover:bg-white text-white hover:text-black transition-all duration-90 ease-in-out lg:text-base text-sm px-3 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold hidden md:block'>
              Get Access <FontAwesomeIcon icon={faArrowRightLong} className='ml-2' />
            </button>
            <button className='text-center cursor-pointer bg-white hover:bg-black text-black hover:text-white transition-all duration-90 ease-in-out lg:text-base text-sm px-3 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold hidden md:block'>
              Book a call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetsTalk;
