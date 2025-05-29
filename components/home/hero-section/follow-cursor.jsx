'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollow() {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updatePosition = () => {
      const rect = container.getBoundingClientRect();
      const width = window.innerWidth;

      if (width < 768) {
        // Bottom-right corner for mobile
        setPos({ x: rect.width - 48, y: rect.height - 48 });
        // Remove any previous listeners
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      } else {
        // Center for larger screens
        setPos({ x: rect.width / 2, y: rect.height / 2 });
        // Add listeners only on desktop
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);
      }
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const clampedX = Math.max(0, Math.min(x, rect.width));
      const clampedY = Math.max(0, Math.min(y, rect.height));
      setPos({ x: clampedX, y: clampedY });
    };

    const handleMouseLeave = () => {
      const rect = container.getBoundingClientRect();
      setPos({ x: rect.width / 2, y: rect.height / 2 });
    };

    updatePosition(); // Set initial position
    window.addEventListener('resize', updatePosition); // Respond to resizes

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);


  return (
    <div ref={containerRef} className="ms-auto md:w-80 md:h-80 w-20 h-20 z-10">
      <motion.div
        className="sidebar-form-open absolute bg-[var(--accent)] rounded-full md:w-36 md:h-36 h-20 w-20 cursor-pointer md:p-2 text-center text-xs md:text-lg text-white grid place-items-center hover:bg-[var(--secondry-hover)] hover:text-black duration-100"
        animate={{ x: pos.x - 64, y: pos.y - 64 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div>
          <span className="inline-block rotate-45 text-xl md:text-2xl font-bold">↑</span>
          <p>let's discus your idea</p>
        </div>
      </motion.div>
    </div>
  );
}
