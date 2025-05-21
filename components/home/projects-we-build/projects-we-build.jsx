import Image from "next/image";
import { uuidv7 } from "uuidv7";
import DraggableCarousel from "./draggable-carousel";
import HeadingAnimation from "@/components/common/heading-animation";
import Animation from "@/components/common/animation";

const projects = [
  { title: 'MC SALON', date: '29/04/2025', img: '/images/project/project-1.jpg' },
  { title: 'MC SALON', date: '29/04/2025', img: '/images/project/project-2.jpg' },
  { title: 'MC SALON', date: '29/04/2025', img: '/images/project/project-3.jpg' },
  { title: 'MC SALON', date: '29/04/2025', img: '/images/project/project-4.jpg' },
  { title: 'MC SALON', date: '29/04/2025', img: '/images/project/project-5.jpg' },
  { title: 'MC SALON', date: '29/04/2025', img: '/images/project/project-6.jpg' },
]

const ProjectsWeBuild = () => {

  return (
    <section className="
    sm:max-w-[calc(40rem+75px)] 
    md:max-w-[calc(48rem+75px)] 
    lg:max-w-[calc(64rem+75px)] 
    xl:max-w-[calc(80rem+75px)] 
    2xl:max-w-[calc(96rem+75px)] 
    mx-auto pt-32">
      <HeadingAnimation>
        <div className="pb-16">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--surface)] text-center">
            Projects We <span className="text-[var(--accent)]">Build</span>
          </h1>
          <p className="text-[var(--surface)] text-sm sm:text-base md:text-lg text-center mt-2 sm:mt-3 md:mt-5">
            We create smart, scalable, and high-performing software solutions to handle <br className="hidden md:block" />
            business success.
          </p>
        </div>
      </HeadingAnimation>

      <Animation>
        <div className="overflow-x-hidden">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing">
            <DraggableCarousel>
              <div
                className="flex gap-10 w-full py-5">
                {projects.map((item) => (
                  <div
                    key={uuidv7()}
                    className="flex-shrink-0 mx-auto w-[80%] sm:w-[40%] md:w-[25%] bg-gray-100 rounded-3xl p-4"
                  >
                    <div className="flex items-center justify-between mb-4 text-sm md:text-xs lg:text-base">
                      <div className="py-1 px-3 rounded-full bg-gray-200">
                        <h3 className="text-gray-900 font-semibold">{item.title}</h3>
                      </div>
                      <div className="py-1 px-3 rounded-full bg-gray-200">
                        <p className="text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={item.img}
                        width={333}
                        height={320}
                        alt={item.title}
                        className="object-contain w-full h-full rounded-3xl select-none pointer-events-none"
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </DraggableCarousel>
          </div>
        </div>
      </Animation>
    </section>
  );
};

export default ProjectsWeBuild;
