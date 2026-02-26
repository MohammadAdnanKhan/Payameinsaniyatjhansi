"use client";

import Image from "next/image";
import { ITeamMember } from "@/types/team";
import { useEffect } from "react";

interface Props {
  member: ITeamMember | null;
  onClose: () => void;
}

export default function MemberModal({ member, onClose }: Props) {
  useEffect(() => {
    if (member) document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, [member]);

  if (!member) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/50 backdrop-blur-sm
        flex items-center justify-center
        p-6
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          max-w-xl w-full
          rounded-3xl
          bg-[var(--boldtheme)]
          shadow-2xl
          p-10
          animate-fadeIn
          transition-all duration-300
        "
      >
        <div
          className="
            absolute inset-0 rounded-3xl
            border border-primary/30
            shadow-[0_0_40px_rgba(22,163,74,0.15)]
            pointer-events-none
          "
        />

        <button
          onClick={onClose}
          className="
            absolute top-5 right-5
            w-9 h-9
            rounded-full
            bg-white/70
            backdrop-blur
            text-secondary
            hover:bg-primary
            hover:text-white
            transition
          "
        >
          ✕
        </button>

        <div className="relative text-center">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>

          <h3 className="mt-6 text-2xl font-heading font-semibold text-secondary">
            {member.name}
          </h3>

          {member.role && (
            <div className="mt-4 inline-block relative">
              <span
                className="
                  relative z-10
                  px-5 py-2
                  text-xs font-semibold uppercase tracking-wider
                  text-primary
                  bg-white/70
                  backdrop-blur
                  rounded-full
                "
              >
                {member.role}
              </span>

              <span
                className="
                  absolute inset-0 rounded-full
                  bg-primary/20 blur-md
                "
              />
            </div>
          )}


          <div
            className="
              mt-8
              relative
              text-[var(--color-secondary)]
              font-body
              leading-relaxed
            "
          >
            <span className="absolute -left-3 -top-4 text-primary text-5xl opacity-20">
              “
            </span>

            <p className="relative z-10 px-4 text-base">
              {member.message}
            </p>

            <span className="absolute -right-3 bottom-0 text-primary text-5xl opacity-20">
              ”
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}