import React from 'react';
import Form from './form';
import HeadingAnimation from '@/components/common/heading-animation';

const ContactForm = () => {
  return (
    <div>
      <div className='container mx-auto px-2 md:px-0 mt-5'>
        <div className="bg-[#f5f2f2] shadow-2xl grid grid-col-1 md:grid-cols-2 gap-10 rounded-xl md:rounded-3xl">
          <div className='px-2 py-4 pt-10 md:pl-20 md:py-12'>
            <HeadingAnimation>
              <div className="pb-5">
                <h1 className="font-bold text-2xl sm:text-3xl text-[var(--surface)]">
                  <span className="text-[var(--accent)]">Contact</span> Us
                </h1>
                <p className="text-[var(--surface)] text-sm sm:text-base mt-2 sm:mt-3 md:mt-3">
                  Reach out and let’s make something amazing together.
                </p>
              </div>
            </HeadingAnimation>
            <Form />
          </div>
          <div className="relative grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-0 rounded-2xl md:rounded-0 overflow-hidden">
            <iframe className='shadow-2xl w-full md:w-3/4 md:absolute md:-translate-x-1/2 md:-translate-y-1/2 h-96 md:h-3/4 left-1/2 top-1/2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.3096891911773!2d71.70275721076696!3d29.39049527515615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91d848e4a04d%3A0xb76e6b22b08063d5!2sCodelab%20Tech%20School%20and%20It%20Solutions!5e0!3m2!1sen!2sfr!4v1747898965985!5m2!1sen!2sfr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div></div>
            <div className='bg-[var(--surface)] rounded-e-4xl overflow-hidden'>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
