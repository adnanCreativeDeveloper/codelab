import placeholders from '@/lib/placeholders';
import Image from 'next/image';
import React from 'react';
const PostHero = ({ data }) => {
  if (!data) {
    return <div className='container mx-auto text-center py-10'>Loading...</div>;
  }
  return (
    <div className='relative
    h-[75vh]
    sm:max-w-[calc(40rem+55px)] 
          md:max-w-[calc(48rem+75px)] 
          lg:max-w-[calc(64rem+75px)] 
          xl:max-w-[calc(80rem+75px)] 
          2xl:max-w-[calc(96rem+75px)]
          sm:max-h-40rem
          md:max-h-48rem
          lg:max-h-64rem
          xl:max-h-80rem
          2xl:max-h-96rem
          mx-auto'>
      <div className="absolute -top-[80px] left-0 w-full h-full">
        <div className='absolute top-0 left-0 w-full h-full'>
          <Image
            src={data.img}
            alt={data.title}
            fill
            placeholder='blur'
            blurDataURL={placeholders[data.img]}
            className="object-cover w-full h-full"
          />
        </div>
        <div className='p-2 absolute top-0 left-0 z-10 flex items-end pb-10 md:pb-20 pl-5 justify-start w-full h-full bg-black/70'>
          <div className='pb-10 md:pl-24 md:pr-20'>
            <h1 className='text-2xl md:text-4xl font-bold text-white text-shadow-black'>{data.title}</h1>
            <p className="mt-4 font-semibold text-gray-200 max-sm:text-sm">{data.description}</p>
            <div className="flex flex-wrap items-start justify-items-start gap-3 mt-7 w-full md:w-1/2">
              <div className="bg-orange-800/50 shadow rounded-lg py-1.5 px-3.5 font-semibold w-fit text-sm text-orange-400">{data.category}</div>
              {/* {data.key_words.map((item) => (<div key={uuidv7()} className="bg-orange-800/50 shadow rounded-lg py-1.5 px-3.5 font-semibold w-fit text-sm text-orange-400">{item}</div>))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostHero;
