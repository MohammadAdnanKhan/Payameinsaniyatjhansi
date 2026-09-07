"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, Users, Sunrise } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Value {
  label: string;
  note: string;
  Icon: LucideIcon;
}

const VALUES: Value[] = [
  {
    label: "Compassion",
    note: "We show up for people, not paperwork.",
    Icon: HeartHandshake,
  },
  {
    label: "Dignity",
    note: "Help given the way we'd want to receive it.",
    Icon: Sparkles,
  },
  {
    label: "Community",
    note: "Neighbours lifting neighbours, every day.",
    Icon: Users,
  },
  {
    label: "Hope",
    note: "Small acts, compounding into better tomorrows.",
    Icon: Sunrise,
  },
];

/**
 * The four principles behind everything on this page. Each tile lifts and
 * tints on hover; the icon well fills with primary so the whole row reads as
 * one system rather than four loose chips.
 */
export default function ValuesPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative max-w-xl"
    >
      {/* Gradient rim — one pixel of colour that lifts the panel off the page */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-[26px] opacity-70"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 45%, transparent), transparent 45%, color-mix(in srgb, var(--color-secondary) 30%, transparent))",
        }}
      />

      <div className="relative overflow-hidden rounded-[25px] bg-white/85 p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-7">
        {/* Soft corner glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "color-mix(in srgb, var(--color-primary) 25%, transparent)",
          }}
        />

        <div className="relative mb-6 flex items-center gap-3">
          <span className="h-px w-6 bg-primary/50" />
          <p className="eyebrow text-primary">What guides our work</p>
        </div>

        <div className="relative grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {VALUES.map(({ label, note, Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25 + index * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex items-start gap-3 rounded-2xl border border-slate-100 bg-white/90 p-3.5 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30 hover:bg-[var(--boldtheme)] hover:shadow-[0_16px_30px_-20px_var(--color-primary)]"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-[18px] w-[18px]" strokeWidth={2.1} />
              </span>

              <div className="min-w-0">
                <p className="font-heading text-sm font-bold leading-tight text-secondary">
                  {label}
                </p>
                <p className="mt-1 text-[0.78rem] leading-snug text-slate-500">
                  {note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
