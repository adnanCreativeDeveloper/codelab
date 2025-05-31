import LetsTalk from '@/components/services/lets-talk/lets-talk';
import OurServices from '@/components/services/services/our-services';
import React from 'react';
import Service from './service';

export const metadata = {
  title: "Our Services | CodeLab",
  description: "Explore CodeLab’s wide range of IT training services, including web development, software engineering, UI/UX design, and more. Learn by building real-world projects.",
};


const Page = () => {
  return (
    <div>
      <LetsTalk />
      <OurServices />
      <Service />
    </div>
  );
}

export default Page;
