const STEPS = [
  {
    n: "i",
    title: "Record",
    verb: "Show it once.",
    desc: "Click the Stackbirds extension and run your workflow like you normally would. No scripts. No setup. No clean room.",
    tag: "≈ 2 minutes",
    bg: "bg-peach/30",
    ring: "ring-coral/30",
  },
  {
    n: "ii",
    title: "Train",
    verb: "It watches and asks.",
    desc: "Our model infers intent from your actions and asks clarifying questions about edge cases — in plain English, not JSON.",
    tag: "≈ 5 minutes",
    bg: "bg-lavender/30",
    ring: "ring-violet/30",
  },
  {
    n: "iii",
    title: "Delegate",
    verb: "It runs. Forever.",
    desc: "Deploy your agent. It runs on a schedule, on demand, or on triggers — and flags anything unusual right back to you.",
    tag: "≈ forever",
    bg: "bg-mint/30",
    ring: "ring-[#2F8F5D]/30",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-28 lg:py-36 bg-cream">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <div className="chip mb-5">How it works</div>
            <h2 className="font-display text-[44px] lg:text-[68px] leading-[1.0] tracking-[-0.03em] font-[450]">
              Three steps.{" "}
              <span className="italic font-[350] text-gradient">One afternoon.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p className="text-[18px] text-muted leading-relaxed max-w-md">
              From busywork to background job in less time than it takes to write a Notion doc about it. Here's the whole thing, start to finish.
            </p>
          </div>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              {/* oversized roman numeral */}
              <div className="lg:col-span-4 flex items-center gap-6">
                <span className="font-display italic text-[100px] lg:text-[140px] leading-[0.8] font-[350] text-gradient-warm">
                  {s.n}
                </span>
              </div>

              <div className={`lg:col-span-5 relative rounded-4xl ${s.bg} hairline p-8 lg:p-10 shadow-soft`}>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted mb-2">
                  Step {i + 1} · {s.title}
                </div>
                <h3 className="font-display text-[32px] lg:text-[42px] leading-[1.05] tracking-[-0.02em] font-[450] mb-4">
                  {s.verb}
                </h3>
                <p className="text-[15.5px] text-ink/75 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="lg:col-span-3 flex lg:justify-end">
                <span className="inline-block px-4 py-2 rounded-full bg-white hairline text-[12px] font-mono text-muted shadow-soft">
                  {s.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#cta" className="btn-primary">
            Try it free
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
