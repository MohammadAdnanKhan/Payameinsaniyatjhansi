export default function TimelineTab() {
  const events = [
    { date: "01 Jun 2022", title: "Roti Bank" },
    { date: "10 Jun 2022", title: "Kapda Bank" },
    { date: "06 Jun 2023", title: "Shaadi Rishta Bank" },
    { date: "11 Oct 2023", title: "Rojgar Bank" },
    { date: "07 Aug 2024", title: "Antim Yatra Service" },
  ];

  return (
    <section className="py-12 px-4">
      <div className="text-center mb-10 space-y-3">
        <h3 className="text-2xl font-semibold text-secondary">Our Journey</h3>
        <div className="w-14 h-[2px] bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-3 md:left-5 top-0 bottom-0 w-[3px] bg-primary/30 rounded-full"></div>

        <div className="space-y-8">
          {events.map((event, i) => (
            <div key={i} className="relative pl-10 md:pl-12">
              <div className="absolute left-3 md:left-5 top-3 -translate-x-1/2 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>

              <div className="bg-white/70 border border-green-100 rounded-md p-4 md:p-5 hover:shadow-md transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
                  <h4 className="font-semibold text-secondary">
                    {event.title}
                  </h4>

                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md w-fit">
                    {event.date}
                  </span>
                </div>

                <p className="text-sm text-slate-600">
                  Initiative launched as part of our community support programs.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
