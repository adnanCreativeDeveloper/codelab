"use client"
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion"
import { useEffect, useState } from "react";

export default function ScrollLinked() {
  const { scrollY } = useScroll()
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleWidth = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  const isMobile = width < 768;
  const startScroll = isMobile ? 689 : 744;
  const endScroll = isMobile ? 1590 : 2332;
  const scaleY = useTransform(scrollY, [startScroll, endScroll], [0, 1])

  return (
    <motion.div
      style={{ scaleY }}
      className="w-2 h-full bg-[var(--accent)] origin-top"
    />
  )
}
