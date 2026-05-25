import { Github, MessageCircle, Send } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-white/55">
              The secure on-chain bank on Base. Manage bounties, projects, and payments
              directly from GitHub.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { I: Github, label: "GitHub" },
                { I: XIcon, label: "X" },
                { I: MessageCircle, label: "Discord" },
                { I: Send, label: "Telegram" },
              ].map(({ I, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition hover:text-cyan hover:border-cyan/40 hover:bg-cyan/5">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <Column title="Product" links={["BaseVault", "Bounties", "Swaps", "Tokens"]} />
          <Column title="Resources" links={["Docs", "GitHub", "Blog", "Brand"]} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 md:flex-row">
          <p className="font-mono text-xs text-white/40">© 2026 Basebank — built on Base, secured by GitHub.</p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Column({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-white/55 hover:text-white">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.93l-4.51-6.03L5.4 22H2.64l6.97-7.96L2 2h7.09l4.07 5.5L18.244 2Zm-2.43 18h1.6L7.27 4H5.55l10.264 16Z" />
    </svg>
  );
}
