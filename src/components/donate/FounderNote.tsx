"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Quote } from "lucide-react";

export default function FounderNote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-24 overflow-hidden rounded-[32px] shadow-[0_40px_80px_-50px_var(--color-primary)]"
    >
      {/* Base gradient — same green, given depth */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 55%, color-mix(in srgb, var(--color-secondary) 35%, var(--color-primary-hover)) 100%)",
        }}
      />

      {/* Dot texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Corner bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--color-accent)" }}
      />

      {/* Accent hairline along the top edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
        }}
      />

      <div className="relative flex flex-col items-center gap-8 p-8 text-white md:flex-row md:items-stretch md:gap-12 md:p-12">
        {/* ---- Portrait ---- */}
        <div className="flex shrink-0 flex-col items-center gap-4 md:w-[240px]">
          <div className="relative">
            <div className="absolute -inset-2 rounded-[2rem] border border-white/25" />
            <div className="relative h-40 w-40 overflow-hidden rounded-[1.7rem] bg-white/10 shadow-2xl ring-1 ring-white/30 md:h-48 md:w-48">
              <img
                src="/images/team/president.png"
                alt="Haji Mohd Mazhar Khan, President & Founder"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary shadow-lg">
              <BadgeCheck className="h-3.5 w-3.5" />
              Founder
            </span>
          </div>
        </div>

        {/* ---- Quote ---- */}
        <div className="relative flex-1 text-center md:text-left">
          <Quote
            aria-hidden
            className="mx-auto h-10 w-10 fill-white/15 text-white/15 md:mx-0"
            strokeWidth={1.2}
          />

          <blockquote className="font-editorial mt-3 text-[1.45rem] leading-[1.45] text-white md:text-[1.85rem]">
            Every single rupee donated is a seed planted for a better tomorrow.
            We are on the ground every single day, ensuring your generosity
            translates directly into meals, education, and hope for those who
            need it most.
          </blockquote>

          <div className="mt-7 flex flex-col items-center gap-3 md:flex-row md:items-center">
            <span
              aria-hidden
              className="hidden h-10 w-[3px] rounded-full bg-[var(--color-accent)] md:block"
            />
            <div>
              <p className="font-heading text-lg font-bold">
                Haji Mohd Mazhar Khan
              </p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-white/75">
                President &amp; Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
