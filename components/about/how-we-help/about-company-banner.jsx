import placeholders from '@/lib/placeholders';
import Image from 'next/image';

const AboutCompanyBanner = () => {
  return (
    <div className="grid grid-cols-[100%] sm:grid-cols-[100%] lg:grid-cols-[40%_60%] py-12 px-2 mx-auto bg-white">

      <div className="md:rounded-l-2xl overflow-hidden">
        <Image
          width={500}
          height={442}
          src="/images/how-we-help/seo.png"
          alt="Team working at CodeLab"
          className="w-full h-full object-cover bg-left rounded-none md:rounded-l-2xl"
          placeholder='blur'
          blurDataURL={placeholders['/images/how-we-help/seo.png']}
        />
      </div>

      <div
        className="bg-[#2a2d34] text-white shadow-lg border border-black md:rounded-r-2xl px-4 sm:px-2 md:px-4 lg:px-8 xl:px-8 py-6 sm:py-8 md:py-8 lg:py-8 xl:py-8"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold px-6 sm:px-8 md:px-12 text-[#f3f3f0]">
          <span className="font-extralight italic text-[#8e8b8b]">
            At CodeLab, we create websites, apps, and designs to help businesses grow. Our team is full of
            friendly and skilled people who love making ideas real. We keep things simple, clear, and useful for you.
          </span>
        </h1>

        <p className="text-sm text-[#8e8b8b] px-6 sm:px-8 md:px-12 py-6">
          No matter if you’re starting something new or want to improve what you already have. We’re here to help and grow with you!
        </p>

        <div className="px-6 sm:px-8 md:px-12">
          <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>

  );
}

export default AboutCompanyBanner;
