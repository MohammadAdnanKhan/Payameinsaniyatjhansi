"use client";

import { IMajorProject } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: IMajorProject;
}

const MajorProjectCard = ({ project }: Props) => {
  return (
    <article
      className="
        snap-start
        w-[85%]
        sm:w-[22rem]
        md:w-[24rem]
        lg:w-[26rem]
        flex-shrink-0
        flex flex-col
        rounded-2xl
        overflow-hidden
        bg-[var(--boldtheme)]
        border border-slate-200
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
     <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          className="
            absolute bottom-3 left-3
            px-3 py-1
            rounded-full
            text-[10px] font-semibold tracking-widest uppercase
            bg-[var(--color-accent)] backdrop-blur
            text-[var(--color-secondary)]
          "
        >
          {project.year}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3
            className="text-lg font-semibold leading-snug text-[var(--color-secondary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </h3>

          <p className="text-xs mt-1 text-slate-500">
            {project.location}
          </p>

          <p className="text-sm mt-4 text-slate-600 leading-relaxed leading-relaxed">
            {project.description}
          </p>
        </div>

        {project.impact && (
          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="flex justify-between text-center">
              {project.impact.beneficiaries && (
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary)]">
                    {project.impact.beneficiaries}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">
                    Impact
                  </p>
                </div>
              )}

              {project.impact.fundsRaised && (
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary)]">
                    {project.impact.fundsRaised}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">
                    Funds
                  </p>
                </div>
              )}

              {project.impact.volunteers && (
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary)]">
                    {project.impact.volunteers}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">
                    Volunteers
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {project.projectUrl && (
          <Link
            href={project.projectUrl}
            className="
              mt-6 inline-flex items-center justify-center
              text-sm font-semibold
              text-[var(--color-secondary)]
              border-b-2 border-transparent
              transition-all
              hover:border-[var(--color-primary)]
              hover:text-black
            "
          >
            View Project →
          </Link>
        )}
      </div>
    </article>
  );
};

export default MajorProjectCard;
// "use client";

// import { IMajorProject } from "@/types/types";
// import Image from "next/image";
// import Link from "next/link";
// import { memo } from "react";

// interface Props {
//   project: IMajorProject;
// }

// const MajorProjectCard = ({ project }: Props) => {
//   return (
//     <article
//       className="snap-start w-[80vw] sm:w-[420px] pb-12 flex-shrink-0 flex flex-col rounded-2xl overflow-hidden bg-[var(--boldtheme)] border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//     >
//       <div className="relative w-full aspect-[16/9]">
//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           loading="lazy" // 🔥 IMPORTANT
//           sizes="(max-width: 768px) 80vw, 420px"
//           className="object-cover"
//         />

//         <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold uppercase bg-[var(--color-accent)] text-[var(--color-secondary)]">
//           {project.year}
//         </div>
//       </div>

//       <div className="p-6 flex flex-col flex-1 justify-between">
//         <div>
//           <h3 className="text-lg font-semibold text-[var(--color-secondary)]">
//             {project.title}
//           </h3>

//           <p className="text-xs mt-1 text-slate-500">
//             {project.location}
//           </p>

//           <p className="text-sm mt-4 text-slate-600 leading-relaxed">
//             {project.description}
//           </p>
//         </div>

//         {project.projectUrl && (
//           <Link
//             href={project.projectUrl}
//             className="mt-6 text-sm font-semibold text-[var(--color-secondary)] hover:text-black"
//           >
//             View Project →
//           </Link>
//         )}
//       </div>
//     </article>
//   );
// };

// export default memo(MajorProjectCard);