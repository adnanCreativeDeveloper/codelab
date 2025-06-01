'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { uuidv7 } from 'uuidv7';
import placeholders from '@/lib/placeholders';
const BlogCard = ({ blog_arr }) => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) { setSlidesPerView(1); }
      else if (width < 768) { setSlidesPerView(2); }
      else if (width < 1024) { setSlidesPerView(3); }
      else { setSlidesPerView(4); }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Swiper
        navigation={{
          nextEl: '.blog-next',
          prevEl: '.blog-prev',
        }}
        loop={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}>
        {
          blog_arr.map((item) => (
            <SwiperSlide
              key={uuidv7()}
              className="flex-shrink-0 p-3 bg-gray-200 border border-gray-300 rounded-lg cursor-pointer w-80 hover:shadow-lg"
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  height={300}
                  width={300}
                  alt={item.title}
                  className="object-cover w-full duration-300 h-60"
                  src={item.img}
                  placeholder='blur'
                  blurDataURL={placeholders[item.img]}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold md:text-xl h-[56px] overflow-hidden">
                  {item.title.length > 35 ? `${item.title.substring(0, 35)}...` : item.title}
                </h3>
                <div className='h-[85px] overflow-hidden'>
                  <p className="text-sm mt-1.5">
                    {item.description.length > 150 ? `${item.description.substring(0, 150)}...` : item.description}
                  </p>
                </div>
                <Link href={`blog/${item.slug}`} className="mt-3 bg-[#c90606] hover:bg-red-700 text-white transition-all duration-150 ease-in-out text-sm px-3 py-2 rounded-lg font-semibold inline-block w-full text-center">
                  Continue Reading
                </Link>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default BlogCard;
