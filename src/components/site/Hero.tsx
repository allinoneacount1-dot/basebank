import { Play, Shield, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" style={{ backgroundColor: "#00F0FF" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "#00F0FF" }} />
              </span>
              <span className="font-mono">v1.0 · live on Base mainnet</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[6rem]">
              The secure <span className="gradient-text">on-chain bank</span>
              <br />
              on Base
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              Personal vault on Base. Manage bounties, projects, and payments
              langsung dari GitHub issues. <span className="text-white/90">No wallet. No seed phrase. No approve.</span>
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.03] glow-cyan-lg"
                style={{ backgroundColor: "#00F0FF" }}
              >
                <Zap className="h-4 w-4" />
                Deploy Your BaseVault
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                <Play className="h-4 w-4" />
                Watch Demo
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50">
              <TrustItem>Built on Base</TrustItem>
              <Dot />
              <TrustItem>Secured by GitHub</TrustItem>
              <Dot />
              <TrustItem>Non-custodial</TrustItem>
              <Dot />
              <TrustItem>Soul-bound tokens</TrustItem>
            </div>
          </Reveal>
        </div>

        {/* Hero Visual */}
        <Reveal delay={400} className="mt-20">
          <HeroMockup />
        </Reveal>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="h-1 w-1 rounded-full bg-white/20" />;
}
function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Shield className="h-3 w-3 text-cyan" />
      {children}
    </span>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Massive glow under */}
      <div className="absolute inset-x-10 top-10 -z-10 h-[80%]" aria-hidden>
        <div className="absolute inset-0 rounded-[3rem] opacity-70 blur-3xl"
          style={{ background: "conic-gradient(from 90deg at 50% 50%, #00F0FF, #C026D3, #FF00AA, #00F0FF)" }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {/* GitHub Issue Mockup */}
        <div className="relative md:col-span-3 rounded-2xl glass-strong border-gradient p-5 hover-lift">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2 font-mono text-xs text-white/60">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-3">github.com/basebank/core · Issue #142</span>
            </div>
            <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400 border border-emerald-500/30">
              Open
            </span>
          </div>

          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
              <div className="flex-1">
                <div className="text-white">
                  <span className="font-semibold">alex.eth</span>
                  <span className="ml-2 text-white/40 font-mono text-xs">commented · 2m ago</span>
                </div>
                <p className="mt-1 text-white/80">Need help fixing the swap router edge case 🚀</p>
                <code className="mt-2 inline-block rounded-md bg-black/40 px-2 py-1 font-mono text-xs text-cyan">
                  /bounty 250 USDC
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-cyan/20 bg-cyan/5 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan/20 glow-cyan" style={{ boxShadow: "0 0 20px rgba(0,240,255,0.4)" }}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#00F0FF" strokeWidth="2.5">
                  <rect x="4" y="6" width="16" height="14" rx="2" />
                  <path d="M4 10h16" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-white">
                  <span className="font-semibold">basebank-bot</span>
                  <span className="ml-2 rounded bg-cyan/20 px-1.5 py-0.5 font-mono text-[10px] text-cyan">BOT</span>
                </div>
                <p className="mt-1 font-mono text-xs text-white/80">
                  ✓ Escrowed <span className="text-cyan">250 USDC</span> from vault · tx{" "}
                  <span className="text-neon-purple">0xa1f3…d2c8</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="flex-1">
                <div className="text-white">
                  <span className="font-semibold">maintainer</span>
                </div>
                <code className="mt-2 inline-block rounded-md bg-black/40 px-2 py-1 font-mono text-xs text-neon-pink">
                  /pay @alex.eth
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Vault Balance Card */}
        <div className="relative md:col-span-2 rounded-2xl glass-strong border-gradient p-5 hover-lift">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-white/40 font-mono">BaseVault</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Active
            </span>
          </div>
          <div className="mt-4">
            <div className="font-mono text-[11px] text-white/40">0x7f3a…b2e1</div>
            <div className="mt-2 text-4xl font-bold gradient-text-cyan text-glow-cyan">
              $48,205.12
            </div>
            <div className="mt-1 text-xs text-emerald-400">+ $1,204.30 (24h)</div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              { sym: "ETH", val: "12.4" },
              { sym: "USDC", val: "18.2k" },
              { sym: "DEGEN", val: "284k" },
            ].map((t) => (
              <div key={t.sym} className="rounded-lg border border-white/8 bg-white/5 p-2 text-center">
                <div className="font-mono text-[10px] text-white/40">{t.sym}</div>
                <div className="font-semibold text-white text-sm">{t.val}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2 border-t border-white/5 pt-4">
            {[
              { c: "/pay", d: "→ alex.eth", v: "+250 USDC", col: "text-emerald-400" },
              { c: "/swap", d: "ETH → USDC", v: "1.0 ETH", col: "text-cyan" },
              { c: "/bounty", d: "issue #98", v: "−100 USDC", col: "text-neon-pink" },
            ].map((r, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <code className="font-mono text-white/80">{r.c}</code>
                  <span className="text-white/50">{r.d}</span>
                </div>
                <span className={`font-mono ${r.col}`}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
