import placeholders from '@/lib/placeholders';
import GetPostMetaData from '@/utill/get-post-meta-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { uuidv7 } from 'uuidv7';
const blog_arr = GetPostMetaData('blog-posts-files')
const SuggestedPosts = () => {
  const getRandomNumber = () => {
    const min = 4;
    const max = 7;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const numberOfPosts = getRandomNumber();
  return (
    <>
      {blog_arr.slice(1, numberOfPosts).map((item, i) => i % 2 === 0 && <div key={item.id} className='max-sm:h-36 grid grid-cols-12 gap-5 p-3 mb-4 bg-gray-200 border border-gray-300 rounded-lg cursor-pointer last:mb-0 hover:shadow-lg'>
        <div className="relative w-full h-full overflow-hidden rounded-lg sm:w-32 sm:h-32 col-span-4 md:rounded-xl">
          <Image
            height={130}
            width={130}
            alt={item.title}
            className="object-cover w-full h-full duration-300"
            src={item.img}
            placeholder='blur'
            blurDataURL={placeholders[item.img]}
          />
        </div>
        <div className="col-span-8">
          <h3 className="text-lg font-bold md:text-xl">
            {item.title.length > 15 ? `${item.title.substring(0, 15)}...` : item.title}
          </h3>
          <div className=''>
            <p className="text-sm mt-1.5">
              {item.description.length > 100 ? `${item.description.substring(0, 100)} ` : item.description}
              <Link href={`/blog/${item.slug}`}
                className="font-semibold text-blue-500">
                Read more
              </Link>...
            </p>
          </div>
        </div>
      </div>)}
    </>

  );
}

export default SuggestedPosts;
