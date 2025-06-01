'use client'
import React, { useEffect, useState } from 'react';
import HeadingAnimation from '../common/heading-animation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import placeholders from '@/lib/placeholders';
import Animation from '../common/animation';
import { uuidv7 } from 'uuidv7';

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

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {visiblePosts.slice(0, 2).map((item) => (<Animation key={item.id}> <div className='relative w-full overflow-hidden rounded-md h-80 shadow-xl'>
          <div className="absolute top-0 left-0 w-full rounded-lg -z-10 h-80">
            <Image
              width={604}
              height={320}
              priority
              src={item.img}
              placeholder='blur'
              blurDataURL={placeholders[item.img]}
              alt={item.title}
              className='object-cover w-full rounded-lg shadow-lg h-full'
            />
          </div>
          <div className="absolute left-3 top-3 bg-orange-200 shadow rounded-lg py-1.5 px-3.5 font-semibold w-fit text-sm text-orange-400">Design</div>
          <div className="absolute bottom-0 left-0 w-full h-30 md:h-20 bg-gray-200/50 backdrop-blur-xl">
            <div className='grid grid-cols-12 gap-2 p-3 text-gray-900 md:gap-5'>
              <div className='col-span-12 md:col-span-8'>
                <h3 className='font-bold text-black'>{item.title.length > 25 ? `${item.title.substring(0, 25)}...` : item.title}</h3>
                <p className='text-xs '>{item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description} <Link href={`/blog/${item.slug}`} className='text-blue-500 font-bold'>Learn More...</Link></p>
              </div>
              <div className='flex items-center justify-end col-span-12 gap-3 md:col-span-4'>
                {/* <p className="flex items-center gap-2 text-sm">
                  <FontAwesomeIcon icon={faEye} className='' />
                  <span>300</span>
                </p>
                <p className="text-sm">-</p> */}
                <p className="flex items-center gap-2 text-sm">
                  <FontAwesomeIcon icon={faClock} className='' />
                  <span>10 min</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        </Animation>
        ))}
      </div>
    </div>
  );
}

export default LatestPost;
