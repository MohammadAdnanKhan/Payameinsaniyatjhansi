"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FlipWords } from "../common/flipwords";

export default function AboutHero() {
  return (
    <section className="relative font-body py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="uppercase tracking-widest font-heading text-xs sm:text-sm text-[var(--color-primary)]">
            Our Story
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] leading-tight text-secondary font-[var(--font-heading)] font-bold">
            Together We Create
            <span className="block mt-2">
              <FlipWords
                words={[
                  "opportunity.",
                  "hope.",
                  "dignity.",
                  "education.",
                  "a better future.",
                ]}
                className="text-primary italic"
              />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-700 max-w-xl">
            Our organization began with a simple belief — that small acts of
            kindness can ripple outward and transform communities. Through
            education programs, hospital support, food initiatives, and clothing
            drives, we work to restore dignity and opportunity where it is
            needed most.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative max-w-xl"
          >
            <div className="relative bg-[var(--boldtheme)] backdrop-blur-xl border border-green-100 rounded-xl p-6 shadow-xl">
              <p className="text-xs font-heading tracking-widest uppercase text-[var(--color-primary)] mb-5">
                What guides our work
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {["Compassion", "Dignity", "Community", "Hope"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 cursor-default shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>

                      <span className="text-sm font-medium">{item}</span>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:hidden">
          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src="/majorprojects/rotibank.webp"
              alt="RotiBank"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-44 rounded-2xl overflow-hidden">
            <Image
              src="/majorprojects/kapdabank.webp"
              alt="Kapda Bank"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-44 rounded-2xl overflow-hidden col-span-2">
            <Image
              src="/majorprojects/environment.webp"
              alt="Environment"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative hidden lg:block h-[520px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="absolute left-12 top-0 w-72 h-80 rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/majorprojects/rotibank.webp"
              alt="RotiBank"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -8 }}
            className="absolute right-0 top-24 w-60 h-72 rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/majorprojects/kapdabank.webp"
              alt="Kapda Bank"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -8 }}
            className="absolute left-0 bottom-0 w-56 h-64 rounded-3xl overflow-hidden shadow-xl"
          >
            <Image
              src="/majorprojects/environment.webp"
              alt="Environment"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="absolute right-16 bottom-14 bg-[var(--boldtheme)] backdrop-blur-xl px-6 py-4 rounded-xl shadow-lg max-w-[220px]"
          >
            <p className="text-sm font-heading text-[var(--color-secondary)]">
              Our belief
            </p>

            <p className="text-base font-semibold text-[var(--color-primary)]">
              Every person deserves opportunity, dignity, and care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
