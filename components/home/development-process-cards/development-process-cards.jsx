import React from 'react';
import ProcessTitleScroller from './process-title-scroller';
import ProcessSteps from './process-steps';

const DevelopmentProcessCards = () => {
  return (
    <section className='max-sm:p-2'>
      <div className='
      sm:max-w-[calc(40rem+75px)] 
      md:max-w-[calc(48rem+75px)] 
      lg:max-w-[calc(64rem+75px)] 
      xl:max-w-[calc(80rem+75px)] 
      2xl:max-w-[calc(96rem+75px)] 
      mx-auto
      overflow-hidden!'>
        <ProcessTitleScroller />
      </div>
      <div className='container mx-auto'>
        <ProcessSteps />
      </div>
    </section>
  );
}

export default DevelopmentProcessCards;
