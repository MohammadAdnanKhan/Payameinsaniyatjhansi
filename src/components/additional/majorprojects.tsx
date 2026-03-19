import MajorProjectsCarousel from "../ui/majorprojectcrousal";
import { projects } from "@/data/project";

export default function Majorprojects() {
  return (
    <main className="mx-auto">
      <MajorProjectsCarousel projects={projects} />
    </main>
  );
}