"use client";

import Image from "next/image";
import { ITeamMember } from "@/types/team";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

interface Props {
  members: ITeamMember[];
  onClick: (m: ITeamMember) => void;
}

export default function LeadershipSection({
  members,
  onClick,
}: Props) {
  return (
    <section className="relative  overflow-hidden">

      {/* <div className="blob blob-green w-72 h-72 -top-24 -left-24 opacity-20" /> */}
      {/* <div className="blob blob-blue w-72 h-72 bottom-0 right-0 opacity-20" /> */}

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Leadership"
          subtitle="Strengthening our mission through unity, accountability, and service to society."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.1}>
              <div
                onClick={() => onClick(m)}
                className="
                  group relative cursor-pointer
                  rounded-2xl overflow-hidden
                  bg-[var(--boldtheme)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <div className="
                  absolute inset-0 rounded-2xl
                  border border-transparent
                  group-hover:border-primary/40
                  group-hover:shadow-[0_0_25px_rgba(22,163,74,0.25)]
                  transition-all duration-300
                  pointer-events-none
                " />

                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-70" />
                </div>

                <div className="p-6 text-center relative z-10">
                  <h3 className="font-heading text-lg font-semibold text-secondary tracking-tight">
                    {m.name}
                  </h3>

                  <div className="mt-3 inline-block relative">
                    <span className="
                      relative z-10
                      px-4 py-1.5
                      text-xs font-semibold uppercase tracking-wider
                      text-white
                      bg-primary
                      backdrop-blur
                      rounded-full
                      transition-all duration-300
                      group-hover:bg-white
                      group-hover:text-primary
                    ">
                      {m.role}
                    </span>

                    <span className="
                      absolute inset-0 rounded-full
                      bg-primary/20 blur-md
                      opacity-0 group-hover:opacity-100
                      transition duration-300
                    " />
                  </div>

                  <div className="
                    mt-5 relative
                    text-sm font-body
                    text-[var(--color-secondary)]
                    leading-relaxed
                  ">
                    <span className="
                      absolute -left-2 -top-2 text-primary text-3xl opacity-30
                    ">
                      “
                    </span>

                    <p className="relative z-10 px-2">
                      {m.message}
                    </p>

                    <span className="
                      absolute -right-2 bottom-0 text-primary text-3xl opacity-30
                    ">
                      ”
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}