import Blog from '@/components/blog/blog';
import React from 'react';

export const metadata = {
  title: "Tech Blog | CodeLab",
  description: "Stay updated with the latest tech trends, coding tutorials, and career tips in software development, web design, and digital technologies at CodeLab.",
};


const Page = () => {
  return (
    <div>
      <Blog />
    </div>
  );
}

export default Page;
