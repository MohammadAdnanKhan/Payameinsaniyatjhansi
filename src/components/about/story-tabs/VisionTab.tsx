import { Heart, Users, Sprout } from "lucide-react"

export default function VisionTab() {

  const pillars = [
    {
      title: "Dignity for All",
      text: "A community where every person is treated with respect and has access to basic necessities.",
      icon: Heart
    },
    {
      title: "Stronger Communities",
      text: "Encouraging people to come together, support one another, and build a culture of compassion and care.",
      icon: Users
    },
    {
      title: "Opportunities to Thrive",
      text: "Creating pathways where individuals can access support, opportunities, and resources to build better futures.",
      icon: Sprout
    }
  ]

  return (
    <section className="py-10 px-4">

      <div className="text-center space-y-5">

        <h3 className="text-2xl font-semibold text-secondary">
          Our Vision
        </h3>

        <div className="w-14 h-[2px] bg-primary mx-auto rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-6">

          {pillars.map((p, i) => {

            const Icon = p.icon

            return (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-3"
              >

                <div className="p-3 rounded-4xl border bg-primary/10 text-primary">
                  <Icon size={24} />
                </div>

                <h4 className="text-xl font-semibold text-secondary">
                  {p.title}
                </h4>

                <p className="text-slate-700 leading-relaxed">
                  {p.text}
                </p>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}