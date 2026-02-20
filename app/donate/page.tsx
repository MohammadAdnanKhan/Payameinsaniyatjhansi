export default function DonatePage() {
  return (
    <section className="min-h-screen bg-[var(--theme)] px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-heading text-foreground">
          Support Our Mission
        </h1>

        <p className="mt-6 text-black/70 leading-relaxed">
          Your contribution helps us provide essential support, healthcare,
          education, and livelihood opportunities to communities in need.
        </p>

        <div className="mt-10">
          <button className="rounded-md bg-primary px-8 py-4 text-white font-medium hover:opacity-90 transition">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
}
