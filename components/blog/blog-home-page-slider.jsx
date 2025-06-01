'use client'
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import placeholders from "@/lib/placeholders";

const BlogHomePageSlider = ({ img }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className='relative w-full h-full'>
      <div className="w-full h-full bg-amber-500 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={0}
          slidesPerView={1}
          speed={300}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        >
          {img.map((item, idx) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-[100vh] w-full">
                <Image src={item.img} alt={item.title} layout="fill" placeholder="blur" blurDataURL={placeholders[item.img]} className="object-cover h-full w-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div >
      <div className='z-20 absolute inset-0 flex items-center pt-8 bg-black/50'>
        <div className='w-full md:pl-32 p-2 md:w-3/4'>
          <div className='w-full max-sm:pl-8 p-7 md:p-10 overflow-hidden bg-white/10 min-h-50 md:min-h-56 backdrop-blur-xl rounded-2xl'>
            <AnimatePresence mode="wait">
              <motion.div key={img[currentIndex].id}
                layout
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <h1 className='text-xl font-bold text-white sm:text-2xl md:text-4xl'>{img[currentIndex].title.length > 35 ? `${img[currentIndex].title.substring(0, 35)}...` : img[currentIndex].title}</h1>
                <p className='mt-5 text-sm text-gray-300'>{img[currentIndex].description.length > 220 ? `${img[currentIndex].description.substring(0, 220)}...` : img[currentIndex].description}</p>
                <Link href={`blog/${img[currentIndex].slug}`} className='w-fit text-center mt-3 bg-[#c90606] hover:bg-[var(--accent-hover)] text-white transition-all duration-90 ease-in-out lg:text-base text-sm px-3 lg:px-7 py-2 lg:py-2 rounded-lg font-semibold inline-block'>
                  Read more
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div >
  );
}

export default BlogHomePageSlider;