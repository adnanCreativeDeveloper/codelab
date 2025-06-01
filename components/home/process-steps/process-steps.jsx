"use client";
import { useRef } from "react";
import ScrollLinked from "./linked-progress"
import { motion } from "framer-motion";
import { uuidv7 } from "uuidv7";
import TimelineScrollImages from "./timline-scroll-images";
import HeadingAnimation from "@/components/common/heading-animation";

const process_steps = [
  { title: "Idea", id: uuidv7(), description: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.", },
  { title: "Design", id: uuidv7(), description: "Creating a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.", },
  { title: "Develop", id: uuidv7(), description: "Building your solution with modern technology and efficient coding practices to ensure scalability and performance.", },
  { title: "Test", id: uuidv7(), description: "Comprehensive quality assurance to identify and resolve issues before launch, ensuring a smooth user experience.", },
  { title: "Launch", id: uuidv7(), description: "Strategic deployment of your product to market with careful monitoring and support during the critical initial release.", },
  { title: "Support", id: uuidv7(), description: "Ongoing maintenance and updates to keep your product running smoothly and evolving with your business needs.", }
]


const ProcessSteps = () => {
  const containerRef = useRef(null);
  return (
    <section className='container p-2 mx-auto py-14' ref={containerRef}>
      <HeadingAnimation>
        <div className='pb-16'>
          <h1
            className='font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--surface)] text-center'
          >
            Smart <span className='text-[var(--accent)]'>Tech</span> - Simple Process
          </h1>
          <p
            className='text-[var(--surface)] text-sm sm:text-base md:text-lg text-center mt-2 sm:mt-3 md:mt-5'
          >
            Bringing Your Vision to Life, Step by Step
          </p>
        </div>
      </HeadingAnimation>
      <div
        className='grid grid-cols-1 gap-3 md:grid-cols-12'>

        <div className='col-span-1 md:col-span-5 flex items-center gap-4 sm:gap-7 md:gap-10 relative pl-5 overflow-hidden'>
          <motion.div initial={{ y: 100, x: 50 }}
            whileInView={{ y: 0, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 sm:gap-7 md:gap-10 h-full">
            <div className='w-5 h-full bg-gray-200 rounded-3xl'>
              <ScrollLinked />
            </div>
            <div>
              {process_steps.map((item) => (
                <div
                  key={item.id}
                  className={`pt-13 sm:pt-20 md:pt-40 first:pt-0`}
                >
                  <h1 className='font-bold text-2xl sm:text-3xl md:text-5xl text-[var(--accent)]'>{item.title}</h1>
                  <p className='pt-4 font-semibold sm:pt-7 md:pt-10'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className='hidden col-span-1 md:col-span-2 md:block'></div>
        <div className='hidden col-span-1 md:col-span-4 md:block'>
          <TimelineScrollImages />
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;