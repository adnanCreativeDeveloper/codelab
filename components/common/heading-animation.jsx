'use client'
import { motion } from "framer-motion";

const HeadingAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      viewport={{ once: true }}>
      {children}
    </motion.div>
  );
}

export default HeadingAnimation;
