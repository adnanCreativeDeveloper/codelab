/* The provided code is a React component named `OurTeam` that displays a section introducing the team
members of a project or company. Here is a breakdown of what the code is doing: */
'use client';

import Image from "next/image";
import { uuidv7 } from "uuidv7";
import TeamMotion from "./team-motion";
import HeadingAnimation from "@/components/common/heading-animation";


const team = [
  {
    name: 'Ariba Dastgir',
    role: 'App Developer',
    location: 'Bahawalpur',
    img: '/images/home/our-team/areeba.png',
  },
  {
    name: 'Fiza Yaseen',
    role: 'Hr.For Codelab',
    location: 'Bahawalpur',
    img: '/images/home/our-team/Fizza.png',
  },
  {
    name: 'Shumaila Sial',
    role: 'Graphic Designer T/C',
    location: 'Massachusetts',
    img: '/images/home/our-team/Shumaila.png',
  },
  {
    name: 'Malik Ansar',
    role: 'WordPress Developer',
    location: 'Liaquatpur',
    img: '/images/home/our-team/Frame-1618873284-1.png',
  },
  {
    name: 'Ahtasham Athar',
    role: 'Front-End Developer',
    location: 'Bahawalpur',
    img: '/images/home/our-team/ahtsham.png',
  },
];

const OurTeam = () => {
  return (
    <section className="
    sm:max-w-[calc(40rem+75px)] 
    md:max-w-[calc(48rem+75px)] 
    lg:max-w-[calc(64rem+75px)] 
    xl:max-w-[calc(80rem+75px)] 
    2xl:max-w-[calc(96rem+75px)] 
    mx-auto
    pt-32 overflow-hidden">
      <HeadingAnimation>
        <div className="pb-16 text-center">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--surface)]">
            Meet Our <span className="text-[var(--accent)]">Team</span>
          </h1>
          <p className="text-[var(--surface)] text-sm sm:text-base md:text-lg mt-3">
            We’re a group of creative minds, developers, designers, and digital experts working <br className="hidden md:block" />
            together to build amazing things and help your business grow.
          </p>
        </div>
      </HeadingAnimation>

      {[0, 1, 2].map((row) => (
        <div
          key={uuidv7()}
          className={`marquee-container ${row % 2 === 0 ? 'marquee-right' : 'marquee-left'}`}
        >
          <div className="marquee-content">
            {[...team, ...team].map((item) => (
              <TeamMotion key={uuidv7()}>
                <div className="flex items-start gap-4 p-2 m-2 duration-150 bg-white shadow-lg rounded-2xl min-w-72 hover:scale-110">
                  <Image
                    height={70}
                    width={70}
                    className="object-cover rounded-full"
                    src={item.img}
                    alt={item.name}
                  />
                  <div className="mt-2 card-info">
                    <h4 className="text-lg font-semibold sm:text-xl">{item.name}</h4>
                    <h5>{item.role}</h5>
                    <p>{item.location}</p>
                  </div>
                </div>
              </TeamMotion>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurTeam;
