'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { uuidv7 } from 'uuidv7';
const blog_arr = [
  {
    title: 'Boost Local SEO Rapid URL Indexer Fast',
    description: 'Discover how to quickly and efficiently get your local business URLs indexed by search engines with Rapid URL Indexer. This guide covers its cost-effective approach, high indexing rate, and features like the WordPress plugin for streamlined local SEO, helping you improve visibility without complex technicalities.',
    img: '/images/blog/blogs/seo.jpg',
    url: 'https://codelab.pk/boost-local-seo-rapid-url-indexer-fast/',
    keyWords: 'Wordpress',
  },
  {
    title: 'B2C Marketing Unleashed Building Lasting Customer Relationships',
    description: 'Learn the strategies to build strong, lasting relationships with your customers through effective B2C marketing. This article delves into personalization, empathetic communication, and data-driven approaches to drive sales and foster loyalty.',
    img: '/images/blog/blogs/b2c-marketing.jpg',
    url: 'https://codelab.pk/b2c-marketing-unleashed-building-lasting-customer-relationships/',
    keyWords: 'Social Media Marketing',
  },
  {
    title: 'How to Become a Machine Learning Engineer in 2025?',
    description: 'Explore the roadmap to becoming a successful Machine Learning Engineer in 2025. This guide outlines essential skills, programming languages like Python, mathematical concepts such as linear algebra and probability, and the importance of practical projects.',
    img: '/images/blog/blogs/machine-learning.jpg',
    url: 'https://codelab.pk/how-to-become-a-machine-learning-engineer-in-2025/',
    keyWords: 'Machine Development',
  },
  {
    title: 'Best Android App Development Agency in 2025 – why Code Lab',
    description: 'Discover why Code Lab stands out as a leading Android app development agency in 2025. This article highlights our expertise in Agile development, advanced technologies, and commitment to delivering user-friendly, bug-free Android applications.',
    img: '/images/blog/blogs/android-development.jpg',
    url: 'https://codelab.pk/best-android-app-development-agency-in-2025-why-code-lab/',
    keyWords: 'Web Development',
  },
  {
    title: 'Best b2b Digital Marketing Agency for Scaling Your Businesses',
    description: 'Find the best B2B digital marketing agencies in 2025 focused on helping businesses scale. This guide compares top agencies and their strategies for driving demand, improving conversions, and building brand awareness through SEO, content marketing, and paid advertising.',
    img: '/images/blog/blogs/b2b-marketing.jpg',
    url: 'https://codelab.pk/best-b2b-digital-marketing-agency-for-scaling-your-businesses/',
    keyWords: 'Social Media Marketing',
  },
  {
    title: 'HTML Viewer Meaning Usage and PDF Conversion',
    description: 'Understand the meaning and usage of HTML viewers and the significance of HTML to PDF conversion. This article covers why accurate conversion is vital for generating professional documents like invoices and receipts, and provides tips for optimizing the conversion process.',
    img: '/images/blog/blogs/html-viewer.jpg',
    url: 'https://codelab.pk/html-viewer-meaning-usage-and-pdf-conversion/',
    keyWords: 'Web Development',
  },
  {
    title: 'On Page SEO services in 2025: The Ultimate Guide',
    description: 'Dive into the ultimate guide for On-Page SEO services in 2025. Learn essential techniques like optimizing content with relevant keywords, crafting compelling meta descriptions, structuring pages with headings, and integrating internal and external links to boost your search engine rankings.',
    img: '/images/blog/blogs/on-page-seo.jpg',
    url: 'https://codelab.pk/on-page-seo-services-in-2025-the-ultimate-guide/',
    keyWords: 'Wordpress',
  },
  {
    title: 'What is API Shift Select vs. API Definition? A Strategic Approach',
    description: 'Explore the strategic differences between API Shift Select and API Definition. This article explains how APIs simplify and accelerate application development, enhance security, and discusses various API types, from open to composite APIs, in modern business applications.',
    img: '/images/blog/blogs/api.jpg',
    url: 'https://codelab.pk/what-is-api-shift-select-vs-api-definition-a-strategic-approach/',
    keyWords: 'Web Development, Wordpress',
  },
  {
    title: 'What is MEAN Stack? Learn Full-Stack JavaScript Development',
    description: 'Uncover the power of the MEAN stack for full-stack JavaScript development. This article defines each component—MongoDB, Express.js, AngularJS, and Node.js—and explains how this versatile, open-source stack is used to build a wide range of scalable web applications.',
    img: '/images/blog/blogs/mern-stack.jpg',
    url: 'https://codelab.pk/what-is-mean-stack-learn-full-stack-javascript-development/',
    keyWords: 'Web Development',
  },
  {
    title: 'Top Blog Writing Services with SEO Focus in 2025',
    description: 'Discover the top blog writing services in 2025 that prioritize SEO to help your content rank higher. This guide compares leading agencies and their expertise in creating compelling, data-driven content strategies for businesses to attract and convert prospects.',
    img: '/images/blog/blogs/blog-post-writting.jpg',
    url: 'https://codelab.pk/top-blog-writing-services-with-seo-focus-in-2025/',
    keyWords: 'Wordpress',
  },
  {
    title: 'QA Tester Vacancy 2025 – Jobs, Salary & Skills Guide',
    description: 'Find out everything you need to know about QA Tester vacancies in 2025, including job roles, average salaries, and essential skills. This guide covers different types of QA testing and recommended degrees to build a successful career in quality assurance.',
    img: '/images/blog/blogs/bug-detection.png',
    url: 'https://codelab.pk/qa-tester-vacancy-2025-jobs-salary-skills-guide/',
    keyWords: 'General Post',
  },
  {
    title: '27 Top Figma Alternatives (2025) – Open Source',
    description: 'Explore 27 top open-source Figma alternatives in 2025 for UI/UX design. This list includes tools like Penpot, Lunacy, and Adobe XD, offering diverse features for prototyping, wireframing, and collaborative design, catering to various design workflows.',
    img: '/images/blog/blogs/figma-alternatives.jpg',
    url: 'https://codelab.pk/27-top-figma-alternatives-2025-open-source/',
    keyWords: 'Web Designing',
  },
  {
    title: 'Top Custom Web App Development Companies Compared in 2025',
    description: 'Compare the top custom web app development companies in 2025 to find the best partner for your business. This overview highlights leading firms known for their technological proficiency, award-winning services, and ability to deliver high-quality, tailored web applications.',
    img: '/images/blog/blogs/web-designing.jpg',
    url: 'https://codelab.pk/top-custom-web-app-development-companies-compared-in-2025/',
    keyWords: 'Web Designing',
  },
  {
    title: 'A Beginner’s Guide to Social Media Marketing Firms',
    description: 'Embark on your journey into social media marketing with this beginner\'s guide to social media marketing firms. Learn about strategy development, content creation, analytics, paid advertising, and community building to foster brand growth and drive sales.',
    img: '/images/blog/blogs/social-media-marketing.jpg',
    url: 'https://codelab.pk/a-beginners-guide-to-social-media-marketing-firms/',
    keyWords: 'Social Media Marketing',
  },
  {
    title: 'Backend Developer – A Guide to Build Your Career in 2025',
    description: 'A comprehensive guide to building a successful career as a Backend Developer in 2025. Learn about essential programming fundamentals, choosing the right backend language (Python, Node.js, Java), understanding databases, mastering frameworks, and building practical projects.',
    img: '/images/blog/blogs/back-end-development.jpg',
    url: 'https://codelab.pk/backend-developer-a-guide-to-build-your-career-in-2025/',
    keyWords: 'Web Development',
  },
  {
    title: 'Transforming Digital Experiences with UI UX Design Services',
    description: 'Discover how UI/UX design services are transforming digital experiences by focusing on user satisfaction, usability, and aesthetics. This article explores the difference between UI and UX, the role of a UX designer, and essential skills for creating meaningful interactions.',
    img: '/images/blog/blogs/ui-ux-design.jpg',
    url: 'https://codelab.pk/transforming-digital-experiences-with-ui-ux-design-services/',
    keyWords: 'Website Design',
  },
  {
    title: 'How to Become a Successful Flutter Developer in 2025',
    description: 'Learn how to become a successful Flutter developer in 2025 with this comprehensive guide. It covers key features of Flutter like cross-platform development and hot reload, and outlines steps to master Dart, build real-world projects, and integrate backend services.',
    img: '/images/blog/blogs/flutter-logo.jpeg',
    url: 'https://codelab.pk/how-to-become-a-successful-flutter-developer-in-2025/',
    keyWords: 'Web Development',
  },
];
const BlogCard = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) { setSlidesPerView(1) }
      else if (width < 768) { setSlidesPerView(2); }
      else if (width < 1024) { setSlidesPerView(3); }
      else { setSlidesPerView(4) }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Swiper
        navigation={{
          nextEl: '.blog-next',
          prevEl: '.blog-prev',
        }}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
      >
        {
          blog_arr.map((item) => (
            <SwiperSlide
              key={uuidv7()}
              className="flex-shrink-0 p-3 bg-gray-200 border border-gray-300 rounded-lg cursor-pointer w-80 hover:shadow-lg"
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  height={300}
                  width={300}
                  alt={item.title}
                  className="object-cover w-full duration-300 h-60"
                  src={item.img}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold md:text-xl">
                  {item.title.length > 35 ? `${item.title.substring(0, 35)}...` : item.title}
                </h3>
                <p className="text-sm mt-1.5">
                  {item.description.length > 150 ? `${item.description.substring(0, 150)}...` : item.description}
                </p>
                <Link
                  href={item.url}
                  className="mt-3 bg-[#c90606] hover:bg-red-700 text-white transition-all duration-150 ease-in-out text-sm px-3 py-2 rounded-lg font-semibold hidden md:block text-center"
                >
                  Read more
                </Link>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default BlogCard;
