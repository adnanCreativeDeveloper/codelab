import React from 'react';
import CompanyStats from '@/components/about/company-stats/company-stats';
import HowWeHelp from '@/components/about/how-we-help/how-we-help';
import CompanyIntro from '@/components/about/company-intro/company-intro';
import FrequentlyAskedQuestions from '@/components/about/frequently-asked-questions/frequently-asked-questions';
export const metadata = {
  title: "About Us | CodeLab",
  description: "Learn about CodeLab's mission to empower future tech professionals through hands-on training in software development, web technologies, and digital skills.",
};

const Page = () => {
  return (
    <div>
      <CompanyIntro />
      <CompanyStats />
      <HowWeHelp />
      <FrequentlyAskedQuestions />
    </div>
  );
}

export default Page;
