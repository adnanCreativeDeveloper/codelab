'use client'
import placeholders from '@/lib/placeholders';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CreateFloatAnimation = () => {

  const createFloatAnimation = (delay = 0, yRange = 10, rotateRange = 5) => ({
    animate: {
      y: [0, -yRange, 0, yRange, 0],
      rotate: [0, rotateRange, -rotateRange, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4 + Math.random() * 3,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  });

  const floatingImages = [
    { src: '/images/services/services-hero-section/figma.png', alt: 'figma', top: '10', left: '10', delay: 0, yRange: 10, rotateRange: 5 },
    { src: '/images/services/services-hero-section/html.png', alt: 'html', top: '32', left: '85', delay: 1, yRange: 10, rotateRange: 5 },
    { src: '/images/services/services-hero-section/photoshop.png', alt: 'photoshop', top: '75', left: '82', delay: 2, yRange: 10, rotateRange: 5 },
    { src: '/images/services/services-hero-section/php.png', alt: 'php', top: '20', left: '20', delay: 0.5, yRange: 15, rotateRange: 3 },
    { src: '/images/services/services-hero-section/unknown-1.png', alt: 'unknown1', top: '60', left: '15', delay: 1.2, yRange: 8, rotateRange: 6 },
    { src: '/images/services/services-hero-section/unknown-2.png', alt: 'unknown2', top: '70', left: '50', delay: 0.3, yRange: 12, rotateRange: 7 },
    { src: '/images/services/services-hero-section/unknown-3.png', alt: 'unknown3', top: '30', left: '65', delay: 1.5, yRange: 9, rotateRange: 4 },
    { src: '/images/services/services-hero-section/wordpress.png', alt: 'wordpress', top: '10', left: '35', delay: 2.5, yRange: 13, rotateRange: 5 },
  ];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      {floatingImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: `${image.top}%`, left: `${image.left}%` }}
          variants={createFloatAnimation(image.delay, image.yRange, image.rotateRange)}
          animate="animate"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={48}
            height={48}
            className="object-cover size-12"
            placeholder='blur'
            blurDataURL={placeholders[image.src]}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default CreateFloatAnimation;
