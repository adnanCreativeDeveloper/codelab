import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInbox, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MailUs from './mail-us';

const Footer = () => {
  return (
    <section className='container mx-auto p-2 md:p-3  pt-8 md:pt-24 mt-5'>
      <MailUs />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:pb-10'>
        <div>
          <div className='relative mb-5'>
            <Image
              src="/logo/logo-black.png"
              alt="Logo Black"
              width={200}
              height={70}
              className={`object-contain`}
            />
          </div>
          <p className="text-sm mb-4">We’re not just a tech team —your creative partners in building digital solutions that truly matter. At Code Lab, every project is personal, every detail matters, and every client is part of the journey. Whether you’re just starting or ready to grow, we’re here to turn your vision into something real, practical, and built to last.</p>
          <div className='flex gap-2 md:gap-4 mb-8'>
            <Link href={'/'}><FontAwesomeIcon icon={faFacebook} className='size-6 text-black hover:text-[var(--accent)] duration-300' /></Link>
            <Link href={'/'}><FontAwesomeIcon icon={faTwitter} className='size-6 text-black hover:text-[var(--accent)] duration-300' /></Link>
            <Link href={'/'}><FontAwesomeIcon icon={faLinkedin} className='size-6 text-black hover:text-[var(--accent)] duration-300' /></Link>
            <Link href={'/'}><FontAwesomeIcon icon={faInstagram} className='size-6 text-black hover:text-[var(--accent)] duration-300' /></Link>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-sm'>
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className='list-item'>
              <li className='mb-2.5'><Link href={'/'}>About Us</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Services</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Community</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Testimonial</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className='list-item'>
              <li className='mb-2.5'><Link href={'/'}>Help Center</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Tweet @ Us</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Webinars</Link></li>
              <li className='mb-2.5'><Link href={'/'}>Feedback</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
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
        <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
        <div className='flex cursor-pointer gap-2 md:gap-4 text-[var(--accent)] hover:text-black duration-300'>
          <FontAwesomeIcon icon={faPhone} className='size-6' />
          <p className="text-sm">+92 3456789012</p>
        </div>
        <div className='my-2 cursor-pointer flex gap-2 md:gap-4 text-[var(--accent)] hover:text-black duration-300'>
          <FontAwesomeIcon icon={faInbox} className='size-6' />
          <p className="text-sm">support@mail.com</p>
        </div>
      </div>
      <div className='w-full md:w-4/5 mx-auto mt-5 flex md:flex-row flex-col text-center md:text-sm items-center justify-between'>
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