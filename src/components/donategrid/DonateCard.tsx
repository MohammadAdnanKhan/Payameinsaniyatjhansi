"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface Props {
  index: number;
  title: string;
  sector: string;
  image: string;
  text: string;
  /** Which side of the spine this node sits on (desktop only). */
  side: "left" | "right";
}

/**
 * One link in the chain of service.
 *
 * The row spans the full width and is split by an invisible two-column grid;
 * the node's numbered dot sits on the shared spine and a short rung connects
 * it to the card, so the whole section reads as one continuous ladder rather
 * than a set of loose cards.
 */
export default function DonateNode({
  index,
  title,
  sector,
  image,
  text,
  side,
}: Props) {
  const isLeft = side === "left";

  return (
    <div className="relative grid md:grid-cols-2 md:gap-x-16">
      {/* ---- Node dot, seated on the spine ---- */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.34, 1.4, 0.64, 1] }}
        className="absolute left-4 top-6 z-20 -translate-x-1/2 md:left-1/2"
      >
        <span className="tnum relative grid h-10 w-10 place-items-center rounded-full border-2 border-primary bg-white font-heading text-xs font-extrabold text-primary shadow-[0_6px_18px_-8px_var(--color-primary)]">
          {String(index + 1).padStart(2, "0")}
          {/* Halo that keeps the spine from cutting through the number */}
          <span
            aria-hidden
            className="absolute -inset-1.5 -z-10 rounded-full bg-[var(--theme)]"
          />
        </span>
      </motion.div>

      {/* ---- Card ---- */}
      <motion.article
        initial={{ opacity: 0, y: 26, x: 0 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "group relative pl-12 md:pl-0",
          isLeft ? "md:col-start-1 md:row-start-1" : "md:col-start-2",
        )}
      >
        {/*
          Rung: joins the card to the spine.
          Mobile — the spine sits at 16px and the card starts at 48px (pl-12),
          so the rung runs left-4 → w-8. Desktop — the columns are 4rem apart,
          so it reaches half that (2rem) from whichever edge faces the centre.
        */}
        <span
          aria-hidden
          className={cn(
            "absolute top-[1.9rem] h-px bg-gradient-to-r from-primary/50 to-primary/10",
            "left-4 w-8",
            isLeft
              ? "md:left-auto md:-right-8 md:bg-gradient-to-l"
              : "md:-left-8",
          )}
        />

        <div
          className={cn(
            "relative flex gap-4 overflow-hidden rounded-[22px] border border-primary/10 bg-white/90 p-3.5 backdrop-blur-sm sm:gap-5 sm:p-4",
            "shadow-[0_1px_2px_rgba(15,23,42,0.04),0_14px_34px_-24px_rgba(15,23,42,0.45)]",
            "transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "hover:border-primary/35 hover:shadow-[0_2px_4px_rgba(15,23,42,0.04),0_26px_46px_-26px_var(--color-primary)]",
            isLeft
              ? "md:flex-row-reverse md:text-right md:hover:-translate-x-1.5"
              : "md:hover:translate-x-1.5",
            "hover:-translate-y-1 md:hover:translate-y-0",
          )}
        >
          {/* Photo — always the edge nearest the spine */}
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl sm:h-[5.5rem] sm:w-[5.5rem]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="88px"
              className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />
            <span className="absolute inset-0 ring-1 ring-inset ring-black/10" />
          </div>

          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
              {sector}
            </span>

            <h3 className="mt-2 font-heading text-base font-bold leading-tight text-secondary sm:text-lg">
              {title}
            </h3>

            <p className="mt-1.5 text-[0.84rem] leading-relaxed text-slate-600 sm:text-sm">
              {text}
            </p>
          </div>

          {/* Accent edge that lights up on hover */}
          <span
            aria-hidden
            className={cn(
              "absolute inset-y-0 w-[3px] origin-top scale-y-0 bg-gradient-to-b from-primary via-accent to-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100",
              isLeft ? "left-0 md:left-auto md:right-0" : "left-0",
            )}
          />
        </div>
      </motion.article>
    </div>
  );
}
