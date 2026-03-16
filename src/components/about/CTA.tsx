"use client"

import { motion } from "framer-motion"
import { HeartHandshake, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTA() {

  return (

    <section className="relative py-10 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          viewport={{ once:true }}
          className="text-3xl md:text-5xl font-semibold"
        >
          <span className="text-primary">Together</span>{" "}
          <span className="text-secondary">We Can Make a Difference</span>
        </motion.h2>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:0.2 }}
          viewport={{ once:true }}
          className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          Your support helps us provide food, clothing, healthcare,
          employment opportunities, and dignity to people who need it most.
          Every contribution creates real impact in our community.
        </motion.p>

        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ delay:0.3 }}
          viewport={{ once:true }}
          className="flex flex-col sm:flex-row justify-center gap-5 mt-12"
        >

          <Link
            href="/donate"
            className="flex items-center justify-center gap-3
            bg-primary hover:bg-primary/90
            text-white px-8 py-4 rounded-xl
            font-semibold shadow-lg hover:scale-105
            transition"
          >
            <HeartHandshake size={20} />
            Donate Now
          </Link>

          <Link
            href="/news"
            className="flex items-center justify-center gap-2
            border border-secondary text-secondary
            hover:bg-secondary hover:text-white
            px-8 py-4 rounded-xl font-semibold
            transition"
          >
            Daily News
            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>

    </section>
  )
}
