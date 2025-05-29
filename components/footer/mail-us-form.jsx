'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { notify } from '../common/notifications';

const MailUsForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  return (
    <form action="" onSubmit={handleSubmit(
      data => {
        notify('success', 'Thank you for subscribing! You will receive updates in your inbox.');
        reset();
      },
      error => {
        notify('info', 'Your email address is essential for us to send you updates or respond.');
      }
    )}>

      <div className='relative'>
        <input {...register("mail_us_email", { required: "Email is required" })} type="email" id='mail_us_email' placeholder='Enter your email' className={`py-2.5 md:py-5 px-3 bg-white rounded-lg w-full border ${errors.mail_us_email ? 'border-red-600' : 'border-tranparent'}`} />
        <button type='submit' className='cursor-pointer font-semibold text-sm text-white absolute top-1/2 -translate-y-1/2 right-2 py-1.5 sm:py-2 px-3 sm:px-3.5 bg-[var(--accent)] rounded-lg'>
          Subscribe
        </button>
      </div>
      {
        errors.mail_us_email && (
          <p className="mt-1 text-sm font-semibold text-red-600">{errors.mail_us_email.message}</p>
        )
      }
    </form >
  );
}

export default MailUsForm;
