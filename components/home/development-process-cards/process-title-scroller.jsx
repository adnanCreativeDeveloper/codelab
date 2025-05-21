'use client';

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const ProcesstItleScroller = () => {
  const { scrollY } = useScroll();
  // useMotionValueEvent(scrollY, "change", (value) => { console.log(value); })
  const xTransform = useTransform(scrollY, [1715, 3332], [0, -200]); // Added negative value for left movement

  return (
    <motion.div
      className="relative w-full overflow-hidden flex items-center 
        h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[50vh] overflow-x-scroll 
        [&::-webkit-scrollbar]:h-0">
      <motion.h1
        initial={{ scaleX: 0.6 }}
        whileInView={{ scaleX: 1 }}
        style={{ x: xTransform }}
        viewport={{ once: true }}
        transition={{ stiffness: 100, type: "spring" }}
        className='text-4xl md:text-2xl lg:text-8xl text-[var(--surface)] text-center text-nowrap'>
        How it Works - How it Works - How it Works - How it Works - How it  Works - How it Works - How it Works - How it Works
      </motion.h1>
    </motion.div>
  );
}

export default ProcesstItleScroller;
