import Animation from "@/components/common/animation";
import Image from "next/image";
import { uuidv7 } from "uuidv7";

const how_we_help = [
  {
    title: <h1 className="text-[26px] font-semibold text-[#2a2d34] py-6">CRM <span className="text-[#af1919]">Development</span></h1>,
    description: 'We build powerful and user-friendly CRM systems to help businesses manage customer relationships, track leads, and streamline operations. Our solutions are designed to improve efficiency, boost sales, and enhance customer interactions.',
    icon: '/images/how-we-help/development.png',
  },
  {
    title: '',
    description: '',
    icon: '/images/how-we-help/development-.jpg',
  },
  {
    title: '',
    description: '',
    icon: '',
  },
  {
    title: '',
    description: '',
    icon: '',
  },
  {
    title: <h1 className="text-[26px] font-semibold text-[#2a2d34] py-6">Data <span className='text-[var(--accent)]'>Management</span> and Analytics</h1>,
    description: 'We help businesses organize, process, and analyze data to make smarter decisions. Our solutions ensure data security, accuracy, and valuable insights that drive growth and efficiency.',
    icon: '/images/how-we-help/analytics.png',
  },
  {
    title: <h1 className="text-[26px] font-semibold text-[#2a2d34] py-6">Integration <span className='text-[var(--accent)]'>Solutions</span></h1>,
    description: 'We connect your software, apps, and systems for seamless performance. Our integration solutions ensure smooth data flow, improved efficiency, and a better user experience across all platforms..',
    icon: '/images/how-we-help/integration.png',
  },
  {
    title: <h1 className="text-[26px] font-semibold text-[#2a2d34] py-6">IT <span className='text-[var(--accent)]'>Support</span> & Maintenance</h1>,
    description: 'We provide reliable IT support and ongoing maintenance to keep your systems running smoothly. From troubleshooting issues to regular updates and security checks, we ensure optimal performance and minimal downtime.',
    icon: '/images/how-we-help/support.png',
  },
  {
    title: <h1 className="text-[26px] font-semibold text-[#2a2d34] py-6">Business Process <span className='text-[var(--accent)]'>Automation</span></h1>,
    description: 'We streamline workflows by automating repetitive tasks, improving efficiency, and reducing errors. Our solutions help businesses save time, cut costs, and focus on growth.',
    icon: '/images/how-we-help/automation.png',
  },
  {
    title: '',
    description: '',
    icon: '',
  },
]

const HelpProcessCard = () => {
  return (
    <>
      {how_we_help.map((item, i) => (
        <Animation>
          <div key={uuidv7()}
            className={`${item.title ? 'bg-[#f5f2f2] hover:shadow-md pt-8 px-6 pb-4' : 'bg-white pt-0 px-0 pb-0'} ${!item.title && 'hidden md:block'} text-black rounded-lg 
                hover:rounded-lg hover:bg-white 
                w-full max-w-3xl mx-auto 
                md:h-auto lg:h-[50vh]
                flex flex-col items-center md:items-start 
                text-center md:text-left relative`}>
            <div className="mb-4">
              {item.icon === '/images/how-we-help/development-.jpg' && <Image
                height={250}
                width={250}
                src={item.icon}
                alt="CRM Icon"
                className="object-cover w-full h-full"
              />}
              {item.icon && item.title && <Image
                height={48}
                width={48}
                src={item.icon}
                alt="CRM Icon"
                className="w-12 h-12"
              />}
            </div>
            {item.title}
            <p className="text-lg xl:text-[14px] text-[#8f8e8e] leading-5">
              {item.description}
            </p>
          </div>
        </Animation>
      ))}
    </>
  );
}

export default HelpProcessCard;
