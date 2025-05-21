"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { uuidv7 } from "uuidv7";
import Image from "next/image";

const images = [
  { title: "Idea", img: "/process-steps/img-1.jpg" },
  { title: "Design", img: "/process-steps/img-2.jpg" },
  { title: "Develop", img: "/process-steps/img-3.jpg" },
  { title: "Test", img: "/process-steps/img-4.webp" },
  { title: "Launch", img: "/process-steps/img-5.jpg" },
  { title: "Support", img: "/process-steps/img-6.webp" },
];

export default function TimelineScrollImages() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Total scroll range is from 0 to 1
  const step = 100 / images.length; // e.g., 100 / 6 = 16.66...

  const translateY = useTransform(
    scrollY,
    [744, 2332],
    [`0%`, `-${(images.length - 1) * 100}%`]
  );

  return (
    <motion.div
      initial={{ y: 100, x: -50 }}
      whileInView={{ y: 0, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      viewport={{ once: true }}
      ref={containerRef}
      className="h-[calc(100vh-100px)] w-72 ms-auto sticky top-[90px] overflow-hidden rounded-full bg-green-500"
    >
      <motion.div
        style={{ translateY }}
        className="relative w-full h-full"
      >
        {images.map((item, i) => (
          <div
            key={uuidv7()}
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: `translateY(${i * 100}%)` }}
          >
            <div className="relative z-10 mb-4 image-title">
              {/* <h2 className="text-2xl font-bold text-[#212a3b]">{item.title}</h2> */}
            </div>
            <Image
              width={284.875}
              height={641}
              src={item.img}
              alt={item.title}
              className="absolute top-0 left-0 object-cover w-full h-full"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
