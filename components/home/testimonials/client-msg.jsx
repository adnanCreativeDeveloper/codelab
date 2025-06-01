'use client'
import React, { useRef, useState } from 'react';
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { uuidv7 } from "uuidv7";
import placeholders from '@/lib/placeholders';


const testimonials = [
  {
    name: 'Ariba Dastgir',
    role: 'App Developer',
    description: 'Why is Ahmed important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team',
    img: '/images/home/testimonial/areeba.png',
  },
  {
    name: 'Fiza Yaseen',
    role: 'Hr.For Codelab',
    description: 'Why is Ahmed important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team',
    img: '/images/home/testimonial/Fizza.png',
  },
  {
    name: 'Shumaila Sial',
    role: 'Graphic Designer T/C',
    description: 'Why is Ahmed important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team',
    img: '/images/home/testimonial/Shumaila.png',
  },
  {
    name: 'Malik Ansar',
    role: 'WordPress Developer ',
    description: 'Why is Ahmed important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team',
    img: '/images/home/testimonial/Frame-1618873284-1.png',
  },
  {
    name: 'Ahtasham Athar',
    role: 'Front-End Developer',
    description: 'Why is Ahmed important? Because clients want to know the businesses they depend on for advice, are well managed in their own right. Not only that but this event gives you the chance to give your back-office team',
    img: '/images/home/testimonial/ahtsham.png',
  },
]


const ClientMsg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSwipeBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className=''>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 0, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-4xl px-4 md:px-14 py-10 md:py-20 bg-gray-100 text-gray-600 shadow-2xl"
        >
          <p className="mb-10">{testimonials[currentIndex].description}</p>
          <div className="flex items-center gap-6">
            <div className='relative w-14 h-14'>
              <Image
                src={testimonials[currentIndex].img}
                height={70}
                width={70}
                alt={testimonials[currentIndex].name}
                placeholder='blur'
                blurDataURL={placeholders[testimonials[currentIndex].img]}
                className="w-full h-auto object-cover rounded-full ring-2 ring-black"
              />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold">{testimonials[currentIndex].name}</h4>
              <p>{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className='flex items-center gap-8'>
        <div className='absolute -bottom-16 right-1/2 translate-x-1/2 md:-translate-x-0 md:bottom-16 md:right-16 flex items-center gap-2 md:gap-5 text-gray-100'>
          <div onClick={handleSwipeBack} className='h-12 md:h-16 w-12 md:w-16 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] hover:shadow-xl duration-300 cursor-pointer grid place-items-center'>
            <FontAwesomeIcon icon={faArrowLeftLong} className='size-8 text-current' />
          </div>
          <div onClick={handleSwipeNext} className='h-12 md:h-16 w-12 md:w-16 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] hover:shadow-xl duration-300 cursor-pointer grid place-items-center'>
            <FontAwesomeIcon icon={faArrowRightLong} className='size-8 text-current' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientMsg;
