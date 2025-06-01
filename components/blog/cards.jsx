import GetPostMetaData from '@/utill/get-post-meta-data';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { uuidv7 } from 'uuidv7';
const blog_arr = GetPostMetaData('blog-posts-files');
import Image from 'next/image';
import Link from 'next/link';
import placeholders from '@/lib/placeholders';

const Cards = () => {
  return (
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
          <h3 className="text-lg font-bold md:text-xl">
            {item.title.length > 35 ? `${item.title.substring(0, 35)}...` : item.title}
          </h3>
          <p className="text-sm mt-1.5">
            {item.description.length > 150 ? `${item.description.substring(0, 150)}...` : item.description}
          </p>
          <Link
            href={item.url}
            className="mt-3 bg-[#c90606] hover:bg-red-700 text-white transition-all duration-150 ease-in-out text-sm px-3 py-2 rounded-lg font-semibold hidden md:block text-center"
          >
            Read more
          </Link>
        </div>
      </SwiperSlide>
    ))
  );
}

export default Cards;
