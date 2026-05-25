import { ArrowDownLeft, ArrowUpRight, Repeat } from "lucide-react";
import { Reveal } from "./Reveal";

export function Dashboard() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 font-mono">
              ◆ Dashboard
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your <span className="gradient-text">command center</span>
            </h2>
            <p className="mt-5 text-white/60">Vaults, repos, transactions and swaps — one clean surface.</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-16">
            <div className="absolute -inset-10 -z-10 rounded-[3rem] opacity-40 blur-3xl"
              style={{ background: "conic-gradient(from 0deg, #00F0FF, #C026D3, #FF00AA, #00F0FF)" }} />
            <div className="overflow-hidden rounded-3xl glass-strong border-gradient">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/5 bg-black/30 px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan glow-cyan" />
                  <span className="font-mono text-xs text-white/60">basebank.io/vault/0x7f3a…b2e1</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] text-white/60">⌘K</span>
                </div>
              </div>

              <div className="grid gap-4 p-5 lg:grid-cols-12">
                {/* Sidebar */}
                <div className="lg:col-span-2 space-y-1">
                  {["Overview", "Vaults", "Repos", "Bounties", "Swaps", "Tokens", "Settings"].map((n, i) => (
                    <div key={n}
                      className={`rounded-lg px-3 py-2 text-sm ${i===0 ? "bg-cyan/10 text-cyan border border-cyan/30" : "text-white/60 hover:bg-white/5"}`}>
                      {n}
                    </div>
                  ))}
                </div>

                {/* Main */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan/10 via-transparent to-neon-purple/10 p-5">
                    <div className="text-xs uppercase tracking-wider text-white/40 font-mono">Total Balance</div>
                    <div className="mt-1 text-4xl font-bold gradient-text-cyan text-glow-cyan">$248,930.42</div>
                    <div className="mt-1 text-xs text-emerald-400">+$8,204.13 (24h) · +3.41%</div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {[
                        { l: "Deposit", c: "#00F0FF", I: ArrowDownLeft },
                        { l: "Send", c: "#C026D3", I: ArrowUpRight },
                        { l: "Swap", c: "#FF00AA", I: Repeat },
                      ].map(({ l, c, I }) => (
                        <button key={l}
                          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                          style={{ boxShadow: `inset 0 0 0 1px ${c}22` }}>
                          <I className="h-4 w-4" style={{ color: c }} />
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white">Recent transactions</h4>
                      <span className="text-xs text-white/40">last 24h</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { t: "Bounty paid", to: "alex.eth", val: "−250 USDC", tag: "/pay", col: "text-neon-pink" },
                        { t: "Swap executed", to: "ETH → USDC", val: "1.0 ETH", tag: "/swap", col: "text-cyan" },
                        { t: "Bounty escrowed", to: "issue #142", val: "−250 USDC", tag: "/bounty", col: "text-neon-purple" },
                        { t: "Deposit received", to: "0x4f…91", val: "+5,000 USDC", tag: "tx", col: "text-emerald-400" },
                      ].map((r, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 text-sm">
                          <div className="flex items-center gap-3">
                            <code className={`rounded bg-black/40 px-1.5 py-0.5 font-mono text-[10px] ${r.col}`}>{r.tag}</code>
                            <div>
                              <div className="text-white">{r.t}</div>
                              <div className="text-xs text-white/40">{r.to}</div>
                            </div>
                          </div>
                          <div className={`font-mono text-sm ${r.col}`}>{r.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="rounded-2xl border border-white/10 p-4">
                    <div className="text-xs uppercase tracking-wider text-white/40 font-mono">Connected Repos</div>
                    <div className="mt-3 space-y-2">
                      {["basebank/core", "basebank/contracts", "alex/web3-tools"].map((r) => (
                        <div key={r} className="flex items-center justify-between text-sm">
                          <span className="font-mono text-white/80">{r}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 p-4">
                    <div className="text-xs uppercase tracking-wider text-white/40 font-mono">BaseTokens</div>
                    <div className="mt-3 flex items-end gap-1.5">
                      <div className="text-2xl font-bold text-white">1,284</div>
                      <div className="mb-1 text-[10px] text-neon-pink">soul-bound</div>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-3/4 rounded-full" style={{ background: "linear-gradient(90deg, #00F0FF, #C026D3)" }} />
                    </div>
                    <div className="mt-2 text-[11px] text-white/40">Tier · Builder III</div>
                  </div>
                  <div className="rounded-2xl border border-cyan/30 bg-cyan/5 p-4">
                    <div className="text-xs text-cyan">⚡ Earn 2× tokens this week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
