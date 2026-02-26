"use client";

import { useState } from "react";
import { teamMembers } from "@/data/teamdata";
import { ITeamMember } from "@/types/team";
import LeadershipSection from "@/components/team/LeadershipSection";
import TeamGridSection from "@/components/team/TeamGridSection";
import YouthSection from "@/components/team/YouthSection";
import MemberModal from "@/components/team/MemberModal";

export default function TeamPage() {
  const [selected, setSelected] = useState<ITeamMember | null>(null);

  const leadership = teamMembers.filter(m => m.category === "leadership");
  const project = teamMembers.filter(m => m.category === "project-head");
  const core = teamMembers.filter(m => m.category === "core");
  const volunteers = teamMembers.filter(m => m.category === "volunteer");
  const youth = teamMembers.filter(m => m.category === "youth");

  return (
    <main>

      <LeadershipSection
        members={leadership}
        onClick={setSelected}
      />

      <TeamGridSection
        title="Project Heads"
        subtitle="Leading focused initiatives across education, healthcare and community development."
        members={project}
        onClick={setSelected}
      />

      <TeamGridSection
        title="Core Team"
        subtitle="The backbone of operations and coordination."
        members={core}
        onClick={setSelected}
      />

      <TeamGridSection
        title="Volunteers"
        subtitle="Dedicated individuals supporting our mission on the ground."
        members={volunteers}
        onClick={setSelected}
      />

      <YouthSection
        members={youth}
        onClick={setSelected}
      />

      <MemberModal
        member={selected}
        onClose={() => setSelected(null)}
      />
    </main>
  );
}