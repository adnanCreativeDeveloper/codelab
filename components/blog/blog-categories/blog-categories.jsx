'use client'
import React, { useEffect, useRef, useState } from 'react';
import CategoryCard from './category-card';
import { uuidv7 } from 'uuidv7';
import HeadingAnimation from '@/components/common/heading-animation';
import Animation from '@/components/common/animation';

const category = [
  {
    category: 'All',
    id: uuidv7(),
    icon: <svg xmlns="http://www.w3.org/2000/svg" className='size-12' width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4h6v6h-6z" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6h-6z" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>,
  },
  {
    category: 'Design',
    id: uuidv7(),
    icon: <svg xmlns="http://www.w3.org/2000/svg" className='size-12' width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 9a10 10 0 1 0 20 0" /><path d="M12 19a10 10 0 0 1 10 -10" /><path d="M2 9a10 10 0 0 1 10 10" /><path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" /><path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" /></svg>,
  },
  {
    category: 'Development',
    id: uuidv7(),
    icon: <svg xmlns="http://www.w3.org/2000/svg" className='size-12' width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" /><path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5" /><path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5" /><path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5" /></svg>,
  },
  {
    category: 'SEO',
    id: uuidv7(),
    icon: <svg xmlns="http://www.w3.org/2000/svg" className='size-12' width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20h14" /></svg>,
  },
  {
    category: 'Marketing',
    id: uuidv7(),
    icon: <svg xmlns="http://www.w3.org/2000/svg" className='size-12' width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.933 5h-6.933v16h13v-8" /><path d="M14 17h-5" /><path d="M9 13h5v-4h-5z" /><path d="M15 5v-2" /><path d="M18 6l2 -2" /><path d="M19 9h2" /></svg>,
  },
]

const BlogCategories = ({ blog_arr }) => {
  const [type, setType] = useState(null);
  const scrollRef = useRef();
  const [isShadow, setIsShadow] = useState('right');
  const handleType = (type) => {
    setType(type)
  }

  useEffect(() => {
    const container = scrollRef.current;

    const handleIsShadow = () => {
      if (!container) return;

      const isAtStart = container.scrollLeft === 0;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;

      if (isAtStart && isAtEnd) {
        setIsShadow(null);
      } else if (isAtStart) {
        setIsShadow('right');
      } else if (isAtEnd) {
        setIsShadow('left');
      } else {
        setIsShadow('both');
      }
    };

    handleIsShadow(); // initial check

    container.addEventListener('scroll', handleIsShadow);
    return () => {
      container.removeEventListener('scroll', handleIsShadow);
    };
  }, []);

  return (
    <section className='sm:container sm:p-2 mx-auto mt-16'>
      <HeadingAnimation>
        <div className='pb-16'>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--surface)] text-center'>Find What You're Looking For</h1>
        </div>
      </HeadingAnimation>
      <div className="relative">
        {(isShadow === 'left' || isShadow === 'both') && (
          <div className='absolute top-0 left-0 z-10 w-7 h-full bg-gradient-to-l md:hidden from-transparent to-black/20'></div>
        )}
        {(isShadow === 'right' || isShadow === 'both') && (
          <div className='absolute top-0 right-0 z-10 w-7 h-full bg-gradient-to-r md:hidden from-transparent to-black/20'></div>
        )}
        <Animation>
          <div className=' flex items-center gap-10 px-10 overflow-x-auto' ref={scrollRef}>
            {category.map((item) => (
              <div key={item.id} onClick={() => handleType(item.category)} className={` mx-auto cursor-pointer w-fit group hover:text-red-500 ${item.category === type ? 'text-red-500' : ''} text-center flex flex-col items-center justify-center`}>
                <div className={`size-20 rounded-full duration-300 grid place-items-center group-hover:bg-red-100 ${item.category === type ? 'bg-red-100' : 'bg-red-50'}`}>{item.icon}</div>
                <span className='font-semibold text-current'>{item.category}</span>
              </div>))}
          </div>
        </Animation>
      </div>
      <div className='mt-10 max-sm:p-2'>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard blog_arr={blog_arr} type={type} />
        </div>
      </div>
    </section >
  );
}

export default BlogCategories;
