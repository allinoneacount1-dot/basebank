import { Vault, Github, Award, MessageSquareCode, ArrowLeftRight, Users2 } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Vault,
    title: "Personal Non-custodial BaseVault",
    desc: "Deploy a smart vault you own. Funds never leave your control — Basebank can only execute commands you sign via GitHub.",
    color: "#00F0FF",
  },
  {
    icon: Github,
    title: "GitHub Native Bounties & Payments",
    desc: "Post a bounty, pay a contributor, or settle an invoice with a single comment. Your repo becomes a treasury.",
    color: "#C026D3",
  },
  {
    icon: Award,
    title: "Soul-bound BaseTokens",
    desc: "Reputation tokens locked to your identity. Untradeable, unforgeable proof of contribution — directly on Base.",
    color: "#FF00AA",
  },
  {
    icon: MessageSquareCode,
    title: "Automatic Settlement via Issue Comments",
    desc: "Type /pay, /bounty, /swap, /split, or /tip. Basebank parses, escrows, and settles on-chain — gas optimized.",
    color: "#00F0FF",
  },
  {
    icon: ArrowLeftRight,
    title: "In-Vault Token Swaps",
    desc: "Swap ETH, USDC, DEGEN and 200+ Base tokens without leaving your vault. Aggregated routing, MEV protected.",
    color: "#C026D3",
  },
  {
    icon: Users2,
    title: "Team Workspaces",
    desc: "Shared vaults with role-based commands. Treasurers, contributors, and reviewers — all governed by GitHub.",
    color: "#FF00AA",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-xs text-cyan font-mono">
              ◆ Features
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              A full <span className="gradient-text">on-chain bank</span> for developers
            </h2>
            <p className="mt-5 text-white/60">
              Built around the workflows you already live in — issues, PRs, and code reviews.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <FeatureCard {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon, title, desc, color,
}: { icon: typeof Vault; title: string; desc: string; color: string }) {
  return (
    <div
      className="group relative h-full rounded-2xl glass-strong p-6 hover-lift overflow-hidden"
      style={{ transitionProperty: "transform,box-shadow,border-color" }}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
        style={{ background: color }}
      />
      <div
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
        style={{
          background: `linear-gradient(135deg, ${color}33, transparent)`,
          border: `1px solid ${color}55`,
          boxShadow: `0 0 24px ${color}40`,
          color,
        }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
      <div className="mt-5 flex items-center gap-1 text-xs font-mono text-white/40 group-hover:text-white transition">
        Learn more <span className="transition group-hover:translate-x-1">→</span>
      </div>
    </div>
  );
}
