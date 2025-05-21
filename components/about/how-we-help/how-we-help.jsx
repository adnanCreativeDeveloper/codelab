import Image from 'next/image';
import React from 'react';
import { uuidv7 } from 'uuidv7';
import AboutCompanyBanner from './about-company-banner';
import HeadingAnimation from '@/components/common/heading-animation';
import HelpProcessCard from './help-process-card';
import Animation from '@/components/common/animation';



const HowWeHelp = () => {
  return (
    <section className='container mx-auto p-2 py-8 sm:py-10'>
      <HeadingAnimation>
        <div className='pb-16'>
          <h1
            className='font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--surface)] text-center'
          >
            How do we <span className='text-[var(--accent)]'>help</span> you grow?
          </h1>
          <p
            className='text-gray-500 text-sm text-center mt-2 sm:mt-3 md:mt-5'
          >
            We create websites, apps, and designs that help businesses grow. Our team also boosts brands with
            <br className="hidden md:block" />
            digital marketing, making sure they reach the right audience and stand out online.
          </p>
        </div>
      </HeadingAnimation>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        <HelpProcessCard />
        <div></div>
      </div>
      <Animation>
        <AboutCompanyBanner />
      </Animation>
    </section>
  );
}

export default HowWeHelp;
