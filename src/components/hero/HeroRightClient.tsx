// "use client";

import "./hero.css";

export default function HeroRightClient() {
  return (
    <>
      <div
        className="hidden sm:block absolute bottom-6 left-6 bg-background/90 backdrop-blur-md
        p-5 rounded-2xl shadow-lg border border-white/10 max-w-[260px] hero-card-float"
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
        className="absolute bottom-4 left-4 right-4 sm:top-6 sm:right-6 sm:bottom-auto sm:left-auto
        bg-secondary/90 backdrop-blur-md text-background p-4 sm:p-5
        rounded-xl sm:rounded-2xl shadow-lg border border-white/10
        max-w-[220px] hero-card-float"
      >
        <p className="text-[10px] uppercase tracking-wide opacity-80 mb-2">
          Words to Remember
        </p>

        <p className="text-sm font-medium italic leading-snug">
          “Charity does not diminish wealth; it multiplies impact.”
        </p>
      </div>
    </>
  );
}