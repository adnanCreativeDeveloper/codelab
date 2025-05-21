/**
 * The `DraggableCarousel` component in JavaScript React allows for horizontal dragging of its children
 * within specified constraints based on window width.
 * @returns The `DraggableCarousel` component is being returned. It is a functional component that
 * utilizes Framer Motion for drag functionality. The component dynamically adjusts the drag
 * constraints based on the window width to create a draggable carousel effect for the children
 * components passed to it.
 */
'use client'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const DraggableCarousel = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getDragConstraints = () => {
    if (windowWidth < 640) {
      return windowWidth <= 320 ? -1500 :
        windowWidth <= 375 ? -1700 :
          windowWidth <= 425 ? -1900 : -1200;
    } else if (windowWidth < 768) {
      return -700;
    } else if (windowWidth < 1024) {
      return -800;
    } else {
      return -900;
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{
        left: getDragConstraints(),
        right: 0
      }}
      dragElastic={0.9}
      dragMomentum={true}
    >
      {children}
    </motion.div>
  );
};

export default DraggableCarousel;
