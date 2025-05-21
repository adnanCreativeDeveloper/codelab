import HeadingAnimation from "@/components/common/heading-animation";

const HeroHeadline = () => {
  return (
    <div className="h-1/2 flex items-end justify-cente mx-auto relative xl:w-[100%] lg:w-[90%] md:w-[90%] sm:w-[90%] w-full z-10">
      <HeadingAnimation>
        <div className="lg:ml-20 md:ml-16 sm:ml-10 ml-13 xl:ml-20 flex flex-col items-start justify-center border-l-8 border-[var(--accent)] mb-10 pl-4 sm:pl-6 md:pl-8">
          <h1 className="hero-page-loop-heading text-left text-1xl md:text-[20px] sm:text-[20px] lg:text-[24px] xl:text-[24px] font-bold text-[#ffffff] leading-tight tracking-tight mb-2">
            <span className="text-[var(--accent)]">Code Lab </span>Your Potential, Our Dedication
          </h1>
          <p className="flex items-center text-sm sm:text-lg md:text-xl whitespace-nowrap ">
            <span className="font-bold text-[#ffffff]">We Create Powerful &nbsp;</span>
            <span id="dynamicText" className="text-white">Web Solutions</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
          </p>
        </div>
      </HeadingAnimation>
    </div>
  );
}

export default HeroHeadline;
