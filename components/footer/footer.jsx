import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MailUs from './mail-us';

const Footer = () => {
  return (
    <section className='container p-2 pt-8 mx-auto mt-5 md:p-3'>
      <MailUs />
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:pb-10 md:pt-16'>
        <div>
          <div className='relative mb-5'>
            <Image
              src="/images/logo/logo-black.png"
              alt="Logo Black"
              width={200}
              height={70}
              className={`object-contain`}
            />
          </div>
          <p className="mb-4 text-sm">We’re not just a tech team —your creative partners in building digital solutions that truly matter. At Code Lab, every project is personal, every detail matters, and every client is part of the journey. Whether you’re just starting or ready to grow, we’re here to turn your vision into something real, practical, and built to last.</p>
          <div className='flex gap-2 mb-8 md:gap-4'>
            <Link href={'/'}><FontAwesomeIcon icon={faFacebook} className='size-6 text-black hover:text-[var(--accent)] duration-300' /></Link>
            <Link href={'/'}><FontAwesomeIcon icon={faTwitter} className='size-6 text-black hover:text-[var(--accent)] duration-300' /></Link>
            <Link href={'/'}><FontAwesomeIcon icon={faLinkedin} className='size-6 text-black hover:text-[var(--accent)] duration-300' /></Link>
            <Link href={'/'}><FontAwesomeIcon icon={faInstagram} className='size-6 text-black hover:text-[var(--accent)] duration-300' /></Link>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-5 text-sm sm:grid-cols-2 md:grid-cols-3'>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className='list-item'>
              <li className='mb-2.5'><Link href={'/'}>About Us</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Services</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Community</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Testimonial</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className='list-item'>
              <li className='mb-2.5'><Link href={'/'}>Help Center</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Tweet @ Us</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Webinars</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Feedback</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links</h3>
            <ul className='list-item'>
              <li className='mb-2.5'><Link href={'/'}>Home</Link></li>
              <li className='mb-2.5'><Link href={'/'}>About us</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Services</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Blog</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-lg font-semibold">Contact Us</h3>
        <div className='flex cursor-pointer gap-2 text-[var(--accent)] hover:text-black duration-300'>
          <FontAwesomeIcon icon={faPhone} className='size-6' />
          <p className="text-sm">+92 3456789012</p>
        </div>
        <div className='my-2 cursor-pointer flex gap-2 text-[var(--accent)] hover:text-black duration-300'>
          <FontAwesomeIcon icon={faEnvelope} className='size-6' />
          <p className="text-sm">support@mail.com</p>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between w-full mx-auto mt-5 text-center md:w-4/5 md:flex-row md:text-sm'>
        <div>
          <p className='text-gray-500'>© Copyright by CodedUI. All rights reserved.</p>
        </div>
        <ul className='flex items-center gap-2 text-sm'>
          <li className='text-gray-500'>Privacy Policy</li>
          <li className='text-gray-500'>Terms of Use</li>
          <li className='text-gray-500'>Legal</li>
          <li className='text-gray-500'>Site Map</li>
        </ul>
      </div>
    </section >
  );
}

export default Footer;