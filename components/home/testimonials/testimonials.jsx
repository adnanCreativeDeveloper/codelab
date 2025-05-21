'use client'
import Animation from '@/components/common/animation';
import ClientMsg from './client-msg';
import HeadingAnimation from '@/components/common/heading-animation';



const Testimonials = () => {

  return (
    <section className='container mx-auto p-2 md:p-3 bg-right'>
      <HeadingAnimation>
        <div className="pb-16">
          <h1
            className='font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--surface)] text-center'
          >
            What Our <span className='text-[var(--accent)]'>Clients</span> Say
          </h1>
          <p
            className='text-[var(--surface)] text-sm sm:text-base md:text-lg text-center mt-2 sm:mt-3 md:mt-5'
          >
            Our success is measured by our clients’ satisfaction. See their experiences <br className="hidden md:block" /> with us!
          </p>
        </div>
      </HeadingAnimation>

      <div className='relative'>
        <Animation>
          <ClientMsg />
        </Animation>
      </div>
      <div>

      </div>
    </section >
  );
}

export default Testimonials;
