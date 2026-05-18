import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative bg-cream border-t border-line py-16">
      <div className="container-page">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <Logo className="w-8 h-8" />
              <span className="font-semibold text-[17px] tracking-tight">Stackbirds</span>
            </div>
            <p className="text-[14.5px] text-muted leading-relaxed max-w-sm">
              The world's first self-trained agent. Built for humans with better things to do than copy-paste between tabs.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink mb-4">Product</h4>
            <ul className="space-y-2.5 text-[13.5px] text-muted">
              <li><a href="#features" className="hover:text-ink transition-colors">Features</a></li>
              <li><a href="#how" className="hover:text-ink transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Docs</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink mb-4">Company</h4>
            <ul className="space-y-2.5 text-[13.5px] text-muted">
              <li><a href="#" className="hover:text-ink transition-colors">Careers</a></li>
              <li><a href="mailto:hello@stackbirds.xyz" className="hover:text-ink transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-ink transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink mb-4">Stay in the loop</h4>
            <p className="text-[13.5px] text-muted mb-4 leading-relaxed">
              Product updates and essays from the team. No spam.
            </p>
            <div className="flex gap-2">
              {["Twitter", "LinkedIn", "GitHub"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full bg-white hairline grid place-items-center text-muted hover:text-ink hover:shadow-soft transition-all text-[11px] font-semibold">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4 text-[12px] text-muted">
          <p>© {new Date().getFullYear()} Stackbirds, Inc. · Made in San Francisco</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink transition-colors">Privacy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms</a>
            <a href="#" className="hover:text-ink transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
