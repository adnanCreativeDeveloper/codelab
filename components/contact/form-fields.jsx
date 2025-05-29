'use client'
import React, { useState } from 'react';
import Select from './select';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { notify } from '../common/notifications';


const schema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Must be at least 5 characters.')
    .max(50, 'Cannot exceed 50 characters.')
    .required('Your full name is required here.'),

  email: Yup.string()
    .email('Please enter a valid email.')
    .required('An active email is required.'),

  number: Yup.string()
    .matches(
      /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
      'Please enter a valid Pakistani phone number.'
    )
    .required('A contact number is required.'),

  source: Yup.string()
    .notOneOf(['How did you find us?'], 'Please select a valid option.')
    .required('Please tell us how you found us.'),
});

const infoMessages = {
  name: "Please provide your full name so we know who to address.",
  email: "Your email address is essential for us to send you updates or respond.",
  phone: "A phone number allows us to reach you directly if needed.",
  source: "Knowing how you found us helps us understand our reach better.",
};


const FormFields = () => {
  const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { source: 'How did you find us?' }
  });

  const sourceValue = watch('source');

  const onSubmit = (data) => {
    notify('success', 'Thank you! Your message has been sent. We will contact you soon.');
    reset();
  };

  const onError = (errors) => {
    const firstErrorField = Object.keys(errors)[0];
    if (firstErrorField) {
      notify('info', infoMessages[firstErrorField]);
    }
  };

  return (

    <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
      <div className='mb-4'>
        <input {...register("name")} type="text" id='name' placeholder='Full Name' className={`w-full px-3 py-2 border rounded-lg ${errors.name ? 'border-red-600' : 'border-gray-300'}`} />
        {errors.name && (
          <p className="text-sm text-red-600 mt-1 font-semibold">{errors.name.message}</p>
        )}
      </div>
      <div className='mb-4'>
        <input {...register('email')} type="email" id='email' placeholder='Email' className={`w-full px-3 py-2 border rounded-lg ${errors.email ? 'border-red-600' : 'border-gray-300'}`} />

        {errors.email && (
          <p className="text-sm text-red-600 mt-1 font-semibold">{errors.email.message}</p>
        )}
      </div>
      <div className='mb-4'>
        <input {...register('number')} type="tel" id='number' placeholder='Phone Number' className={`w-full px-3 py-2 border rounded-lg ${errors.number ? 'border-red-600' : 'border-gray-300'}`} />

        {errors.number && (
          <p className="text-sm text-red-600 mt-1 font-semibold">{errors.number.message}</p>
        )}
      </div>
      <div className="mb-4">
        <Select setValue={setValue} value={sourceValue} />
        {errors.source && (
          <p className="text-sm text-red-600 mt-1 font-semibold">{errors.source.message}</p>
        )}
      </div>
      <button type='submit' className={`w-full px-3 cursor-pointer py-2 mb-4 rounded-lg text-white bg-red-700 hover:bg-red-800`}>Submit</button>
    </form>
  );
}

export default FormFields;
