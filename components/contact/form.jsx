import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFax, faPhone } from '@fortawesome/free-solid-svg-icons';
import FormFields from './form-fields';
const Form = () => {
  return (
    <div>
      <FormFields />
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
