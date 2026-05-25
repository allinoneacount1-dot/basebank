import { Reveal } from "./Reveal";

export function TerminalDemo() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 text-xs text-cyan font-mono">
                $ live commands
              </span>
              <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                Type a command. <br />
                <span className="gradient-text-cyan">Basebank executes on Base.</span>
              </h2>
              <p className="mt-5 max-w-md text-white/60">
                Every command in a GitHub issue is parsed by our verifier, signed by your
                vault key, and broadcast on Base. No wallet popups. No approve. No risk.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2 max-w-md">
                {["/pay", "/bounty", "/swap", "/split", "/tip", "/vault", "/claim", "/help"].map((c) => (
                  <code key={c} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-cyan">
                    {c}
                  </code>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <Terminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Terminal() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #00F0FF40, transparent 70%)" }} />
      <div className="overflow-hidden rounded-2xl glass-strong border-gradient">
        <div className="flex items-center justify-between border-b border-white/5 bg-black/30 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <span className="font-mono text-[10px] text-white/40">issue-142.bash · basebank-cli</span>
          <span className="font-mono text-[10px] text-cyan">● connected</span>
        </div>
        <div className="bg-black/40 p-5 font-mono text-[13px] leading-relaxed">
          <Line user="alex.eth">/bounty 250 USDC</Line>
          <Line bot>
            ✓ Bounty escrowed from <span className="text-cyan">vault://0x7f3a…b2e1</span>
            <br />
            ↳ tx <span className="text-neon-purple">0xa1f3…d2c8</span> · gas: 12,043
          </Line>
          <Line user="maintainer">/pay @alex.eth --label fixed</Line>
          <Line bot>
            <span className="text-emerald-400">→</span> Sending <span className="text-cyan">250 USDC</span> to @alex.eth
            <br />
            ✓ Settled · <span className="text-neon-pink">+5 BaseTokens</span> minted (soul-bound)
          </Line>
          <Line user="alex.eth">/swap 100 USDC → DEGEN</Line>
          <Line bot>
            ✓ Routed via BaseSwap · slippage 0.08%
            <br />
            ↳ received <span className="text-cyan">2,418.45 DEGEN</span>
          </Line>
          <div className="mt-2 flex items-center gap-2 text-white/60">
            <span className="text-cyan">›</span>
            <span className="text-white">_</span>
            <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-cyan" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Line({ user, bot, children }: { user?: string; bot?: boolean; children: React.ReactNode }) {
  if (bot) {
    return (
      <div className="mt-1 mb-3 rounded-md border-l-2 border-cyan/60 bg-cyan/5 px-3 py-2 text-white/85">
        <div className="text-[10px] uppercase tracking-wider text-cyan/80 mb-1">basebank-bot</div>
        {children}
      </div>
    );
  }
  return (
    <div className="mb-1">
      <span className="text-white/40">{user}</span>
      <span className="text-white/30"> $ </span>
      <span className="text-white">{children}</span>
    </div>
  );
}
