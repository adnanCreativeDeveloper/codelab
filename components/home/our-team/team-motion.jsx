'use client'

import { motion } from "framer-motion";


const TeamMotion = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.1 }}
      animate={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ stiffness: 100, type: "spring" }}>
      {children}
    </motion.div>
  );
}

export default TeamMotion;
