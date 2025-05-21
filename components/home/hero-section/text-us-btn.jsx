'use client'

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";


const TextUsBtn = () => {
  const [isModal, setIsModal] = useState(false);
  const handleIsModal = () => {
    setIsModal(!isModal)
    console.log(isModal);
  }
  return (
    <>
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 100, x: 0 }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
        onClick={handleIsModal}
        className='fixed z-40 top-1/2 transform -translate-y-1/2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-8 py-2 rounded-tl-2xl rounded-tr-2xl rotate-90 cursor-pointer
          -left-10
          sm:left-[calc((100%-40rem)/2-75px)]
          md:left-[calc((100%-48rem)/2-75px)]
          lg:left-[calc((100%-64rem)/2-75px)]
          xl:left-[calc((100%-80rem)/2-75px)]
          2xl:left-[calc((100%-96rem)/2-75px)]'
      >
        Text Us
      </motion.button>

      <motion.div
        initial={{ display: 'none' }}
        animate={{
          display: isModal ? 'block' : 'none'
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className={`fixed inset-0 z-50 h-full w-full bg-black/20 p-2 ${isModal ? 'backdrop-blur-sm' : ''}`}>
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: isModal ? 1 : 0.4, opacity: isModal ? 1 : 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 100 }}
          className="relative w-full px-2 py-3 bg-white rounded-lg md:py-7 md:px-5 shadow-3xl md:w-96 md:left-1/2 top-1/2 md:-translate-1/2">
          <button onClick={handleIsModal} className="cursor-pointer absolute right-4 top-4 h-9 w-9 rounded-full grid place-items-center bg-[#c90606] hover:bg-[var(--accent-hover)] text-white">
            <FontAwesomeIcon icon={faTimes} className="size-6" />
          </button>
          <h1 className="mb-5 text-lg font-semibold text-center md:text-xl">Chat with <span className="text-[var(--accent)]">Codelab</span></h1>
          <div className="w-full mb-5">
            <input type="number" id="your-phone-number" placeholder="Enter your number" className="w-full py-2.5 px-2 rounded-lg border border-gray-200" />
          </div>
          <p className="pb-1 mb-5 text-sm text-center text-gray-500">Live representative responds immediately</p>
          <button className='text-center mx-auto bg-[#c90606] hover:bg-[var(--accent-hover)] text-white transition-all duration-90 ease-in-out lg:text-base text-sm px-3 lg:px-10 py-2 lg:py-3 rounded-lg font-semibold hidden md:block'>
            Let's Chat
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default TextUsBtn;


export const ChatWithCodelab = () => {
  return (
    <></>
  )
}