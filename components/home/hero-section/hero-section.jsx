import WhatsappPopUp from './whatsapp-pop-up';
import CursorFollow from './follow-cursor';
import HeroHeadline from './hero-headline';
const HeroSection = () => {
  return (
    <div className='relative w-full h-screen mx-auto'>
      <div className='container mx-auto w-full h-5/6 md:h-[87.5%]'>
        <div className='flex flex-col w-full h-full'>
          <HeroHeadline />
          <div className='relative flex items-end justify-end flex-grow w-auto h-auto md:w-full md:h-full m-auto overflow-hidden!'>
            <WhatsappPopUp />
            <CursorFollow />
          </div>
        </div>
      </div>
      <div className='absolute top-[-80px] w-full h-full -z-20'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='object-cover w-full h-full 
          sm:max-w-[calc(40rem+75px)] 
          md:max-w-[calc(48rem+75px)] 
          lg:max-w-[calc(64rem+75px)] 
          xl:max-w-[calc(80rem+75px)] 
          2xl:max-w-[calc(96rem+75px)] 
          mx-auto'
        >
          <source src="/video/CodelabHeroSection.mp4" type="video/mp4" />
        </video>
        <div className='absolute inset-0 bg-black/50
        sm:max-w-[calc(40rem+75px)] 
          md:max-w-[calc(48rem+75px)] 
          lg:max-w-[calc(64rem+75px)] 
          xl:max-w-[calc(80rem+75px)] 
          2xl:max-w-[calc(96rem+75px)]
          mx-auto'></div>
      </div>
    </div>
  );
}

export default HeroSection;
