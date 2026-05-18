"use client";
import { useEffect, useState } from "react";

const STEPS = [
  { label: "Recording workflow", sub: "salesforce · 2:14", done: true },
  { label: "Identifying patterns", sub: "12 fields mapped", done: true },
  { label: "Training agent", sub: "running", progress: true },
  { label: "Ready to fly", sub: "awaiting deploy", idle: true },
];

export default function Hero() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setProgress((p) => (p >= 72 ? 0 : p + 2)), 100);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-warm">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-60 blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(circle, #FFB59E 0%, transparent 70%)" }} />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-50 blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(circle, #C9B8FF 0%, transparent 70%)" }} />

      <div className="container-page relative pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: editorial headline */}
          <div className="lg:col-span-7 relative">
            <div className="chip mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse-dot" />
              World's first self-trained agent
            </div>

            <h1 className="font-display text-[60px] sm:text-[84px] lg:text-[104px] leading-[0.92] tracking-[-0.035em] font-[450]">
              Your busywork,{" "}
              <span className="italic font-[350] text-gradient">on autopilot</span>.
            </h1>

            <p className="mt-8 text-[19px] text-muted max-w-xl leading-[1.55]">
              Record any browser workflow once. Stackbirds trains an autonomous agent
              that runs it for you — forever. <span className="text-ink font-medium">No prompts. No glue code. No babysitting.</span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#cta" className="btn-primary">
                Train your first agent
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#how" className="btn-ghost">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M6.5 5.5v5l4-2.5z" fill="currentColor" />
                </svg>
                Watch a 60-sec demo
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  "from-coral to-peach",
                  "from-lavender to-sky",
                  "from-sunshine to-peach",
                  "from-mint to-sky",
                ].map((g, i) => (
                  <span key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-cream shadow-soft`} />
                ))}
              </div>
              <p className="text-[13.5px] text-muted leading-tight">
                <span className="font-semibold text-ink">3,400+ operators</span><br/>
                shipping agents this week
              </p>
            </div>
          </div>

          {/* RIGHT: product preview, asymmetric */}
          <div className="lg:col-span-5 relative lg:-mr-8">
            {/* floating accent tags */}
            <div className="absolute -top-6 -left-6 z-20 px-3 py-2 rounded-2xl bg-white shadow-softLg hairline flex items-center gap-2 rotate-[-4deg]">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse-dot" />
              <span className="text-[11px] font-medium">Recording live</span>
            </div>
            <div className="absolute -bottom-5 -right-3 z-20 px-3 py-2 rounded-2xl bg-ink text-cream shadow-softLg flex items-center gap-2 rotate-[3deg]">
              <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                <path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[11px] font-medium">Agent trained · 4m 12s</span>
            </div>

            <div className="absolute -inset-6 rounded-[2.5rem] opacity-70 blur-2xl pointer-events-none"
                 style={{ background: "linear-gradient(140deg, rgba(255,107,91,0.35), rgba(201,184,255,0.3))" }} />

            <div className="relative rounded-3xl bg-white shadow-softXl hairline overflow-hidden">
              {/* window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B5B]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD36E]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A7E8C8]/90" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[10.5px] text-muted font-mono">the nest · training</span>
                </div>
              </div>

              {/* fake recording frame */}
              <div className="relative aspect-[16/11] bg-gradient-to-br from-sky/25 via-lavender/20 to-peach/25">
                <div className="absolute inset-0 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 rounded-md bg-white shadow-soft" />
                    <div className="h-2 w-20 rounded-full bg-white/80" />
                    <div className="ml-auto h-2 w-10 rounded-full bg-white/60" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 rounded-full bg-white/70 w-full" />
                    <div className="h-1.5 rounded-full bg-white/60 w-4/5" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-lg bg-white shadow-soft" />
                    <div className="h-12 rounded-lg bg-white shadow-soft" />
                    <div className="h-12 rounded-lg bg-coral/20 hairline relative">
                      <div className="absolute inset-0 rounded-lg ring-2 ring-coral/60 animate-pulse-dot" />
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <div className="h-2 w-16 rounded-full bg-white/60" />
                    <div className="h-2 w-12 rounded-full bg-white/50" />
                  </div>
                </div>
                {/* cursor */}
                <div className="absolute top-[62%] left-[68%] w-5 h-5 animate-float">
                  <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-md">
                    <path d="M4 2 L4 18 L9 13 L12 20 L14 19 L11 12 L18 12 Z" fill="white" stroke="#1B1530" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* pipeline */}
              <div className="px-5 py-4 border-t border-line bg-cream/40">
                <ul className="space-y-2.5">
                  {STEPS.map((s, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`w-4 h-4 rounded-full grid place-items-center shrink-0 ${
                        s.done ? "bg-mint" : s.idle ? "bg-line" : "bg-coral/25"
                      }`}>
                        {s.done ? (
                          <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 text-ink">
                            <path d="M2 5 L4 7 L8 3" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : s.progress ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse-dot" />
                        ) : (
                          <span className="w-1 h-1 rounded-full bg-muted/50" />
                        )}
                      </span>
                      <span className="text-[12.5px] font-medium text-ink flex-1">{s.label}</span>
                      {s.progress ? (
                        <div className="w-16 h-1 rounded-full bg-line overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-100"
                               style={{ width: `${progress}%`, background: "linear-gradient(90deg, #FF6B5B, #FFB59E)" }} />
                        </div>
                      ) : (
                        <span className="text-[10.5px] font-mono text-muted">{s.sub}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* logo cloud — editorial with label */}
        <div className="mt-24 lg:mt-28 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="shrink-0 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
            <span className="h-px w-10 bg-line" />
            Shipping from
          </div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 opacity-70">
            {["Loom", "Ramp", "Linear", "Vercel", "Notion", "Retool"].map((name) => (
              <span key={name} className="text-[16px] font-semibold tracking-tight text-ink/80">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
