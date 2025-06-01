import placeholders from '@/lib/placeholders';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { uuidv7 } from 'uuidv7';
import CategoryCardAnimation from './category-card-animation';

const CategoryCard = ({ blog_arr, type }) => {
  const filteredPosts = (type === 'All' || !type) ? blog_arr : blog_arr.filter((item) => item.category === type);
  return (
    <AnimatePresence mode="sync">
      {filteredPosts.map((item) => (
        <CategoryCardAnimation
          key={item.id}>
          <div>
            {/* <Link href={`/blog/${item.slug}`}> */}
            <div className='relative w-full overflow-hidden rounded-md min-h-80 shadow-xl'>
              <div className="absolute top-0 left-0 w-full rounded-lg -z-10 h-80">
                <Image
                  width={286}
                  height={320}
                  priority
                  src={item.img}
                  alt={item.title}
                  placeholder='blur'
                  blurDataURL={placeholders[item.img]}
                  className='object-cover w-full rounded-lg shadow-lg h-full'
                />
              </div>
              <div className="absolute left-3 top-3 bg-orange-200 shadow rounded-lg py-1.5 px-3.5 font-semibold w-fit text-sm text-orange-400">{item.category}</div>
              <div className="absolute bottom-0 left-0 w-full h-30 md:h-28 bg-gray-200/50 backdrop-blur-md">
                <div className='grid grid-cols-12 gap-2 p-3 pt-1 text-gray-600 md:gap-5'>
                  <div className='col-span-12'>
                    <h3 className='font-bold text-black'>{item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</h3>
                    <p className='md:text-sm text-base'>{item.description.length > 100 ? `${item.description.substring(0, 100)}` : item.description} <Link href={`blog/${item.slug}`} className='text-blue-500 font-bold'>Discover More...</Link></p>
                  </div>
                </div>
              </div>
            </div>
            {/* </Link > */}
          </div>
        </CategoryCardAnimation>
      ))}
    </AnimatePresence >
  );
}

export default CategoryCard;
