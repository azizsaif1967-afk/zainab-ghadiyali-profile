"use client";
import { useState } from "react";

export default function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName: name }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Try again?");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Try again?");
    }
  }

  return (
    <section id="cta" className="relative py-28 lg:py-40 bg-cta overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-50 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFB59E 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-[10%] w-96 h-96 rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9B8FF 0%, transparent 70%)" }}
      />

      <div className="container-page relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="chip mb-8 mx-auto">Ready when you are</div>
          <h2 className="font-display text-[56px] sm:text-[80px] lg:text-[110px] leading-[0.9] tracking-[-0.04em] font-[450]">
            Stop doing.
            <br />
            <span className="italic font-[350] text-gradient">Start delegating.</span>
          </h2>
          <p className="mt-8 text-[18px] lg:text-[19px] text-muted max-w-xl mx-auto leading-relaxed">
            Train your first Stackbird free. No credit card, no sales call. Show one
            workflow, see what flies back.
          </p>

          <div className="mt-12 max-w-xl mx-auto">
            {status === "done" ? (
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white hairline shadow-softLg">
                <span className="w-7 h-7 rounded-full bg-mint grid place-items-center shrink-0">
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                    <path
                      d="M3 8 L7 12 L13 5"
                      stroke="#1B1530"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="text-left">
                  <div className="text-[14px] font-semibold">You're on the list.</div>
                  <div className="text-[12px] text-muted">
                    Check your inbox to confirm — we'll email when your nest is ready.
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-3 p-3 bg-white rounded-3xl shadow-softXl hairline"
              >
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name"
                    className="flex-1 px-5 py-3 rounded-2xl bg-cream/60 text-[15px] placeholder:text-muted/60 focus:outline-none focus:bg-cream"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-[1.4] px-5 py-3 rounded-2xl bg-cream/60 text-[15px] placeholder:text-muted/60 focus:outline-none focus:bg-cream"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-3 rounded-2xl bg-ink text-cream font-medium text-[14.5px] hover:bg-ink/90 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {status === "loading" ? (
                      "Joining…"
                    ) : (
                      <>
                        Join the waitlist
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M6 3l5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-[13px] text-coral text-left px-2 -mt-1">{error}</p>
                )}
              </form>
            )}
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-[12px] font-mono uppercase tracking-[0.12em] text-muted">
            <span>Free to try</span>
            <span className="w-1 h-1 rounded-full bg-muted/40" />
            <span>No credit card</span>
            <span className="w-1 h-1 rounded-full bg-muted/40" />
            <span>~5 min to first agent</span>
          </div>
        </div>
      </div>
    </section>
  );
}
