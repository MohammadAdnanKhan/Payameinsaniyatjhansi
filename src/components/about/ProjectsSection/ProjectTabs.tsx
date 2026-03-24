// "use client";

// import { useState } from "react";
// import { projects } from "@/data/aboutprojects";
// import { motion, AnimatePresence } from "framer-motion";
// import ProjectSlider from "./ProjectSlider";

// export default function ProjectTabs() {
//   const [active, setActive] = useState(projects[0]);

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-6">
//       <h2 className="text-3xl md:text-5xl text-center font-semibold mb-4 tracking-tight text-[var(--foreground)] leading-[1.15]">
//         <span className="relative z-10 text-primary">Our </span>
//         <span className="relative inline-block">
//           <span className="text-secondary"> Projects</span>

//           <span className="absolute bottom-2 left-0 w-full h-4 bg-secondary/20 -z-10 -rotate-2"></span>
//         </span>{" "}
//       </h2>

//       <div className="flex flex-wrap justify-center gap-3 mt-12">
//         {projects.map((p) => (
//           <button
//             key={p.id}
//             onClick={() => setActive(p)}
//             className={`min-w-[140px] whitespace-nowrap text-center px-4 py-2 rounded-lg text-sm font-medium transition
//             ${
//               active.id === p.id
//                 ? "bg-primary text-white"
//                 : "bg-white border border-green-200 hover:bg-primary/10"
//             }`}
//           >
//             {p.title}
//           </button>
//         ))}
//       </div>

//       <div className="mt-14">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active.id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.4 }}
//           >
//             <div className="bg-[var(--boldtheme)] border border-secondary/40 rounded-xl p-8 md:p-10 shadow-lg">
//               <h3 className="text-2xl font-semibold text-secondary text-center">
//                 {active.title}
//               </h3>

//               <p className="text-slate-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mt-4">
//                 {active.description}
//               </p>

//               <ProjectSlider key={active.id} images={active.images} />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { projects } from "@/data/aboutprojects";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import ProjectSlider from "./ProjectSlider";
import { cn } from "@/utils/cn";

export default function ProjectTabs() {
  const [active, setActive] = useState(projects[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
      
      {/* --- HEADER --- */}
      <h2 className="text-3xl md:text-5xl text-center font-semibold mb-12 tracking-tight text-[var(--foreground)] leading-[1.15]">
        <span className="relative z-10 text-primary">Our </span>
        <span className="relative inline-block">
          <span className="text-secondary"> Projects</span>
          <span className="absolute bottom-2 left-0 w-full h-4 bg-secondary/20 -z-10 -rotate-2"></span>
        </span>{" "}
      </h2>

      {/* --- MOBILE DROPDOWN (Visible on small screens) --- */}
      <div className="relative lg:hidden w-full max-w-md mx-auto mb-10 z-30">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between px-6 py-4 bg-[var(--boldtheme)] border border-secondary/40 rounded-xl shadow-sm font-semibold text-lg text-secondary transition-all active:scale-95"
        >
          {active.title}
          <ChevronDown
            className={cn(
              "w-5 h-5 text-secondary transition-transform duration-300",
              isDropdownOpen && "rotate-180"
            )}
          />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <>
              {/* Invisible overlay to close dropdown */}
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setIsDropdownOpen(false)} 
              />
              
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 w-full mt-2 bg-white border border-secondary/20 rounded-xl shadow-xl overflow-hidden z-50 max-h-[60vh] overflow-y-auto"
              >
                {projects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActive(p);
                      setIsDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between px-6 py-4 text-left font-medium transition-colors border-b border-gray-50 last:border-0",
                      active.id === p.id
                        ? "bg-primary/10 text-primary"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    {p.title}
                    {active.id === p.id && <Check className="w-5 h-5" />}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* --- DESKTOP TABS (Visible on large screens) --- */}
      <div className="hidden lg:flex flex-wrap justify-center gap-3 mb-14">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p)}
            className={cn(
              "min-w-[140px] whitespace-nowrap text-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 active:scale-95",
              active.id === p.id
                ? "bg-primary text-white shadow-md shadow-primary/30"
                : "bg-white border border-green-200 text-gray-600 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
            )}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* --- CONTENT CARD (Restored Original Design) --- */}
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-[var(--boldtheme)] border border-secondary/40 rounded-xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary text-center">
                {active.title}
              </h3>

              <p className="text-slate-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mt-4 mb-10">
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