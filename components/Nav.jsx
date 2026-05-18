import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/75 border-b border-line/60">
      <div className="container-page flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2.5">
          <Logo className="w-8 h-8" />
          <span className="font-semibold text-[17px] tracking-tight">Stackbirds</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[14px] text-muted">
          <a href="#features" className="hover:text-ink transition-colors">Features</a>
          <a href="#how" className="hover:text-ink transition-colors">How it works</a>
          <a href="#testimonials" className="hover:text-ink transition-colors">Customers</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#cta" className="hidden sm:inline text-[14px] text-muted hover:text-ink transition-colors">
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-cream text-[13px] font-medium shadow-soft hover:shadow-softLg hover:-translate-y-0.5 transition-all"
          >
            Get started
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
