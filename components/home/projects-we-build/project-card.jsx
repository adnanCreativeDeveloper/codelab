'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { uuidv7 } from 'uuidv7';
import placeholders from '@/lib/placeholders';

const projects = [
    { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-1.jpg' },
    { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-2.jpg' },
    { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-3.jpg' },
    { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-4.jpg' },
    { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-5.jpg' },
    { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-6.jpg' },
]

export default function ProjectCard() {
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
        <Swiper
            spaceBetween={20}
            slidesPerView={slidesPerView} className="mySwiper">
            {projects.map((item) => (
                <SwiperSlide
                    key={uuidv7()} className='cursor-grab active:cursor-grabbing flex-shrink-0'>
                    <div className="bg-gray-100 rounded-3xl p-4">
                        <div className="flex items-center justify-between mb-4 text-sm md:text-xs lg:text-base">
                            <div className="py-1 px-3 rounded-full bg-gray-200">
                                <h3 className="text-gray-900 font-semibold">{item.title}</h3>
                            </div>
                            <div className="py-1 px-3 rounded-full bg-gray-200">
                                <p className="text-gray-500">{item.date}</p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src={item.img}
                                width={333}
                                height={320}
                                alt={item.title}
                                className="object-conver w-full h-full rounded-3xl select-none pointer-events-none"
                                draggable={false}
                                placeholder="blur"
                                blurDataURL={placeholders[item.img]}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
