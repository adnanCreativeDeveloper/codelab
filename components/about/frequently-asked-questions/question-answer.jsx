'use client'
import Animation from '@/components/common/animation';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { uuidv7 } from 'uuidv7';
const faqItems = [
  {
    id: uuidv7(),
    question: "What services does CodeLab offer?",
    answer: "We provide web development, app development, UI/UX design, graphic design, digital marketing, CRM development, data management, integration solutions, IT support, and business process automation."
  },
  {
    id: uuidv7(),
    question: "How experienced is CodeLab?",
    answer: "With a team of 500+ experts and 200+ satisfied clients, we have years of experience in delivering top-quality digital solutions globally."
  },
  {
    id: uuidv7(),
    question: "Do you offer custom software development?",
    answer: "Yes! We create tailor-made software solutions based on your business needs, ensuring scalability and efficiency."
  },
  {
    id: uuidv7(),
    question: "Can you integrate new software with our existing systems?",
    answer: "Absolutely! Our integration solutions connect your existing software, apps, and platforms for smooth and efficient performance."
  },
  {
    id: uuidv7(),
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer IT support & maintenance to ensure your systems run smoothly with regular updates, security checks, and troubleshooting."
  },
  {
    id: uuidv7(),
    question: "How do you ensure data security in your solutions?",
    answer: "We follow industry-best security practices, including encryption, access controls, and compliance with data protection regulations."
  },
  {
    id: uuidv7(),
    question: "What industries do you work with?",
    answer: "We serve various industries, including healthcare, finance, e-commerce, education, real estate, and more."
  },
  {
    id: uuidv7(),
    question: "Can you help with SEO and online marketing?",
    answer: "Yes! Our digital marketing services include SEO, social media marketing, PPC, content marketing, and branding to boost your online presence."
  }
];

const QuestionAnswer = () => {
  const [isAccordian, setIsAccordian] = useState(null);
  const handleAccordian = (id) => {
    setIsAccordian(id === isAccordian ? null : id);
  }
  return (
    <>
      <Animation>
        <div className='space-y-6'>
          {faqItems.slice(0, 5).map((item) => (<div key={item.id} className='bg-white'>
            <div onClick={() => handleAccordian(item.id)} className='flex items-start gap-4 cursor-pointer pb-2 first:pb-0'>
              <div className='shrink-0 h-7 w-7 mt-1 grid place-items-center rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all duration-300 ease-in-out'>
                <FontAwesomeIcon icon={faAngleDown} className={`${isAccordian === item.id ? 'rotate-x-180' : ''} duration-300 font-extrabold`} />
              </div>
              <h2 className='text-gray-800 hover:text-[var(--accent)] text-xl font-bold'>{item.question}</h2>
            </div>
            <AnimatePresence mode="wait">
              <motion.div initial={{ height: 0 }}
                animate={{ height: isAccordian === item.id ? "auto" : 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className='pl-16 overflow-hidden'>
                <motion.p initial={{ opacity: 0 }}
                  animate={{ opacity: isAccordian === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className='text-gray-500 text-sm mt-2'>{item.answer}</motion.p>
              </motion.div>
            </AnimatePresence>
          </div>))}
        </div>
      </Animation>
      <Animation>
        <div className='space-y-6'>
          {faqItems.slice(5).map((item) => (<div key={item.id} className='bg-white'>
            <div onClick={() => handleAccordian(item.id)} className='flex items-center gap-4 cursor-pointer pb-2 first:pb-0'>
              <div className='h-7 w-7 grid place-items-center rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all duration-300 ease-in-out'>
                <FontAwesomeIcon icon={faAngleDown} className={`${isAccordian === item.id ? 'rotate-x-180' : ''} duration-300 font-extrabold`} />
              </div>
              <h2 className='text-gray-800 hover:text-[var(--accent)] text-xl font-bold'>{item.question}</h2>
            </div>
            <motion.div initial={{ height: 0 }}
              animate={{ height: isAccordian === item.id ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className='pl-16 overflow-hidden'>
              <motion.p initial={{ opacity: 0 }}
                animate={{ opacity: isAccordian === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className='text-gray-500 text-sm mt-2'>{item.answer}</motion.p>
            </motion.div>
          </div>))}
        </div>
      </Animation>
    </>
  );
}

export default QuestionAnswer;
