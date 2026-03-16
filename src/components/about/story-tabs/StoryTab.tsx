import { Sparkles, HandHelping, Leaf } from "lucide-react";

export default function StoryTab() {
  const story = [
    {
      icon: Sparkles,
      text: (
        <>
          Our journey began in{" "}
          <span className="font-semibold text-secondary">2020</span> during the
          challenging days of the{" "}
          <span className="font-medium text-secondary">COVID-19 pandemic</span>.
          During this difficult time, we witnessed many people struggling to
          access basic necessities such as food, clothing, and medicines. Seeing
          their hardships inspired us to step forward and help those in need —
          whether they were homeless individuals, daily wage workers, or
          travelers stranded without support.
        </>
      ),
    },
    {
      icon: HandHelping,
      text: (
        <>
          What started as a small effort soon grew into organized initiatives.
          We began conducting{" "}
          <span className="text-primary font-medium">food camps</span>, clothing
          distribution drives, fruit distribution programs at hospitals, and
          providing essential support to vulnerable communities.
        </>
      ),
    },
    {
      icon: Leaf,
      text: (
        <>
          Today, our work has expanded beyond emergency support. Our initiatives
          now include education support, hospital assistance, environmental
          programs, and various social welfare activities. With the support of{" "}
          <span className="font-medium text-primary">
            volunteers and well-wishers
          </span>
          , we continue striving to create a{" "}
          <span className="font-medium text-secondary">
            positive and lasting impact
          </span>{" "}
          in the community.
        </>
      ),
    },
  ];

  return (
    <section className="py-10 px-4">
      <div className="text-center space-y-5">
        <h3 className="text-2xl font-semibold text-secondary">
          How It All Began
        </h3>

        <div className="w-14 h-[2px] bg-primary mx-auto rounded-full"></div>

        <div className="max-w-5xl mx-auto space-y-6 pt-4">
          {story.map((item, i) => {
            const Icon = item.icon;

            return (
              <div key={i} className="flex items-start gap-4 text-left">
                <div className="p-2 rounded-lg bg-primary/10 text-primary border flex-shrink-0">
                  <Icon size={20} />
                </div>

                <p className="text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
