"use client";

import { useState } from "react";
import { projects } from "@/data/aboutprojects";
import { motion, AnimatePresence } from "framer-motion";
import ProjectSlider from "./ProjectSlider";

export default function ProjectTabs() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-6">
      <h2 className="text-3xl md:text-5xl text-center font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
        <span className="relative z-10 text-primary">Our </span>
        <span className="relative inline-block">
          <span className="text-secondary"> Projects</span>

          <span className="absolute bottom-2 left-0 w-full h-4 bg-secondary/20 -z-10 -rotate-2"></span>
        </span>{" "}
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mt-12">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p)}
            className={`min-w-[140px] whitespace-nowrap text-center px-4 py-2 rounded-lg text-sm font-medium transition
            ${
              active.id === p.id
                ? "bg-primary text-white"
                : "bg-white border border-green-200 hover:bg-primary/10"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="mt-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-[var(--boldtheme)] border border-secondary/40 rounded-xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary text-center">
                {active.title}
              </h3>

              <p className="text-slate-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mt-4">
                {active.description}
              </p>

              <ProjectSlider key={active.id} images={active.images} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
