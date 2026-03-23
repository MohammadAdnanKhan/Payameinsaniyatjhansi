// "use client";

// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { IMajorProject } from "@/types/types";
// import MajorProjectCard from "./majorprojectcard";

// interface Props {
//   projects: IMajorProject[];
// }

// const MajorProjectsCarousel = ({ projects }: Props) => {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "prev" | "next") => {
//     if (!carouselRef.current) return;
//     const scrollAmount = carouselRef.current.clientWidth * 0.75;
//     carouselRef.current.scrollBy({
//       left: direction === "next" ? scrollAmount : -scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="w-full mt-20">
//       <div className="mb-14 flex items-end justify-between">
//       <div className="mx-auto max-w-2xl text-center">
//         <h2
//           className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--foreground)]"
//           style={{ fontFamily: "var(--font-heading)" }}
//         >
//           <span className="text-primary">Our</span>{" "}
//           <span className="text-secondary">Initiatives</span>
//         </h2>

//         <p className="mt-4 text-medium font-body">
//           Driving meaningful change through sustainable programs.
//         </p>
//       </div>

//         <div className="hidden md:flex gap-3">
//           <button
//             onClick={() => scroll("prev")}
//             className="
//               h-11 w-11 rounded-full
//               border border-primary
//               flex items-center justify-center
//               text-primary
//               hover:bg-primary hover:text-white
//               transition-colors
//             "
//           >
//             <ChevronLeft size={18} />
//           </button>
//           <button
//             onClick={() => scroll("next")}
//             className="
//               h-11 w-11 rounded-full
//               border border-primary
//               flex items-center justify-center
//               text-primary
//               hover:bg-primary hover:text-white
//               transition-colors
//             "
//           >
//             <ChevronRight size={18} />
//           </button>
//         </div>
//       </div>

//       <div
//         ref={carouselRef}
// className="
// flex gap-6 px-4 overflow-x-auto snap-x snap-mandatory scroll-pl-4

// "
//       >
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="snap-start shrink-0 w-[80vw] sm:w-[420px] pb-12"
//           >
//             <MajorProjectCard project={project} />
//           </div>
//         ))}

//         <div className="shrink-0 w-4" />
//       </div>
//  <div className="mt-8 flex justify-center gap-4 md:hidden">
// <button
//   onClick={() => scroll("prev")}
//   className="
//     px-6 py-3 rounded-md
//     font-heading
//     border border-primary
//     text-primary font-medium
//     transition-all duration-200 ease-out
//     hover:bg-primary hover:text-white
//     active:scale-[0.97]
//     active:bg-primary
//     active:text-[var(--secondary)]
//     active:shadow-inner
//     focus-visible:outline-none
//     focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
//   "
// >
//     Previous
//   </button>

//   <button
//     onClick={() => scroll("next")}
//     className="
//       px-6 py-3 rounded-md
//       font-heading
//       bg-primary text-white font-medium
//       transition-all duration-200
//       hover:opacity-90
//       active:scale-95
//       active:opacity-80
//       focus-visible:outline-none
//       focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
//     "
//   >
//     Next
//   </button>
// </div>

//     </section>
//   );
// };

// export default MajorProjectsCarousel;
"use client";

import { useRef, useCallback } from "react";
import { IMajorProject } from "@/types/types";
import MajorProjectCard from "./majorprojectcard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  projects: IMajorProject[];
}

const MajorProjectsCarousel = ({ projects }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: "prev" | "next") => {
    if (!carouselRef.current) return;

    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({
      left: direction === "next" ? width * 0.75 : -width * 0.75,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="w-full mt-20">
      <div className="mb-14 flex items-end justify-between">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl text-center font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Our</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 -rotate-2"></span>
            </span>{" "}
            <span className="text-secondary">Initiatives</span>
          </h2>

          <p className="mt-4 text-medium font-body">
            Driving meaningful change through sustainable programs.
          </p>
        </div>

        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("prev")}
            className="h-11 w-11 meow1 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("next")}
            className="h-11 w-11 meow2 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-6 px-4 overflow-x-auto snap-x snap-mandatory py-6 scroll-pl-4"
      >
        {projects.map((project) => (
          <MajorProjectCard key={project.id} project={project} />
        ))}

        <div className="shrink-0 w-4" />
      </div>

      <div className="mt-8 flex justify-center gap-4 md:hidden">
        <button
          onClick={() => scroll("prev")}
          className="px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-white"
        >
          Previous
        </button>

        <button
          onClick={() => scroll("next")}
          className="px-6 py-3 rounded-md bg-primary text-white font-medium hover:opacity-90"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default MajorProjectsCarousel;
