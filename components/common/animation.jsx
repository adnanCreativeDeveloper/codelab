'use client'
import { motion } from "framer-motion";

const Animation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90, scale: 0.6 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, delay: 0.2 }}
      viewport={{ once: true }}>
      {children}
    </motion.div>
  );
}

export default Animation;
