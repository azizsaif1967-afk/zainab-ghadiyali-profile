const QUOTES = [
  {
    pull: "I got ninety minutes of my life back. Per day.",
    body: "I recorded my Monday CRM cleanup once, and now an agent does it every morning at 8. I don't know what to do with all the extra time.",
    name: "Alex Patel",
    role: "Ops lead",
    company: "Series B SaaS",
    avatar: "from-coral to-peach",
    initials: "AP",
    bg: "bg-peach/25",
  },
  {
    pull: "Our fifth agent took forty-seven seconds to train.",
    body: "The shared runtime thing is real. Our first took nine minutes. Our fifth took forty-seven seconds. I'm never writing another Zap again.",
    name: "Sam Kowalski",
    role: "Growth ops",
    company: "Marketplace",
    avatar: "from-lavender to-sky",
    initials: "SK",
    bg: "bg-lavender/25",
  },
  {
    pull: "My engineer cried. I cried.",
    body: "I replaced a 300-line Zapier chain with one screen recording. The Zapier sales rep probably cried too. We're building a second flock now.",
    name: "Ben Zhao",
    role: "Head of ops",
    company: "D2C brand",
    avatar: "from-mint to-sky",
    initials: "BZ",
    bg: "bg-mint/25",
  },
  {
    pull: "A better question than any engineer has asked in a planning meeting.",
    body: "Stackbirds asked me: 'what do you do when there are two matching contacts?' I hadn't thought about it in five years.",
    name: "Priya Menon",
    role: "RevOps director",
    company: "Enterprise SaaS",
    avatar: "from-sunshine to-peach",
    initials: "PM",
    bg: "bg-sunshine/25",
  },
  {
    pull: "One agent fills fourteen internal systems in under four minutes.",
    body: "We use it to onboard every new enterprise customer. Our sales team no longer emails me 'hey can you just'. I think about that sentence a lot.",
    name: "Noor Abbas",
    role: "Implementations lead",
    company: "Fintech",
    avatar: "from-rose to-lavender",
    initials: "NA",
    bg: "bg-rose/30",
  },
  {
    pull: "I'd have paid an engineer three weeks to build this.",
    body: "Gave it a browser and a screen recording. Got back an agent I'd have paid an engineer three weeks to build. Unreasonably good.",
    name: "Ravi Thakur",
    role: "Founder",
    company: "Fintech startup",
    avatar: "from-violet to-coral",
    initials: "RT",
    bg: "bg-sky/30",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-36 bg-cream overflow-hidden">
      <div className="absolute top-10 right-[8%] w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(circle, #FFB59E 0%, transparent 70%)" }} />
      <div className="absolute bottom-10 left-[6%] w-96 h-96 rounded-full opacity-25 blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(circle, #C9B8FF 0%, transparent 70%)" }} />

      <div className="container-page relative">
        <div className="max-w-3xl mb-20">
          <div className="chip mb-5">Letters from the field</div>
          <h2 className="font-display text-[44px] lg:text-[72px] leading-[1.0] tracking-[-0.03em] font-[450]">
            Operators who{" "}
            <span className="italic font-[350] text-gradient-warm">got their week back.</span>
          </h2>
        </div>

        {/* asymmetric masonry-ish grid */}
        <div className="grid md:grid-cols-6 gap-5 lg:gap-6">
          {QUOTES.map((q, i) => {
            // vary span to feel editorial
            const span = i === 0 || i === 3 ? "md:col-span-4" : "md:col-span-2";
            const featured = i === 0 || i === 3;
            return (
              <figure
                key={i}
                className={`${span} ${q.bg} rounded-4xl hairline p-7 lg:p-9 shadow-soft hover:shadow-softLg transition-all flex flex-col`}
              >
                {featured && (
                  <p className="font-display text-[26px] lg:text-[32px] leading-[1.15] tracking-[-0.01em] font-[450] mb-5 text-ink">
                    "{q.pull}"
                  </p>
                )}
                {!featured && (
                  <p className="font-display text-[19px] leading-[1.2] font-[450] mb-4 text-ink">
                    "{q.pull}"
                  </p>
                )}
                <blockquote className={`${featured ? "text-[15.5px]" : "text-[13.5px]"} text-ink/65 leading-relaxed flex-1`}>
                  {q.body}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-ink/10 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${q.avatar} grid place-items-center text-white text-[11px] font-semibold shadow-soft`}>
                    {q.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-ink leading-tight">{q.name}</div>
                    <div className="text-[11.5px] text-muted mt-0.5">{q.role} · {q.company}</div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
