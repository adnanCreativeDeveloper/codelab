import Animation from '@/components/common/animation';
import HeadingAnimation from '@/components/common/heading-animation';
import { faArrowRightLong, faCheck, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { uuidv7 } from 'uuidv7';

const services = [
  {
    img: '/images/services/service/figma.jpg',
    alt: 'figma',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3 rounded-lg ring-2 ring-black hover:opacity-25',
  },
  {
    img: '/images/services/service/ui-ux.jpeg',
    alt: 'ui-ux',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3',
  },
  {
    img: '',
    alt: '',
    description: 'At Code Lab, every idea counts. That’s why we approach each project with care—blending creativity, strategy, and technical know-how to bring your vision to life. Whether you’re building a custom platform, refining your user experience, or expanding your digital reach, we focus on delivering solutions that are impactful and built to last.',
    style: 'sm:col-span-6 md:col-span-8 lg:col-span-6 p-2 rounded-lg md:p-5 bg-[#f5f2f2] col-span-12 md:col-span-6',
  },
  {
    img: '/images/services/service/analytics.jpeg',
    alt: 'analytics',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3 rounded-lg ring-2 ring-black hover:opacity-25',
  },
  {
    img: '/images/services/service/digital-marketing.jpeg',
    alt: 'digital-marketing',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3',
  },
  {
    img: '/images/services/service/app-development.jpeg',
    alt: 'app-development',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3',
  },
  {
    img: '/images/services/service/flutter.png',
    alt: 'flutter',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3 rounded-lg ring-2 ring-black hover:opacity-25',
  },
  {
    img: '',
    alt: '',
    description: 'We don’t just deliver services, we build partnerships. Our approach is hands-on, transparent, and collaborative, so you always know what’s happening and why. Whether it’s crafting user-friendly websites, designing engaging visuals, writing meaningful content, or growing your brand on social media, we focus on what matters most: helping your business thrive in a digital world.',
    style: 'sm:col-span-6 md:col-span-8 lg:col-span-6 p-2 rounded-lg md:p-5 bg-[#f5f2f2] col-span-12 md:col-span-6',
  },
  {
    img: '/images/services/service/seo.png',
    alt: 'seo',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3 rounded-lg ring-2 ring-black hover:opacity-25',
  },
  {
    img: '/images/services/service/search-engin-seo.jpg',
    alt: 'search-engin-seo',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3',
  },
  {
    img: '/images/services/service/ai-content-writting.jpg',
    alt: 'content-writing',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3',
  },
  {
    img: '/images/services/service/remote-work.jpg',
    alt: 'remote-tagline',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3 rounded-lg ring-2 ring-black hover:opacity-25',
  },
  {
    img: '/images/services/service/content-writing.jpg',
    alt: 'content-writing',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3 rounded-lg',
  },
  {
    img: '/images/services/service/remote-tagline.jpg',
    alt: 'remote-tagline',
    description: '',
    style: 'sm:col-span-6 md:col-span-4 col-span-12 lg:col-span-3 rounded-lg ring-2 ring-black hover:opacity-25',
  },
]

const Service = () => {
  return (
    <section className='container p-2 mx-auto my-10 md:mt-28'>
      <div className='grid grid-cols-12 gap-7'>
        {services.map((item) => (
          <div className={`relative duration-300 ${item.style}`}>
            <Animation>
              {item.description && <FontAwesomeIcon icon={faQuoteRight} className='text-5xl text-gray-900' />}
              {item.description ? <p className="pt-4 text-sm text-gray-800 md:text-xl">{item.description}</p> : <Image height={320} width={320} src={item.img} alt={item.alt} className='object-cover w-full rounded-lg h-80' />}
            </Animation>
          </div>
        ))}
      </div>
      <div className='bg-[#f5f2f2] rounded-3xl p-2 py-10 mt-10 md:mt-16 md:pt-16'>
        <HeadingAnimation>
          <div className='pb-16'>
            <h1
              className='font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--surface)] text-center'
            >
              We <span className='text-[var(--accent)]'>Build</span> Digital Stuff That <span className='text-[var(--accent)]'>Works</span> for You
            </h1>
          </div>
        </HeadingAnimation>
        <HeadingAnimation>
          <div className='font-semibold text-lg sm:text-xl text-[var(--surface)] text-center flex items-center gap-3 w-fit mx-auto'>
            <div className="shrink-0 grid text-white bg-black rounded-full size-6 place-items-center">
              <FontAwesomeIcon icon={faCheck} className='text-sm' />
            </div>
            <p>Need a website, app, or design? We’ve got you covered.</p>
          </div>
        </HeadingAnimation>
        <HeadingAnimation>
          <div className='font-semibold text-lg sm:text-xl text-[var(--surface)] text-center mt-7 flex items-start md:items-center gap-3 w-fit mx-auto'>
            <div className="shrink-0 grid text-white bg-black rounded-full size-6 place-items-center">
              <FontAwesomeIcon icon={faCheck} className='text-sm' />
            </div>
            <p>Our team helps your business grow with smart online solutions.</p>
          </div>
        </HeadingAnimation>
        <div className="flex mx-auto mt-10 md:mt-16 item-center gap-7 w-fit">
          <button className='px-3 py-2 text-sm font-semibold text-center text-white transition-all ease-in-out bg-black rounded-lg cursor-pointer hover:bg-white hover:text-black duration-90 lg:text-base lg:px-6 lg:py-3 md:block'>
            Get Access <FontAwesomeIcon icon={faArrowRightLong} className='ml-2' />
          </button>
          <button className='px-3 py-2 text-sm font-semibold text-center text-black transition-all ease-in-out bg-white rounded-lg cursor-pointer hover:bg-black hover:text-white duration-90 lg:text-base lg:px-6 lg:py-3 md:block'>
            Book a call
          </button>
        </div>
      </div>
    </section >
  );
}

export default Service;
