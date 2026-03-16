import AboutHero from "@/components/about/AboutHero";
import ProjectTabs from "@/components/about/ProjectsSection/ProjectTabs";
import Transparency from "@/components/about/Transparency";
import CTA from "@/components/about/CTA";
import StoryTabs from "@/components/about/story-tabs/StoryTabs";
export default function AboutPage() {
  return (
    <main className="flex flex-col gap-28">
      <AboutHero />
      <StoryTabs />

      <ProjectTabs/>

      <Transparency />

      <CTA />
    </main>
  );
}
