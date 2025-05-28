import CursorFollow from './follow-cursor';
import HeroHeadline from './hero-headline';
const HeroSection = () => {
  return (
    <div className='relative w-full h-[65vh] sm:h-screen mx-auto
        sm:max-h-[calc(40rem)] 
        md:max-h-[calc(48rem)] 
        lg:max-h-[calc(64rem)] 
        xl:max-h-[calc(80rem)] 
        2xl:max-h-[calc(96rem)]'>
      <div className='absolute top-[-80px] inset-0 bg-black/50 overflow-hidden'>
        <div className='absolute w-full h-full -z-20 top-0 left-0'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='object-cover w-full h-full'
          >
            <source src="/video/CodelabHeroSection.mp4" type="video/mp4" />
          </video>
        </div>
        <div className='w-full h-5/6 md:h-[87.5%]'>
          <div className='flex absolute bottom-0 right-0 items-end justify-end flex-grow w-fit md:w-80 h-fit md:h-80 m-auto'>
            <CursorFollow />
          </div>
          <div className='w-full h-full'>
            <HeroHeadline />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
