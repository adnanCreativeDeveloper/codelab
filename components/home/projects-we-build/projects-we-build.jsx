import HeadingAnimation from "@/components/common/heading-animation";
import Animation from "@/components/common/animation";
import ProjectCard from "./project-card";

const projects = [
  { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-1.jpg' },
  { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-2.jpg' },
  { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-3.jpg' },
  { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-4.jpg' },
  { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-5.jpg' },
  { title: 'MC SALON', date: '29/04/2025', img: '/images/home/project/project-6.jpg' },
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
          <ProjectCard />
        </div>
      </Animation>
    </section>
  );
};

export default ProjectsWeBuild;
