import React from 'react';
import HeadingAnimation from '../common/heading-animation';
import Image from 'next/image';
import Link from 'next/link';

const LatestPost = () => {
  return (
    <div className='container px-4 py-8 mx-auto'>
      <HeadingAnimation>
        <div className='pb-10'>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--surface)] text-center'>General Posts</h1>
        </div>
      </HeadingAnimation>
      <div>
        <div className='grid items-start grid-cols-1 gap-6 p-4 bg-gray-200 rounded-lg md:grid-cols-12 md:rounded-3xl'>
          <div className='col-span-1 md:col-span-4'>
            <div className="font-semibold bg-gray-900 ring-1 ring-gray-900 hover:bg-gray-700 duration-300 cursor-pointer hover:text-white text-sm text-gray-200 rounded-sm py-0.5 px-2 w-fit grid place-items-center">
              <p>Social Media Marketing</p>
            </div>
            <h1 className='mt-3 text-xl font-semibold text-black md:text-2xl'>B2C Marketing Unleashed Building Lasting Customer Relationships</h1>
            <p className='mt-4 text-gray-600'>
              B2C marketing is a vital mechanism that determines how businesses interface with their customers in this globalized world. Business-to-consumer marketing strategies function through direct connections between products, services, and end users. These approaches examine end-user conduct and then utilize feelings to build campaigns that trigger personal responses. B2B marketing definition serves efficiency and logic, while
            </p>
            <Link href={'/'} className="mt-3 bg-white hover:bg-gray-300 text-balck transition-all duration-300 ease-in-out text-sm px-3 py-2 rounded-lg font-semibold hidden md:block text-center">
              Read more
            </Link>
          </div>
          <div className='relative col-span-1 md:col-span-8'>
            <Image
              width={600}
              height={300}
              priority
              src='/images/blog/blogs/b2b-marketing.jpg'
              alt='Latest Post'
              className='object-cover w-full rounded-lg shadow-lg h-96 md:rounded-3xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestPost;
