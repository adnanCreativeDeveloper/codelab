import Animation from '@/components/common/animation';
import HeadingAnimation from '@/components/common/heading-animation';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const OurServices = () => {
  return (
    <section className='bg-[#f5f2f2] container p-2 py-8 md:pt-20 pt-10 mx-auto rounded-3xl sm:py-10'>
      <HeadingAnimation>
        <div className='pb-16'>
          <h1
            className='font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--surface)] text-center'
          >
            Our <span className='text-[var(--accent)]'>Services</span>
          </h1>
          <p
            className='text-[var(--surface)] text-sm sm:text-base md:text-lg text-center mt-2 sm:mt-3 md:mt-5'
          >
            At CodeLab, we offer a wide range of digital solutions to help businesses<br className="hidden md:block" />grow and succeed in the online world.
          </p>
        </div>
      </HeadingAnimation>

      <div className='grid grid-cols-1 p-2 mx-auto md:grid-cols-2 py-14 gap-7 md:px-14'>
        <Animation>
          <div className='p-2 bg-white border-2 border-gray-200 md:p-5 rounded-xl md:rounded-3xl'>
            <div className='px-2 pt-1 sm:p-0'>
              <h1 className='mb-4 text-xl font-bold text-black sm:text-2xl md:text-3xl'>Web Designing</h1>
              <p className='text-sm sm:text-lg'>We design visually appealing, user-friendly, and responsive websites that leave a lasting impression. Our designs are modern, engaging, and tailored to your brand.</p>
            </div>
            <div className='relative mt-5'>
              <Image width={400} height={600} className='w-full h-[400px] md:h-[900px] object-cover rounded-xl md:rounded-3xl' src='/images/services/services-card/web-designing.jpg' alt='Web Designing' />
            </div>
          </div>
        </Animation>
        <div className='grid grid-cols-1 gap-7'>
          <Animation>
            <div className='p-2 bg-white border-2 border-gray-200 md:p-5 rounded-xl md:rounded-3xl'>
              <div className='relative mb-5'>
                <Image width={400} height={300} src={'/images/services/services-card/graphic-designing.jpeg'} className='w-full h-[400px] md:h-[360px] object-cover rounded-xl md:rounded-3xl' />
              </div>
              <div className='px-2 pt-1 sm:p-0'>
                <h1 className='mb-4 text-xl font-bold text-black sm:text-2xl md:text-3xl'>Graphic Designing</h1>
                <p className='text-sm sm:text-lg'>From simple websites to complex web applications, we develop high-performance, secure, and scalable web solutions that meet your business needs.</p>
              </div>
            </div>
          </Animation>
          <Animation>
            <div className='grid grid-cols-1 gap-5 p-2 bg-white border-2 border-gray-200 md:p-5 rounded-xl md:rounded-3xl md:grid-cols-2'>
              <div className="relative">
                <Image width={400} height={300} src={'/images/services/services-card/web-development.jpg'} className='w-full h-[400px] md:h-[476px] object-cover rounded-xl md:rounded-3xl' />
              </div>
              <div className='px-2 pt-1 sm:p-0'>
                <FontAwesomeIcon icon={faQuoteRight} className='text-5xl text-gray-400' />
                <h1 className='mt-5 mb-4 text-xl font-bold text-black sm:text-2xl md:text-3xl'>Web Development</h1>
                <p className='text-sm sm:text-lg'>From simple websites to complex web applications, we develop high-performance, secure, and scalable web solutions that meet your business needs.</p>
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </section >
  );
}

export default OurServices;
