import {
  Utensils,
  Briefcase,
  HeartPulse,
  Shirt,
  Truck,
  HandHeart,
} from "lucide-react";

export default function MissionTab() {
  const missions = [
    {
      text: "Providing daily nutritious meals to the poor, homeless, and underprivileged across Jhansi.",
      icon: Utensils,
    },
    {
      text: "Connecting unemployed youth with sustainable job opportunities and career support.",
      icon: Briefcase,
    },
    {
      text: "Organizing health check-ups and voluntary blood donation drives for community care.",
      icon: HeartPulse,
    },
    {
      text: "Distributing quality clothing to underprivileged families with dignity and compassion.",
      icon: Shirt,
    },
    {
      text: "Offering respectful and free funeral transportation services to families in need.",
      icon: Truck,
    },
    {
      text: "Mobilizing community fundraising to support urgent medical and disaster relief cases.",
      icon: HandHeart,
    },
  ];

  return (
    <section className="space-y-8">
      <h3 className="text-2xl font-semibold text-center text-secondary">
        Our Mission
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {missions.map((m, i) => {
          const Icon = m.icon;

          return (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/70 border border-green-100 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary border">
                <Icon size={22} />
              </div>

              <p className="text-slate-700 leading-relaxed">{m.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
