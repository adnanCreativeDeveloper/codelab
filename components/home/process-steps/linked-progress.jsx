"use client"
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion"

export default function ScrollLinked() {
  const { scrollY } = useScroll()
  // const { scrollY } = useScroll()

  // useMotionValueEvent(scrollY  Progress, "change", (value) => {console.log(value);})

  // 744
  // 2332

  // Scale in Y direction from 0 to 1 between scrollY 523 and 1396
  const scaleY = useTransform(scrollY, [744, 2332], [0, 1])

  return (
    <motion.div
      style={{ scaleY }}
      className="w-2 h-full bg-[var(--accent)] origin-top"
    />
  )
}
