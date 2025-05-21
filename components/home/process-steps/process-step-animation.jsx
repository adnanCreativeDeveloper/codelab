import { motion } from 'framer-motion';
import React from 'react';

const ProcessStepAnimation = ({ dynamicX, children }) => {

  return (
    <motion.div
      initial={{ y: 100, x: dynamicX }}
      whileInView={{ y: 0, x: dynamicX }}
      transition={{ duration: 0.3, delay: 0.2 }}
      viewport={{ once: true }}>
      {children}
    </motion.div>
  );
}

export default ProcessStepAnimation;
