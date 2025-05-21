'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { uuidv7 } from "uuidv7";
const process_steps = [
  {
    title: "Project Planning & Requirements",
    description:
      "Effective project planning ensures clear objectives, resource allocation, and structured execution, while requirement analysis identifies key functionalities and expectations.",
    img: "/images/development-process/point-1.png",
    styles: {
      top: 'top-[5.5rem]',
      cardBg: "bg-[#090914]",
      titleBg: "bg-[#fffefd]",
      titleText: "text-[#090914]",
      descText: "text-[#ebe7e0]",
      figureBg: "bg-[#2a2d34]",
    },
  },
  {
    title: "Sprint Execution Process",
    description:
      "Sprint execution involves breaking work into manageable tasks, prioritizing them, and ensuring efficient completion within the sprint cycle timeframe.",
    img: "/images/development-process/point-2.png",
    styles: {
      top: 'top-[9.5rem]',
      cardBg: "bg-[#fffefd]",
      titleBg: "bg-[#090914]",
      titleText: "text-[#fffefd]",
      descText: "text-[#090914]",
      figureBg: "bg-[#ebe7e0]",
    },
  },
  {
    title: "Daily Team Stand‑ups",
    description:
      "Short, focused daily meetings help teams align on progress, discuss blockers, update priorities, and ensure smooth collaboration throughout the sprint.",
    img: "/images/development-process/point-3.png",
    styles: {
      top: 'top-[12.5rem]',
      cardBg: "bg-[#f5f2f2]",
      titleBg: "bg-[#090914]",
      titleText: "text-[#fffefd]",
      descText: "text-[#090914]",
      figureBg: "bg-[#faf9f9]",
    },
  },
  {
    title: "Review & Continuous Feedback",
    description:
      "Regular review meetings and feedback loops foster continuous improvement, ensuring project deliverables align with expectations and necessary refinements are made.",
    img: "/images/development-process/point-4.png",
    styles: {
      top: 'top-[15.5rem]',
      cardBg: "bg-[#ebe7e0]",
      titleBg: "bg-[#090914]",
      titleText: "text-[#fffefd]",
      descText: "text-[#090914]",
      figureBg: "bg-[#f6f4f2]",
    },
  },
];
const ProcessSteps = () => {
  return (
    <motion.div initial={{ scale: 0.7 }} whileInView={{ scale: 1 }} transition={{ duration: 0.2 }} viewport={{ once: true }}>
      {process_steps.map((item, index) => (
        <motion.div
          key={uuidv7()}
          className={`
            ${item.styles.cardBg} ${item.styles.top} drop-shadow-2xl py-4 sm:py-16 md:py-20 px-4 sm:px-8 md:px-14
            grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 rounded-4xl mb-16 last:mb-0 sticky
          `}
        >
          <div>
            <div
              className={`
                ${item.styles.titleBg} ${item.styles.titleText} flex-shrink-0
                h-14 w-14 sm:w-16 sm:h-16 md:h-20 md:w-20 rounded-full
                grid place-items-center
              `}
            >
              <p className="text-xs font-semibold sm:text-sm md:text-lg">
                STEP {index + 1}
              </p>
            </div>

            <div className="h-48 md:h-54">
              <h1 className={`text-xl sm:text-3xl md:text-5xl font-bold mt-7 md:mt-8 ${item.styles.descText}`}>
                {item.title}
              </h1>
              <p className={`mt-3 sm:mt-5 md:mt-8 text-justify ${item.styles.descText}`}>
                {item.description}
              </p>
            </div>
          </div>
          <div>
            <div
              className={`
                ${item.styles.figureBg} rounded-3xl py-4 md:py-8
                w-full h-full relative overflow-hidden
              `}
            >
              <Image
                src={item.img}
                width={262.375}
                height={300}
                alt={item.title}
                className="w-auto mx-auto h-52 md:h-auto md:w-auto"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProcessSteps;
