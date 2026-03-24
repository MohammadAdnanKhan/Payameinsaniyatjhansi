import AboutHero from "@/components/about/AboutHero";
import ProjectTabs from "@/components/about/ProjectsSection/ProjectTabs";
import Transparency from "@/components/about/Transparency";
import CTA from "@/components/about/CTA";
import StoryTabs from "@/components/about/story-tabs/StoryTabs";
import VideoGallery from "@/components/videogallery/VideoGallery";

export default function AboutPage() {
  return (
    // Responsive gaps: 16 on mobile, 24 on tablet, 32 on desktop
    <main className="flex flex-col gap-16 md:gap-24 lg:gap-32 overflow-hidden">
      <AboutHero />
      <StoryTabs />
      <ProjectTabs />
      <VideoGallery />
      <Transparency />
      <CTA />
    </main>
  );
}