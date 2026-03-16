// "use client";

// import { ITeamMember } from "@/types/team";
// import Reveal from "./Reveal";
// import SectionHeader from "./SectionHeader";
// import MemberCard from "./MemberCard";

// interface Props {
//   title: string;
//   subtitle?: string;
//   members: ITeamMember[];
//   onClick: (m: ITeamMember) => void;
// }

// export default function TeamGridSection({
//   title,
//   subtitle,
//   members,
//   onClick,
// }: Props) {
//   if (!members.length) return null;

//   return (
//     <section className="py-12">
//       <div className="max-w-6xl mx-auto px-6">
//         <SectionHeader title={title} subtitle={subtitle} />

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {members.map((m, i) => (
//             <Reveal key={m.id} delay={i * 0.05}>
//               <MemberCard member={m} onClick={onClick} />
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { ITeamMember } from "@/types/team";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import MemberCard from "./MemberCard";

interface Props {
  title: string;
  subtitle?: string;
  members: ITeamMember[];
  onClick: (m: ITeamMember) => void;
}

export default function TeamGridSection({
  title,
  subtitle,
  members,
  onClick,
}: Props) {
  if (!members.length) return null;

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title={title} subtitle={subtitle} />

        <div
          className="
            mt-10
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4
            sm:gap-6
            lg:gap-8
          "
        >
          {members.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.05}>
              <MemberCard member={m} onClick={onClick} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}