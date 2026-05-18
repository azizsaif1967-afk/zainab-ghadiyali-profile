const FEATURES = [
  {
    n: "01",
    title: "Teach by showing.",
    desc: "Record once. Stackbirds watches what you click, type, and decide — then builds an agent that matches your exact process.",
    accent: "text-coral",
  },
  {
    n: "02",
    title: "Runs on your real stack.",
    desc: "Any browser app — Salesforce, HubSpot, Notion, Stripe, internal tools. No APIs, no integrations, no maintenance headaches.",
    accent: "text-peach",
  },
  {
    n: "03",
    title: "Asks when it's unsure.",
    desc: "Flags edge cases in plain English and waits for your call. Every answer makes the next run smarter, automatically.",
    accent: "text-sunshine",
  },
  {
    n: "04",
    title: "Faster every run.",
    desc: "A shared runtime means every agent inherits tricks from the flock. Your fifth agent trains in seconds, not minutes.",
    accent: "text-mint",
  },
  {
    n: "05",
    title: "Safe by default.",
    desc: "Isolated sandbox, full audit trails, approval gates for destructive steps. SOC 2 ready, SSO included.",
    accent: "text-sky",
  },
  {
    n: "06",
    title: "Ships in an afternoon.",
    desc: "Most teams are delegating real work within their first afternoon. Onboard in five minutes, train your first agent in ten.",
    accent: "text-lavender",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 lg:py-36 bg-ink text-cream overflow-hidden">
      {/* ambient color blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(circle, #FF6B5B 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(circle, #C9B8FF 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cream/15 text-[11px] font-mono uppercase tracking-[0.15em] text-cream/60">
              <span className="w-1 h-1 rounded-full bg-coral" />
              What makes it different
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-[44px] lg:text-[68px] leading-[1.0] tracking-[-0.03em] font-[450]">
              Everything ops teams wish{" "}
              <span className="italic font-[350] text-gradient-warm">automation actually did.</span>
            </h2>
            <p className="mt-6 text-[18px] text-cream/60 max-w-xl leading-relaxed">
              Built for the messy, unpredictable workflows every other tool quietly gives up on.
            </p>
          </div>
        </div>

        {/* editorial feature list — not a boring card grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14 lg:gap-y-20">
          {FEATURES.map((f) => (
            <div key={f.n} className="group relative">
              <div className="flex items-baseline gap-6 mb-4">
                <span className={`font-display text-[72px] leading-none font-[350] ${f.accent} italic`}>
                  {f.n}
                </span>
                <span className="h-px flex-1 bg-cream/15 mb-4" />
              </div>
              <h3 className="font-display text-[28px] lg:text-[34px] leading-[1.1] tracking-[-0.02em] font-[450] mb-3">
                {f.title}
              </h3>
              <p className="text-[15px] text-cream/60 leading-relaxed max-w-md">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
