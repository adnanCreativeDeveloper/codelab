import DevelopmentProcessCards from "@/components/home/development-process-cards/development-process-cards";
import HeroSection from "@/components/home/hero-section/hero-section";
import OurTeam from "@/components/home/our-team/our-team";
import ProjectsWeBuild from "@/components/home/projects-we-build/projects-we-build";
import Testimonials from "@/components/home/testimonials/testimonials";
import ProcessSteps from "@/components/home/process-steps/process-steps";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProcessSteps />
      <DevelopmentProcessCards />
      <ProjectsWeBuild />
      <OurTeam />
      <Testimonials />
    </>
  );
}
