'use client'

import placeholders from "@/lib/placeholders";
import { motion } from "framer-motion";
import Image from "next/image";
import { uuidv7 } from "uuidv7";
const process_steps = [
  {
    title: "Project Planning & Requirements",
    id: uuidv7(),
    description:
      "Beyond initial scope, our adaptive project planning incorporates rolling wave forecasting and value stream mapping to ensure continuous alignment with market shifts and business outcomes.",
    img: "/images/home/development-process/point-1.png",
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
    id: uuidv7(),
    description:
      "Our sprint execution leverages AI-powered backlog refinement and real-time dependency mapping, optimizing resource utilization and minimizing cross-team integration friction.",
    img: "/images/home/development-process/point-2.png",
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
    id: uuidv7(),
    description:
      "Our dynamic stand-ups integrate sentiment analysis and proactive risk identification, transforming quick updates into actionable insights for immediate team optimization and morale boosting.",
    img: "/images/home/development-process/point-3.png",
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
    id: uuidv7(),
    description:
      "Our feedback loop extends beyond traditional reviews, incorporating user behavior analytics and predictive quality assessments to inform iterative enhancements and future-proofing.",
    img: "/images/home/development-process/point-4.png",
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
          key={item.id}
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
                w-full relative overflow-hidden h-96 grid place-items-center
              `}
            >
              <Image
                src={item.img}
                width={255}
                height={256}
                alt={item.title}
                placeholder='blur'
                blurDataURL={placeholders[item.img]}
                className="w-auto mx-auto object-contain h-full md:h-auto md:w-auto"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProcessSteps;
