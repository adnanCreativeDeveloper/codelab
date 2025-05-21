import Animation from "@/components/common/animation";
import { uuidv7 } from "uuidv7";

const stats_data = [
  {
    title: <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-5'><span className='text-red-700'>Global </span>Presence</h2>,
    description: 'With a strong footprint in multiple industries, we provide innovative digital solutions to businesses worldwide. Our expertise spans across web development, mobile apps, UI/UX design, graphic design, and digital marketing, helping brands grow and succeed in the digital era.',
  },
  {
    title: <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-5'><span className='text-red-700'>500+</span> Experts</h2>,
    description: 'With a strong footprint in multiple industries, we provide innovative digital solutions to businesses worldwide. Our expertise spans across web development, mobile apps, UI/UX design, graphic design, and digital marketing, helping brands grow and succeed in the digital era.',
  },
  {
    title: <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-5'><span className='text-red-700'>200+</span> Happy Clients</h2>,
    description: 'With 200+ satisfied clients worldwide, we have a proven track record of delivering innovative and result-driven digital solutions. From startups to enterprises, we help businesses grow with our expertise in web development, app development, UI/UX design, graphic design, and digital marketing.',
  },
];

const CompanyStats = () => {
  return (
    <div className='container mx-auto px-2'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {stats_data.map((item) => (
          <Animation key={uuidv7()}>
            <div className='bg-gray-100 hover:bg-white hover:shadow-md rounded-lg p-7 pt-14'>
              {item.title}
              <p className='text-sm text-gray-500'>{item.description}</p>
            </div>
          </Animation>
        ))}
      </div>
    </div>
  );
}

export default CompanyStats;
