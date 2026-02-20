"use client";

import DonateCard from "./DonateCard";
import { donateData } from "@/data/donateData";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function DonateTreeSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const visibleData = isMobile ? donateData.slice(0, 3) : donateData;

  const rows = Array.from(
    { length: Math.ceil(visibleData.length / 2) },
    (_, i) => visibleData.slice(i * 2, i * 2 + 2)
  );

  return (
    <section className="relative py-16 px-6 bg-[var(--theme)] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)]">
            Donate Who Deserved
          </h2>
          <p className="mt-3 text-[var(--foreground)] opacity-70 max-w-xl mx-auto">
            Support initiatives that truly change lives.
          </p>
        </div>

        {!isMobile && (
          <div className="absolute left-1/2 top-40 bottom-10 w-[2px] bg-black/40 -translate-x-1/2" />
        )}

        <div className="space-y-16 relative">

          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="relative grid md:grid-cols-2 gap-10 items-center"
            >
              {row.map((item, index) => (
                <DonateCard
                  key={item.id}
                  image={item.image}
                  text={item.text}
                  reverse={!isMobile && index === 1}
                />
              ))}

              {!isMobile && row.length === 2 && (
                <div className="absolute left-1/2 top-1/2 w-16 h-[2px] bg-black/40 -translate-x-1/2" />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
