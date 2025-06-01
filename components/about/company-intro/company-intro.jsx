import HeadingAnimation from '@/components/common/heading-animation';
import placeholders from '@/lib/placeholders';
import Image from 'next/image';
import React from 'react';

const CompanyIntro = () => {
  return (
    <div>
      <div className='h-[calc(100vh-40px)] relative
      sm:max-w-[calc(40rem+40px)] 
      md:max-w-[calc(48rem+40px)] 
      lg:max-w-[calc(64rem+40px)] 
      xl:max-w-[calc(80rem+40px)] 
      2xl:max-w-[calc(96rem+40px)] 
      mx-auto'>
        <div className="rounded-2xl overflow-hidden -top-[70px] left-0 absolute w-full h-full">

          <div className='relative w-full h-full'>
            <Image fill placeholder='blur' blurDataURL={placeholders['/images/about/codelab-team.jpg']} src='/images/about/codelab-team.jpg' alt='About Us' className='object-cover object-center w-full h-full' />
            <div className='absolute inset-0 bg-black/50 flex items-end pb-20'>
              <div>
                <div className='py-12 pl-7 px-5 rounded-e-2xl bg-white w-full md:w-1/2'>
                  <HeadingAnimation>
                    <h1 className='text-xl sm:text-2xl md:text-2xl font-bold mt-2 text-red-600'>About Our Company</h1>
                    <h1 className='text-xl sm:text-2xl md:text-2xl font-bold mt-1 text-gray-800'>CHOOSE THE BEST IT SERVICE COMPANY</h1>
                  </HeadingAnimation>
                  <HeadingAnimation>
                    <p className='text-sm text-gray-500 mt-5'>Codelab is a software development company specializing in the latest technologies. Since 2017, we have helped over 300 global clients achieve their goals with industry-specific software solutions. We deliver exceptional frontend and powerful backend systems, ensuring top code quality and market competitiveness.</p>
                  </HeadingAnimation>

                  <button className='text-center mt-3 bg-[#c90606] hover:bg-[var(--accent-hover)] text-white transition-all duration-90 ease-in-out lg:text-base text-sm px-3 lg:px-5 py-2 lg:py-2 rounded-lg font-semibold hidden md:block'>
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyIntro;
