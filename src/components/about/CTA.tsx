"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-8 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[28px] border border-primary/15 bg-white px-5 py-10 text-center shadow-[0_30px_70px_-45px_rgba(15,23,42,0.55)] sm:px-10 md:py-12"
      >
        {/* Decorative field — colour only, no new palette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 0%, color-mix(in srgb, var(--color-primary) 12%, transparent) 0%, transparent 70%), radial-gradient(50% 50% at 100% 100%, color-mix(in srgb, var(--color-secondary) 10%, transparent) 0%, transparent 70%)",
          }}
        />

        {/* Fine dotted texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(color-mix(in srgb, var(--color-primary) 30%, transparent) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(60% 60% at 50% 50%, transparent 40%, #000 100%)",
            WebkitMaskImage:
              "radial-gradient(60% 60% at 50% 50%, transparent 40%, #000 100%)",
          }}
        />

        <div className="relative">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-[var(--theme)] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="eyebrow text-primary">Join the mission</span>
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold">
            <span className="text-primary">Together</span>{" "}
            <span className="text-secondary">We Can Make a Difference</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            Your support helps us provide food, clothing, healthcare, employment
            opportunities, and dignity to people who need it most. Every
            contribution creates real impact in our community.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/donate"
              className="btn-sheen group inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-7 py-3.5 font-heading font-extrabold text-white shadow-[0_18px_35px_-18px_var(--color-primary)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary-hover)] hover:shadow-[0_24px_45px_-18px_var(--color-primary)] active:scale-[0.98]"
            >
              <HeartHandshake
                size={20}
                className="transition-transform duration-300 group-hover:-rotate-12"
              />
              Donate Now
            </Link>

            <Link
              href="/news"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-secondary/30 bg-white px-7 py-3.5 font-heading font-extrabold text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-secondary hover:text-white active:scale-[0.98]"
            >
              <Newspaper size={18} />
              Daily News
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <p className="mt-7 text-xs font-medium tracking-wide text-slate-500">
            80G tax exemption available · Govt. Reg. NGO R/JHA/07016/2025-2026
          </p>
        </div>
      </motion.div>
    </section>
  );
}
