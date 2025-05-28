'use client'
import React, { useEffect, useState } from 'react';
import HeadingAnimation from '../common/heading-animation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const LatestPost = ({ blog_arr }) => {
  const [visiblePosts, setVisiblePosts] = useState([]);

  const shuffleArray = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const shufflePosts = () => {
    const shuffled = shuffleArray(blog_arr.slice(0, 16));
    setVisiblePosts(shuffled.slice(0, 2));
  };

  useEffect(() => {
    shufflePosts();
    const interval = setInterval(shufflePosts, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [blog_arr]);
  return (
    <div className='container px-4 py-8 mx-auto'>
      <HeadingAnimation>
        <div className='pb-16'>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--surface)] text-center'>Latest Posts & Updates</h1>
        </div>
      </HeadingAnimation>
<<<<<<< HEAD

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {visiblePosts.slice(0, 2).map((item) => (<div key={item.slug} className='relative w-full overflow-hidden rounded-md h-80 shadow-xl'>
          <div className="absolute top-0 left-0 w-full h-full rounded-lg -z-10">
=======
      <div>
        <div className='grid items-start grid-cols-1 gap-6 md:p-4 bg-gray-200 rounded-lg md:grid-cols-12 md:rounded-3xl'>
          <div className"p-4 md:p-0 col-span-1 md:col-span-4'>
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
>>>>>>> 5483fb2651d63505cf145e7c4352465c2cc82bc3
            <Image
              width={604}
              height={320}
              priority
<<<<<<< HEAD
              src={item.img}
              alt={item.title}
              className='object-cover w-full rounded-lg shadow-lg h-80'
=======
              src='/images/blog/blogs/b2b-marketing.jpg'
              alt='Latest Post'
              className='object-cover w-full rounded-b-lg shadow-lg h-96 md:rounded-3xl'
>>>>>>> 5483fb2651d63505cf145e7c4352465c2cc82bc3
            />
          </div>
          <div className="absolute left-3 top-3 bg-orange-200 shadow rounded-lg py-1.5 px-3.5 font-semibold w-fit text-sm text-orange-400">Design</div>
          <div className="absolute bottom-0 left-0 w-full h-30 md:h-20 bg-gray-200/50 backdrop-blur-md">
            <div className='grid grid-cols-12 gap-2 p-3 text-gray-600 md:gap-5'>
              <div className='col-span-12 md:col-span-8'>
                <h3 className='font-bold text-black'>{item.title.length > 25 ? `${item.title.substring(0, 25)}...` : item.title}</h3>
                <p className='text-xs '>{item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description} <Link href={`/blog/${item.slug}`} className='text-blue-500 font-bold'>Learn More...</Link></p>
              </div>
              <div className='flex items-center justify-end col-span-12 gap-3 md:col-span-4'>
                <p className="flex items-center gap-2 text-sm">
                  <FontAwesomeIcon icon={faEye} className='' />
                  <span>300</span>
                </p>
                <p className="text-sm">-</p>
                <p className="flex items-center gap-2 text-sm">
                  <FontAwesomeIcon icon={faClock} className='' />
                  <span>300</span>
                </p>
              </div>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  );
}

export default LatestPost;
