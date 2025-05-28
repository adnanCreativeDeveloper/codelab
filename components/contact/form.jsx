import React from 'react';
import Select from './select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFax, faPhone } from '@fortawesome/free-solid-svg-icons';

const Form = () => {
  return (
    <div>
      <form action="">
        <div><input type="text" id='use-full-name' placeholder='Full Name' className='w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg' /></div>
        <div><input type="email" id='use-email' placeholder='Email' className='w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg' /></div>
        <div><input type="number" id='use-phone-number' placeholder='Phone Number' className='w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg' /></div>
        <Select />
        <button className='w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg text-white bg-red-700 hover:bg-red-800'>Submit</button>
      </form>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='flex items-center gap-2 mb-4'>
          <FontAwesomeIcon icon={faPhone} className='text-[var(--accent)]' />
          <div>
            <span className='text-black font-bold text-xs'>PHONE</span>
            <p className='text-red-600 text-xs'>+1 (123) 456-7890</p>
          </div>
        </div>
        <div className='flex items-center gap-2 mb-4'>
          <FontAwesomeIcon icon={faFax} className='text-[var(--accent)]' />
          <div>
            <span className='text-black font-bold text-xs'>FAX</span>
            <p className='text-red-600 text-xs'>+1 (123) 456-7890</p>
          </div>
        </div>
        <div className='flex items-center gap-2 mb-4'>
          <FontAwesomeIcon icon={faEnvelope} className='text-[var(--accent)]' />
          <div>
            <span className='text-black font-bold text-xs'>EMAIL</span>
            <p className='text-red-600 text-xs'>codelab@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
