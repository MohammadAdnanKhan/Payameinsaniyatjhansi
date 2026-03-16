"use client"

import { motion } from "framer-motion"
import {
  BadgeCheck,
  ShieldCheck,
  HeartHandshake,
  Users
} from "lucide-react"

export default function Transparency() {

  const items = [

    {
      title: "12A Registered",
      description:
        "Our organization is officially registered under Section 12A, ensuring compliance and accountability in our charitable operations.",
      icon: BadgeCheck
    },

    {
      title: "80G Certified",
      description:
        "Donations made to our organization qualify for tax benefits under Section 80G, encouraging transparent and impactful giving.",
      icon: ShieldCheck
    },

    {
      title: "Transparent Donations",
      description:
        "Every contribution is tracked and utilized responsibly, with clear reporting to maintain trust with our supporters.",
      icon: HeartHandshake
    },

    {
      title: "Community Driven",
      description:
        "Our programs are powered by volunteers and community members working together to create meaningful social impact.",
      icon: Users
    }

  ]

  return (

    <section className="bg-[var(--boldtheme)] py-24">

      <div className="max-w-6xl mx-auto px-6">


        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-semibold">

            <span className="text-primary">Transparency</span>{" "}
            <span className="text-secondary">& Trust</span>

          </h2>

          <p className="text-slate-600 mt-4 leading-relaxed">
            We believe trust is the foundation of every impactful initiative.
            Our commitment to transparency ensures every contribution creates
            real and measurable change.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {items.map((item, i) => {

            const Icon = item.icon

            return (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/80 backdrop-blur-sm border border-secondary/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >

                <div className="flex items-start gap-5">

                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition">

                    <Icon size={26} />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-secondary">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            )

          })}

        </div>

      </div>

    </section>

  )
}
