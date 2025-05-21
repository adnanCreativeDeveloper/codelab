import LetsTalk from '@/components/services/lets-talk/lets-talk';
import OurServices from '@/components/services/services/our-services';
import React from 'react';
import Service from './service';

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
