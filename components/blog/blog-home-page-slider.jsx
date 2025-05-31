'use client'
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const img = [
  {
    title: 'Boost Local SEO Rapid URL Indexer Fast',
    description: 'Discover how to quickly and efficiently get your local business URLs indexed by search engines with Rapid URL Indexer. This guide covers its cost-effective approach, high indexing rate, and features like the WordPress plugin for streamlined local SEO, helping you improve visibility without complex technicalities.',
    img: '/images/blog/blogs/seo.jpg',
    slug: 'api-shift-select-definition',
  },
  {
    title: 'B2C Marketing Unleashed Building Lasting Customer Relationships',
    description: 'Learn the strategies to build strong, lasting relationships with your customers through effective B2C marketing. This article delves into personalization, empathetic communication, and data-driven approaches to drive sales and foster loyalty.',
    img: '/images/blog/blogs/b2b-marketing.jpg',
    slug: 'b2c-marketing-customer-relationships',
  },
  {
    title: 'How to Become a Machine Learning Engineer in 2025?',
    description: 'Explore the roadmap to becoming a successful Machine Learning Engineer in 2025. This guide outlines essential skills, programming languages like Python, mathematical concepts such as linear algebra and probability, and the importance of practical projects.',
    img: '/images/blog/blogs/machine-learning.jpg',
    slug: 'backend-developer-career-guide-2025',
  },
  {
    title: 'Best Android App Development Agency in 2025 – why Code Lab',
    description: 'Discover why Code Lab stands out as a leading Android app development agency in 2025. This article highlights our expertise in Agile development, advanced technologies, and commitment to delivering user-friendly, bug-free Android applications.',
    img: '/images/blog/blogs/android-development.jpg',
    slug: 'become-ml-engineer-2025',
  },
  {
    title: 'Best B2B Digital Marketing Agency for Scaling Your Businesses',
    description: 'Find the best B2B digital marketing agencies in 2025 focused on helping businesses scale. This guide compares top agencies and their strategies for driving demand, improving conversions, and building brand awareness through SEO, content marketing, and paid advertising.',
    img: '/images/blog/blogs/b2c-marketing.jpg',
    slug: 'become-successful-flutter-developer-2025',
  },
  {
    title: 'HTML Viewer Meaning Usage and PDF Conversion',
    description: 'Understand the meaning and usage of HTML viewers and the significance of HTML to PDF conversion. This article covers why accurate conversion is vital for generating professional documents like invoices and receipts, and provides tips for optimizing the conversion process.',
    img: '/images/blog/blogs/html-viewer.jpg',
    slug: 'beginners-social-media-marketing-firms',
  },
  {
    title: 'On Page SEO services in 2025: The Ultimate Guide',
    description: 'Dive into the ultimate guide for On-Page SEO services in 2025. Learn essential techniques like optimizing content with relevant key_words, crafting compelling meta descriptions, structuring pages with headings, and integrating internal and external links to boost your search engine rankings.',
    img: '/images/blog/blogs/on-page-seo.jpg',
    slug: 'best-android-dev-agency-codelab',
  },
  {
    title: 'What is API Shift Select vs. API Definition? A Strategic Approach',
    description: 'Explore the strategic differences between API Shift Select and API Definition. This article explains how APIs simplify and accelerate application development, enhance security, and discusses various API types, from open to composite APIs, in modern business applications.',
    img: '/images/blog/blogs/api.jpg',
    slug: 'best-b2b-digital-marketing-agency',
  },
  {
    title: 'What is MEAN Stack? Learn Full-Stack JavaScript Development',
    description: 'Uncover the power of the MEAN stack for full-stack JavaScript development. This article defines each component—MongoDB, Express.js, AngularJS, and Node.js—and explains how this versatile, open-source stack is used to build a wide range of scalable web applications.',
    img: '/images/blog/blogs/mern-stack.jpg',
    slug: 'html-viewer-pdf-conversion',
  },
  {
    title: 'Top Blog Writing Services with SEO Focus in 2025',
    description: 'Discover the top blog writing services in 2025 that prioritize SEO to help your content rank higher. This guide compares leading agencies and their expertise in creating compelling, data-driven content strategies for businesses to attract and convert prospects.',
    img: '/images/blog/blogs/blog-post-writting.jpg',
    slug: 'local-seo-rapid-url-indexer',
  },
  {
    title: 'QA Tester Vacancy 2025 – Jobs, Salary & Skills Guide',
    description: 'Find out everything you need to know about QA Tester vacancies in 2025, including job roles, average salaries, and essential skills. This guide covers different types of QA testing and recommended degrees to build a successful career in quality assurance.',
    img: '/images/blog/blogs/qa-testing-1.jpg',
    slug: 'mearn-stack-javascript-development',
  },
  {
    title: '27 Top Figma Alternatives (2025) – Open Source',
    description: 'Explore 27 top open-source Figma alternatives in 2025 for UI/UX design. This list includes tools like Penpot, Lunacy, and Adobe XD, offering diverse features for prototyping, wireframing, and collaborative design, catering to various design workflows.',
    img: '/images/blog/blogs/figma-alternatives.jpg',
    slug: 'on-page-seo-ultimate-guide-2025',
  },
  {
    title: 'Top Custom Web App Development Companies Compared in 2025',
    description: 'Compare the top custom web app development companies in 2025 to find the best partner for your business. This overview highlights leading firms known for their technological proficiency, award-winning services, and ability to deliver high-quality, tailored web applications.',
    img: '/images/blog/blogs/web-designing.jpg',
    slug: 'qa-tester-jobs-salary-2025',
  },
  {
    title: 'A Beginner’s Guide to Social Media Marketing Firms',
    description: 'Embark on your journey into social media marketing with this beginner\'s guide to social media marketing firms. Learn about strategy development, content creation, analytics, paid advertising, and community building to foster brand growth and drive sales.',
    img: '/images/blog/blogs/social-media-marketing.jpg',
    slug: 'top-blog-writing-seo-2025',
  },
  {
    title: 'Backend Developer – A Guide to Build Your Career in 2025',
    description: 'A comprehensive guide to building a successful career as a Backend Developer in 2025. Learn about essential programming fundamentals, choosing the right backend language (Python, Node.js, Java), understanding databases, mastering frameworks, and building practical projects.',
    img: '/images/blog/blogs/back-end-development.jpg',
    slug: 'top-custom-web-app-dev-2025',
  },
  {
    title: 'Transforming Digital Experiences with UI UX Design Services',
    description: 'Discover how UI/UX design services are transforming digital experiences by focusing on user satisfaction, usability, and aesthetics. This article explores the difference between UI and UX, the role of a UX designer, and essential skills for creating meaningful interactions.',
    img: '/images/blog/blogs/ui-ux-design.jpg',
    slug: 'top-figma-alternatives-2025',
  },
  {
    title: 'How to Become a Successful Flutter Developer in 2025',
    description: 'Learn how to become a successful Flutter developer in 2025 with this comprehensive guide. It covers key features of Flutter like cross-platform development and hot reload, and outlines steps to master Dart, build real-world projects, and integrate backend services.',
    img: '/images/blog/blogs/flutter-logo.jpeg',
    slug: 'transforming-digital-experiences-ui-ux',
  },
]
const BlogHomePageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleTimer = () => {
      setPrevIndex(currentIndex);
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % img.length);
    };
    const intervalId = setInterval(handleTimer, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, img.length]);
  return (
    <div className='relative w-full h-full'>
      <div className="relative w-full h-full overflow-hidden bg-amber-500">
        <AnimatePresence mode="wait">
          {prevIndex !== null && (
            <motion.div
              key={`prev-${prevIndex}`}
              custom={direction}
              initial={{ x: 0 }}
              animate={{ x: direction === 1 ? '-100%' : '100%' }}
              exit={{}}
              transition={{ duration: 0.5 }}
              className=" inset-0 w-full h-full z-0"
            >
              <div className={`relative w-full h-full`}>
                <Image
                  fill
                  src={img[prevIndex].img}
                  alt={img[prevIndex].title}
                  className="object-cover object-center w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={`current-${currentIndex}`}
            custom={direction}
            initial={{ x: direction === 1 ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{}}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full z-10"
          >
            <div className="relative h-full w-full">
              <Image
                fill
                src={img[currentIndex].img}
                alt={img[currentIndex].title}
                className="object-cover object-center w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='z-20 absolute inset-0 flex items-center pt-8 bg-black/50'>
        <div className='w-full md:pl-32 p-2 md:w-3/4'>
          <div className='w-full max-sm:pl-8 p-7 md:p-10 overflow-hidden bg-white/10 min-h-50 md:min-h-56 backdrop-blur-xl rounded-2xl'>
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}>
                <h1 className='text-xl font-bold text-white sm:text-2xl md:text-4xl'>{img[currentIndex].title.length > 35 ? `${img[currentIndex].title.substring(0, 35)}...` : img[currentIndex].title}</h1>
                <p className='mt-5 text-sm text-gray-300'>{img[currentIndex].description.length > 220 ? `${img[currentIndex].description.substring(0, 220)}...` : img[currentIndex].description}</p>
                <Link href={`blog/${img[currentIndex].slug}`} className='w-fit text-center mt-3 bg-[#c90606] hover:bg-[var(--accent-hover)] text-white transition-all duration-90 ease-in-out lg:text-base text-sm px-3 lg:px-7 py-2 lg:py-2 rounded-lg font-semibold inline-block'>
                  Read more
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div >
  );
}

export default BlogHomePageSlider;
