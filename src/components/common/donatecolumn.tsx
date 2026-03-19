"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ElegantButton from "./styledbutton";
export default function Donatecol() {
  const router = useRouter();
  const [progress, setProgress] = useState(75);

  useEffect(() => {
    const stored = localStorage.getItem("donation-progress");
    const lastDate = localStorage.getItem("donation-date");
    const today = new Date().toDateString();

    let value = stored ? parseFloat(stored) : 75;

    if (lastDate !== today) {
      value += 0.5;
      if (value > 90) value = 75;
      localStorage.setItem("donation-progress", value.toString());
      localStorage.setItem("donation-date", today);
    }

    setProgress(value);
  }, []);

  return (
    <section className="bg-theme px-6 py-6 text-foreground">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-sm font-body text-secondary">
              Quiet progress. Real impact.
            </p>
          </div>

          <p className="text-sm font-heading text-primary font-medium">
            {progress.toFixed(1)}% funded
          </p>
        </div>

        <div className="flex items-center gap-6">

          <div className="relative flex-1 h-3 bg-secondary/10 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
              }}
            />
          </div>

              <ElegantButton
                href="/donate"
                background="var(--color-primary)"
                textColor="var(--background)"
                borderColor="var(--color-accent)"
                hoverBackground="var(--color-primary-hover)"
                glowColor="var(--color-accent)"
              >
                Donate 
              </ElegantButton>

        </div>


        <p className="mt-4 text-sm text-(--color-secondary) italic font-body opacity-60">
          Be the reason someone smiles today
        </p>

      </div>
    </section>
  );
}
