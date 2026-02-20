"use client";
import { FlipWords } from "../common/flipwords";
import HeroStats from "./herostats";
import ElegantButton from "../common/styledbutton";
import Majorprojects from "../additional/majorprojects";
import Donatecol from "../common/donatecolumn";
import DonateTreeSection from "../donategrid/DonateTreeSection";
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-theme text-foreground px-10 overflow-hidden py-3">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-4 rounded-full bg-muted border border-muted text-sm font-medium font-[var(--font-body)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Ground-level impact since 2020
            </div>

            <h1 className="mt-4 text-[2.75rem] sm:text-5xl lg:text-[3.45rem] leading-[1.1] text-secondary font-[var(--font-heading)] font-bold ">
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

            <p className="mt-3 text-lg max-w-xl opacity-80 font-[var(--font-body)] leading-relaxed">
              We empower communities through social activism, environmental
              projects, and essential support, providing food, jobs, water,
              green spaces, and help with life milestones. Together, we create
              hope and opportunity for all.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 items-center">
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

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg border-t border-secondary/10 pt-5">
              <HeroStats></HeroStats>
            </div>
          </div>
          <div className="relative">
            <div
              className="
                relative
                rounded-[2.5rem]
                overflow-hidden
                shadow-2xl
                border-4 border-[var(--theme)]
                h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px]
              "
            >
              <img
                src="/hero.png"
                alt="Community collaboration"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div
                className="
                  hidden sm:block
                  absolute bottom-6 left-6
                  bg-background/90 backdrop-blur-md
                  p-5 rounded-2xl shadow-lg border border-white/10
                  max-w-[260px]
                "
              >
                <p className="text-xs font-bold text-secondary uppercase tracking-wide mb-1">
                  Our Mission
                </p>
                <p className="text-sm opacity-90 leading-snug">
                  Ensuring no one sleeps hungry <br />
                  or without proper clothing.
                </p>
                <div className="mt-3 h-1 w-12 bg-primary rounded-full" />
              </div>

              <div
                className="
                  absolute
                  bottom-4 left-4 right-4
                  sm:top-6 sm:right-6 sm:bottom-auto sm:left-auto
                  bg-secondary/90 backdrop-blur-md
                  text-background
                  p-4 sm:p-5
                  rounded-xl sm:rounded-2xl
                  shadow-lg
                  border border-white/10
                  max-w-[220px] sm:max-w-[220px]
                "
              >
                <p className="text-[10px] uppercase tracking-wide opacity-80 mb-2">
                  Words to Remember
                </p>
                <p className="text-sm font-medium italic leading-snug">
                  “Charity does not diminish wealth; it multiplies impact.”
                </p>
              </div>
            </div>

            <div className="absolute inset-0 border-2 border-primary/20 rounded-[2.5rem] translate-x-4 translate-y-4 -z-10" />
          </div>
        </div>
      </div>
      <Majorprojects></Majorprojects>
      <DonateTreeSection />
      <Donatecol />
    </section>
  );
}
