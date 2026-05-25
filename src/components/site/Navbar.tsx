import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Product", href: "#product" },
  { label: "How it Works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-white/70 transition hover:text-white hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <Github className="h-4 w-4" />
              Connect GitHub
            </a>
            <a
              href="#"
              className="relative inline-flex items-center gap-2 rounded-lg bg-cyan px-4 py-2 text-sm font-semibold text-black glow-cyan transition hover:scale-[1.02]"
              style={{ backgroundColor: "#00F0FF" }}
            >
              Launch App
              <span aria-hidden>→</span>
            </a>
          </div>
          <button
            className="rounded-lg border border-white/10 p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass-strong p-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-4 py-3 text-sm font-semibold text-black glow-cyan"
                style={{ backgroundColor: "#00F0FF" }}
              >
                Launch App
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
