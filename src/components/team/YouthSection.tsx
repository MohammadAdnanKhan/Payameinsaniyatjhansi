"use client";

import { ITeamMember } from "@/types/team";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import MemberCard from "./MemberCard";

interface Props {
  members: ITeamMember[];
  onClick: (m: ITeamMember) => void;
}

export default function YouthSection({ members, onClick }: Props) {
  if (!members.length) return null;

  return (
    <section className="py-8 bg-[var(--color-theme)]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            The Next Generation
          </p>

          <SectionHeader
            title="Youth Wing"
            subtitle="A vibrant group of young individuals contributing energy, innovation, and commitment to strengthen our mission."
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.07}>
              <MemberCard member={m} onClick={onClick} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}