"use client";

import "./hero.css";
import HeroStats from "./herostats";
import ElegantButton from "../common/styledbutton";
import dynamic from "next/dynamic";

const FlipWords = dynamic(
  () => import("../common/flipwords").then((mod) => mod.FlipWords),
  { ssr: false }
);

export default function HeroClient() {
  return (
    <>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none hero-float-1" />

      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none hero-float-2" />
      <div className="relative z-10">
        <div className="hero-fade-up inline-flex items-center gap-3 px-4 rounded-full bg-muted border border-muted text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Ground-level impact since 2020
        </div>

        <h1 className="hero-fade-up hero-delay-1 mt-4 text-[2.75rem] sm:text-5xl lg:text-[3.45rem] leading-[1.1] text-secondary font-[var(--font-heading)] font-bold">
          We don’t just help survive.
          <span className="block mt-2">
            We build{" "}
            <FlipWords
              words={[
                "stability.",
                "livelihoods.",
                "futures.",
                "dignity.",
                "opportunity.",
              ]}
              className="text-primary italic"
            />
          </span>
        </h1>

        <p className="hero-fade-up hero-delay-2 mt-3 text-lg max-w-xl opacity-80 leading-relaxed">
          We empower communities through social activism, environmental
          projects, and essential support, providing food, jobs, water,
          green spaces, and help with life milestones.
        </p>

        <div className="hero-fade-up hero-delay-3 mt-5 flex flex-wrap gap-4 items-center">
          <ElegantButton
            href="/donate"
            background="var(--color-primary)"
            textColor="var(--background)"
            borderColor="var(--color-accent)"
            hoverBackground="var(--color-primary-hover)"
            glowColor="var(--color-accent)"
          >
            Donate who deserve
          </ElegantButton>

          <ElegantButton
            href="/about"
            background="var(--color-secondary)"
            textColor="var(--background)"
            borderColor="var(--color-accent)"
            hoverBackground="var(--color-secondary-hover)"
            glowColor="var(--color-accent)"
          >
            Know More
          </ElegantButton>
        </div>

        <div className="hero-fade-up hero-delay-4 mt-10 grid grid-cols-3 gap-6 max-w-lg border-t border-secondary/10 pt-5">
          <HeroStats />
        </div>
      </div>
    </>
  );
}