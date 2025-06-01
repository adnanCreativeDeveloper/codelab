'use client'
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import placeholders from '@/lib/placeholders';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";
const BlogHomePageSlider = ({ img }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleTimer = () => {
      setPrevIndex(currentIndex);
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % img.length);
    };
    const intervalId = setInterval(handleTimer, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, img.length]);
  return (
    <div className='relative w-full h-full'>
      <div className="relative w-full h-full overflow-hidden bg-amber-500">
        <AnimatePresence mode="wait">
          {prevIndex !== null && (
            <motion.div
              key={`prev-${prevIndex}`}
              custom={direction}
              initial={{ x: 0 }}
              animate={{ x: direction === 1 ? '-100%' : '100%' }}
              exit={{}}
              transition={{ duration: 0.5 }}
              className=" inset-0 w-full h-full z-0"
            >
              <div className={`relative w-full h-full`}>
                <Image
                  fill
                  src={img[prevIndex].img}
                  alt={img[prevIndex].title}
                  className="object-cover object-center w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={`current-${currentIndex}`}
            custom={direction}
            initial={{ x: direction === 1 ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{}}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full z-10"
          >
            <div className="relative h-full w-full">
              <Image
                fill
                src={img[currentIndex].img}
                alt={img[currentIndex].title}
                className="object-cover object-center w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='z-20 absolute inset-0 flex items-center pt-8 bg-black/50'>
        <div className='w-full md:pl-32 p-2 md:w-3/4'>
          <div className='w-full max-sm:pl-8 p-7 md:p-10 overflow-hidden bg-white/10 min-h-50 md:min-h-56 backdrop-blur-xl rounded-2xl'>
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}>
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
