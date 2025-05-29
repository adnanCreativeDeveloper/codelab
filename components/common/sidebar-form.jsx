'use client'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { notify } from './notifications';

const schema = Yup.object().shape({
  user_first_name: Yup.string()
    .min(5, 'Must be at least 5 characters.') // Shorter, descriptive
    .max(50, 'Cannot exceed 50 characters.') // Shorter, descriptive
    .required('Your first name is needed.'), // Specific, humble message

  user_last_name: Yup.string()
    .min(3, 'Must be at least 3 characters.') // Shorter, descriptive
    .max(50, 'Cannot exceed 50 characters.') // Shorter, descriptive
    .required('Please enter your last name.'), // Specific, humble message

  user_email: Yup.string()
    .email('Please enter a valid email.') // Shorter, descriptive
    .required('An active email is required.'), // Specific, humble message

  user_message: Yup.string()
    .min(10, 'Must be at least 10 characters.') // Shorter, descriptive
    .max(1000, 'Cannot exceed 1000 characters.') // Shorter, descriptive
    .required('Your message is required.'), // Specific, humble message
});

const infoMessages = {
  user_first_name: "Your first name helps us personalize our communication with you.",
  user_last_name: "We need your last name to ensure accurate record-keeping.",
  user_full_name: "Please provide your full name so we know who to address.",
  user_email: "Your email address is essential for us to send you updates or respond.",
  user_message: "Please share your message with us; it's how we'll understand your specific needs."
};




const SidebarForm = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    notify('success', 'Thank you! Your message has been sent. We will contact you soon.');
    setIsSidebar(false)
    reset();
  };

  const onError = (errors) => {
    const firstErrorField = Object.keys(errors)[0];
    if (firstErrorField) {
      notify('info', infoMessages[firstErrorField]);
    }
  };


  useEffect(() => {
    const showFormElements = Array.from(document.getElementsByClassName('sidebar-form-open'));
    const closeForm = document.getElementById('sidebar-form-close');

    const handleIsSidebar = () => {
      setIsSidebar((prev) => !prev);
    };

    showFormElements.forEach((item) => item.addEventListener('click', handleIsSidebar));
    if (closeForm) {
      closeForm.addEventListener('click', handleIsSidebar);
    }
    return () => {
      showFormElements.forEach((item) => item.removeEventListener('click', handleIsSidebar));
      if (closeForm) {
        closeForm.removeEventListener('click', handleIsSidebar);
      }
    };
  }, []);


  return (
    <section className={`fixed top-0 ${isSidebar ? 'right-0' : '-right-full'} z-50 w-full h-screen sm:w-3/4 md:w-1/2 lg:w-1/3 duration-300 bg-black p-5 overflow-y-auto
    sm:max-h-[calc(40rem)] 
        md:max-h-[calc(48rem)] 
        lg:max-h-[calc(64rem)] 
        xl:max-h-[calc(80rem)] 
        2xl:max-h-[calc(96rem)]`}>
      <div id='sidebar-form-close' className="size-7 hover:bg-gray-700 cursor-pointer shadow-2xl hover:text-white duration-300 grid place-items-center rounded-full bg-white absolute top-5 right-5"><FontAwesomeIcon className='sidebar-form-close' icon={faTimes} /></div>
      <div>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold text-white'>Got a <span className="text-red-600">Project?</span></h1>
          <p className='text-md text-gray-500 mt-2'>Share the details of your project – like scope, timeframes, or business challenges. Our team will thoroughly review the materials and respond to you promptly.</p>
          <p className='text-gray-300 mt-5'>I'm interested in:</p>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit, onError)}>
          <div className='mt-10'>
            <div className='mb-5'>
              <input className={`focus:ring-1 ring-blue-500 focus:outline-none text-white py-2.5 px-3 rounded-md w-full border bg-gray-800 ${errors.user_first_name ? 'border-red-600' : 'border-none'}`} {...register("user_first_name")} type="text" name="user_first_name" id="user_first_name" placeholder='Enter First Name' />
              {errors.user_first_name && (
                <p className="text-sm text-red-600 mt-1 font-semibold">{errors.user_first_name.message}</p>
              )}
            </div>
            <div className='mb-5'>
              <input className={`focus:ring-1 ring-blue-500 focus:outline-none text-white py-2.5 px-3 rounded-md w-full border bg-gray-800 ${errors.user_last_name ? 'border-red-600' : 'border-none'}`} {...register("user_last_name")} type="text" name="user_last_name" id="user_last_name" placeholder='Enter Last Name' />
              {errors.user_last_name && (
                <p className="text-sm text-red-600 mt-1 font-semibold">{errors.user_last_name.message}</p>
              )}
            </div>
            <div className='mb-5'>
              <input className={`focus:ring-1 ring-blue-500 focus:outline-none text-white py-2.5 px-3 rounded-md w-full border bg-gray-800 ${errors.user_email ? 'border-red-600' : 'border-none'}`} {...register("user_email")} type="email" name="user_email" id="user_email" placeholder='Enter Email' />
              {errors.user_email && (
                <p className="text-sm text-red-600 mt-1 font-semibold">{errors.user_email.message}</p>
              )}
            </div>
            <div className='mb-3'>
              <textarea className={`focus:ring-1 ring-blue-500 focus:outline-none text-white py-2.5 px-3 rounded-md w-full border bg-gray-800 resize-y min-h-40 ${errors.user_message ? 'border-red-600' : 'border-none'}`} {...register("user_message")} name="user_message" id="user_message" placeholder='Enter your message'></textarea>
              {errors.user_message && (
                <p className="text-sm text-red-600 -mt-1 font-semibold">{errors.user_message.message}</p>
              )}
            </div>
            <button type='submit' className={`rounded-sm py-2 px-4 text-white bg-red-600 cursor-pointer font-semibold`}>Submit</button>
          </div>
        </form>
      </div >

    </section >
  );
}

export default SidebarForm;
