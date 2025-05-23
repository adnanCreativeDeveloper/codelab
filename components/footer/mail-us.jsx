import Image from 'next/image';
import Animation from '../common/animation';

const MailUs = () => {
  return (
    <Animation>
      <div className='grid grid-cols-1 md:grid-cols-2 rounded-lg px-2 py-4 sm:px-3 sm:py-5 md:px-4 md:py-6 bg-[var(--surface)] my-5 md:my-10 gap-10'>
        <div className='relative'>
          <Image src={'/images/home/testimonial/Software-engineer-amico.png'} height={240} width={240} className='object-contain h-auto mx-auto w-60' />
        </div>
        <div>
          <div>
            <h1 className='text-xl font-semibold text-white sm:text-3xl'>Subscribe to our newsletter to get updates to our latest collections</h1>
            <p className='mt-3 text-sm text-white sm:mt-7'>Stay updated with the latest tech trends and projects from Code Lab</p>
          </div>
          <div className='relative mt-5'>
            <input type="email" id='email' placeholder='Enter your email' className='py-2.5 md:py-5 px-3 bg-white rounded-lg w-full' />
            <button className='font-semibold text-sm text-white absolute top-1/2 right-3 -translate-y-1/2 py-1.5 sm:py-2 px-3 sm:px-3.5 bg-[var(--accent)] rounded-lg'>
              Subscribe
            </button>
          </div>
          <p className='text-sm text-white mt-5'>You will be able to unsubscribe at any time. Read our privacy policy here.</p>
        </div>
      </div>
    </Animation>
  );
}

export default MailUs;
