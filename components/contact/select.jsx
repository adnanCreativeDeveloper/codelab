'use client';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { uuidv7 } from 'uuidv7';

const options = [
  { name: 'How did you find us?', id: uuidv7() },
  { name: 'Google', id: uuidv7() },
  { name: 'Facebook', id: uuidv7() },
  { name: 'Instagram', id: uuidv7() },
  { name: 'LinkedIn', id: uuidv7() },
]

const Select = ({ setValue, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedIndex = options.findIndex(opt => opt.name === value);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className='relative w-full text-gray-500 border border-gray-300 rounded-lg'>
        <FontAwesomeIcon onClick={toggleDropdown} icon={faAngleDoubleDown} className={`${isOpen ? 'rotate-x-180' : 'rotate-x-0'} duration-300 cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2`} />
        <p onClick={toggleDropdown} className='px-3 py-2 cursor-pointer'>{options[selectedIndex > -1 ? selectedIndex : 0].name}</p>
        <motion.div initial={{ opacity: 0, display: 'none', y: 10, scaleY: 0.5 }} animate={{ opacity: isOpen ? 100 : 0, display: isOpen ? 'block' : 'none', y: isOpen ? 0 : 10, scaleY: isOpen ? 1 : 0.5 }} className='origin-top absolute left-0 w-full h-auto mt-3 top-full'>
          <ul className='w-full h-full overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg list-item'>
            {options.map((item, i) => (<li onClick={() => { toggleDropdown(); setValue('source', item.name, { shouldValidate: true }); }} key={item.id} className='px-4 py-2 bg-green-100 cursor-pointer hover:bg-green-200'>{item.name}</li>))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Select;
