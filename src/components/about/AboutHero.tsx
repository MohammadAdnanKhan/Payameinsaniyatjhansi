// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { FlipWords } from "../common/flipwords";

// export default function AboutHero() {
//   return (
//     <section className="relative font-body py-4 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-14 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-8"
//         >
//           <p className="uppercase tracking-widest font-heading text-xs sm:text-sm text-[var(--color-primary)]">
//             Our Story
//           </p>

//           {/* <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] leading-tight text-secondary font-[var(--font-heading)] font-bold">
//             Together We Create
//             <span className="block mt-2">
//               <FlipWords
//                 words={[
//                   "opportunity.",
//                   "hope.",
//                   "dignity.",
//                   "education.",
//                   "a better future.",
//                 ]}
//                 className="text-primary italic"
//               />
//             </span>
//           </h1> */}
//           <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] leading-tight text-secondary font-[var(--font-heading)] font-bold">
//             Together We Create
//             <span className="block mt-2">
//               <span className="relative inline-block">
//                 <span className="relative z-10 text-primary italic inline-block">
//                   <FlipWords
//                     words={[
//                       "opportunity.",
//                       "hope.",
//                       "dignity.",
//                       "education.",
//                       "a better future.",
//                     ]}
//                   />
//                 </span>

//                 <span
//                   className="absolute bottom-1 left-0 h-4 bg-primary/20 -z-10 -rotate-2 
//                        transition-all duration-500 ease-in-out"
//                   style={{ width: "100%" }}
//                 />
//               </span>
//             </span>
//           </h1>
//           <p className="text-base sm:text-lg text-gray-700 max-w-xl">
//             Our organization began with a simple belief — that small acts of
//             kindness can ripple outward and transform communities. Through
//             education programs, hospital support, food initiatives, and clothing
//             drives, we work to restore dignity and opportunity where it is
//             needed most.
//           </p>

//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="relative max-w-xl"
//           >
//             <div className="relative bg-[var(--boldtheme)] backdrop-blur-xl border border-green-100 rounded-xl p-6 shadow-xl">
//               <p className="text-xs font-heading tracking-widest uppercase text-[var(--color-primary)] mb-5">
//                 What guides our work
//               </p>

//               <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//                 {["Compassion", "Dignity", "Community", "Hope"].map(
//                   (item, index) => (
//                     <motion.div
//                       key={item}
//                       initial={{ opacity: 0, y: 15 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       whileHover={{ y: -4 }}
//                       className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 cursor-default shadow-sm"
//                     >
//                       <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>

//                       <span className="text-sm font-medium">{item}</span>
//                     </motion.div>
//                   ),
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         <div className="grid grid-cols-2 gap-4 lg:hidden">
//           <div className="relative h-44 rounded-2xl overflow-hidden">
//             <Image
//               src="/majorprojects/rotibank.webp"
//               alt="RotiBank"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="relative h-44 rounded-2xl overflow-hidden">
//             <Image
//               src="/majorprojects/kapdabank.webp"
//               alt="Kapda Bank"
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="relative h-44 rounded-2xl overflow-hidden col-span-2">
//             <Image
//               src="/majorprojects/environment.webp"
//               alt="Environment"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         <div className="relative hidden lg:block h-[520px]">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             whileHover={{ y: -8 }}
//             className="absolute left-12 top-0 w-72 h-80 rounded-3xl overflow-hidden shadow-xl"
//           >
//             <Image
//               src="/majorprojects/rotibank.webp"
//               alt="RotiBank"
//               fill
//               className="object-cover"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             whileHover={{ y: -8 }}
//             className="absolute right-0 top-24 w-60 h-72 rounded-3xl overflow-hidden shadow-xl"
//           >
//             <Image
//               src="/majorprojects/kapdabank.webp"
//               alt="Kapda Bank"
//               fill
//               className="object-cover"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 70 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             whileHover={{ y: -8 }}
//             className="absolute left-0 bottom-0 w-56 h-64 rounded-3xl overflow-hidden shadow-xl"
//           >
//             <Image
//               src="/majorprojects/environment.webp"
//               alt="Environment"
//               fill
//               className="object-cover"
//             />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8 }}
//             whileHover={{ scale: 1.05 }}
//             className="absolute right-16 bottom-14 bg-[var(--boldtheme)] backdrop-blur-xl px-6 py-4 rounded-xl shadow-lg max-w-[220px]"
//           >
//             <p className="text-sm font-heading text-[var(--color-secondary)]">
//               Our belief
//             </p>

//             <p className="text-base font-semibold text-[var(--color-primary)]">
//               Every person deserves opportunity, dignity, and care.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FlipWords } from "../common/flipwords";
import ValuesPanel from "./ValuesPanel";

export default function AboutHero() {
  return (
    <section className="relative font-body pt-5 md:pt-2 pb-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <p className="uppercase tracking-widest font-heading text-xs sm:text-sm text-[var(--color-primary)] font-bold">
            Our Story
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] text-secondary font-heading font-extrabold">
            Together We Create
            <span className="block mt-2 relative inline-block">
              <span className="relative z-10 text-primary italic pr-4">
                <FlipWords
                  words={[
                    "opportunity.",
                    "hope.",
                    "dignity.",
                    "education.",
                    "a better future.",
                  ]}
                />
              </span>
              <span
                className="absolute bottom-2 sm:bottom-3 left-0 h-3 sm:h-4 bg-primary/20 -z-10 -rotate-2  transition-all duration-500"
                style={{ width: "100%" }}
              />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
            Our organization began with a simple belief — that small acts of
            kindness can ripple outward and transform communities. Through
            education programs, hospital support, food initiatives, and clothing
            drives, we work to restore dignity and opportunity where it is
            needed most.
          </p>

          <ValuesPanel />
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden mt-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image src="/majorprojects/rotibank.webp" alt="RotiBank" fill className="object-cover" />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image src="/majorprojects/kapdabank11.jpg" alt="Kapda Bank" fill className="object-cover" />
          </div>
          <div className="relative aspect-[2/1] sm:aspect-[21/9] rounded-2xl overflow-hidden col-span-2 shadow-lg">
            <Image src="/majorprojects/environment.webp" alt="Environment" fill className="object-cover" />
          </div>
        </div>

        <div className="relative hidden lg:block h-[560px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ y: -8 }}
            className="absolute left-8 top-0 w-72 h-[340px] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white"
          >
            <Image src="/majorprojects/rotibank.webp" alt="RotiBank" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} whileHover={{ y: -8 }}
            className="absolute right-0 top-20 w-64 h-[280px] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-4 border-white"
          >
            <Image src="/majorprojects/kapdabank.webp" alt="Kapda Bank" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} whileHover={{ y: -8 }}
            className="absolute left-0 bottom-0 w-60 h-[240px] rounded-[2rem] overflow-hidden shadow-2xl z-30 border-4 border-white"
          >
            <Image src="/majorprojects/environment.webp" alt="Environment" fill className="object-cover" />
          </motion.div>

          {/* Floating Belief Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} whileHover={{ scale: 1.05 }}
            className="absolute right-12 bottom-12 bg-white/90 backdrop-blur-xl px-6 py-5 rounded-2xl shadow-2xl max-w-[240px] z-40 border border-gray-100"
          >
            <p className="text-xs font-heading uppercase tracking-widest text-[var(--color-secondary)] mb-1 font-bold">
              Our belief
            </p>
            <p className="text-sm font-bold text-[var(--color-primary)] leading-snug">
              Every person deserves opportunity, dignity, and care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}