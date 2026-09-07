"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import DonateNode from "./DonateCard";
import { donateData } from "@/data/donateData";
import ElegantButton from "../common/styledbutton";

export default function DonateTreeSection() {
  const chainRef = useRef<HTMLDivElement>(null);

  /**
   * The spine fills in as the section scrolls past, so the chain visibly
   * "builds" link by link instead of sitting there as static decoration.
   */
  const { scrollYProgress } = useScroll({
    target: chainRef,
    offset: ["start 0.85", "end 0.55"],
  });

  const spineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section className="relative overflow-hidden bg-[var(--theme)] px-4 py-20 sm:px-6 md:py-24">
      {/* Ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 0%, color-mix(in srgb, var(--color-primary) 12%, transparent) 0%, transparent 70%), radial-gradient(45% 40% at 92% 88%, color-mix(in srgb, var(--color-secondary) 9%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        {/* ---------- Heading (markup unchanged) ---------- */}
        <div className="mb-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="eyebrow text-primary">One chain, six lifelines</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl text-center font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Donate</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 z-10 -rotate-2"></span>
            </span>{" "}
            <span className="text-secondary">Who Deserved</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Support initiatives that truly change lives — hunger, work, health,
            clothing, dignity and disaster relief are all links in the same
            chain. Give once, and every one of them holds.
          </p>
        </div>

        {/* ---------- The chain ---------- */}
        <div ref={chainRef} className="relative mt-14 pb-2">
          {/* Spine: dormant track + the progress line that grows over it */}
          <div
            aria-hidden
            className="absolute left-4 top-0 bottom-0 w-[2px] -translate-x-1/2 rounded-full bg-primary/15 md:left-1/2"
          />
          <motion.div
            aria-hidden
            style={{ scaleY: spineScale }}
            className="absolute left-4 top-0 bottom-0 w-[2px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-primary via-primary to-secondary md:left-1/2"
          />

          {/* Cap at the top of the spine */}
          <span
            aria-hidden
            className="absolute left-4 top-0 z-10 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-[var(--theme)] md:left-1/2"
          />

          <div className="space-y-8 md:space-y-10">
            {donateData.map((item, i) => (
              <DonateNode
                key={item.id}
                index={i}
                title={item.title}
                sector={item.sector}
                image={item.image}
                text={item.text}
                side={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          {/*
            ---------- Closing link: the only call to action ----------
            The gap above the card is PADDING on this wrapper, not a margin on
            the card. The heart marker below is absolutely positioned, so the
            card is this wrapper's first in-flow child — a top margin on it
            would collapse through the wrapper and drop the card straight back
            under the marker.
          */}
          <div className="relative mt-10 md:mt-12 md:pt-24">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: [0.34, 1.4, 0.64, 1] }}
              className="absolute left-4 top-6 z-20 -translate-x-1/2 md:left-1/2"
            >
              <span className="relative grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-[0_8px_22px_-8px_var(--color-primary)]">
                <HeartHandshake className="h-5 w-5" strokeWidth={2.2} />
                <span
                  aria-hidden
                  className="absolute -inset-1.5 -z-10 rounded-full bg-[var(--theme)]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 animate-ping rounded-full bg-primary/40"
                />
              </span>
            </motion.div>

            {/* Opaque on purpose: the spine runs behind this card on desktop
                and should visually terminate at the marker above it. */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="ml-12 overflow-hidden rounded-[26px] border border-primary/20 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.55)] sm:p-8 md:ml-0"
            >
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading text-base font-bold text-secondary sm:text-lg">
                      Be the next link in the chain
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      80G tax exemption available · Govt. registered NGO · every
                      rupee accounted for
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <ElegantButton
                    href="/donate"
                    background="var(--color-primary)"
                    textColor="var(--background)"
                    borderColor="var(--color-accent)"
                    hoverBackground="var(--color-primary-hover)"
                    glowColor="var(--color-accent)"
                  >
                    Donate now
                  </ElegantButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
