"use client";

import Image from "next/image";
import { ITeamMember } from "@/types/team";

interface Props {
  member: ITeamMember;
  onClick: (m: ITeamMember) => void;
}

export default function MemberCard({ member, onClick }: Props) {
  return (
    <div
      onClick={() => onClick(member)}
      className="
        group relative cursor-pointer
        bg-[var(--boldtheme)]
        rounded-2xl
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="
        absolute inset-0 rounded-2xl
        border border-transparent
        group-hover:border-primary/40
        group-hover:shadow-[0_0_20px_rgba(22,163,74,0.2)]
        transition-all duration-300
        pointer-events-none
      " />

      <div className="
        relative w-32 h-32 mx-auto
        rounded-full overflow-hidden
        shadow-md
      ">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="
            object-cover
            transition duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="text-center mt-5">
        <h3 className="
          font-heading
          font-semibold
          text-secondary
          tracking-tight
        ">
          {member.name}
        </h3>

        {member.role && (
          <div className="mt-3 inline-block relative">
            <span className="
              relative z-10
              px-4 py-1
              text-xs font-semibold uppercase tracking-wider
              text-primary
              bg-white/70
              backdrop-blur
              rounded-full
              transition-all duration-300
              group-hover:bg-primary
              group-hover:text-white
            ">
              {member.role}
            </span>

            <span className="
              absolute inset-0 rounded-full
              bg-primary/20 blur-md
              opacity-0 group-hover:opacity-100
              transition duration-300
            " />
          </div>
        )}
      </div>
    </div>
  );
}