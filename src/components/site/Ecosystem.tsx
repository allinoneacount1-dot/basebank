import { Reveal } from "./Reveal";

const partners = [
  "BASE", "GITHUB", "COINBASE", "UNISWAP", "AERODROME", "DEGEN",
  "OPENAI", "FARCASTER", "OPTIMISM", "1INCH", "CHAINLINK", "PYTH",
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-pink/30 bg-neon-pink/5 px-3 py-1 text-xs text-neon-pink font-mono">
              ◆ Ecosystem
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Powered by the best of <span className="gradient-text">Base & beyond</span>
            </h2>
            <p className="mt-5 text-white/60">
              Integrated with the protocols, networks and AI agents you already trust.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mt-14 overflow-hidden rounded-2xl glass">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />
            <div className="flex animate-marquee py-6 [width:max-content]">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="flex items-center gap-3 px-8">
                  <div className="h-7 w-7 rounded-md border border-white/10 bg-gradient-to-br from-white/10 to-transparent" />
                  <span className="font-mono text-sm tracking-widest text-white/50">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { t: "Base L2", d: "Native vault contracts deployed on Base — gas optimized, MEV protected." },
            { t: "GitHub App", d: "Verified GitHub identity becomes your on-chain signer. No extra accounts." },
            { t: "AI Agents", d: "LLM agents parse natural-language commands and route them safely on-chain." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="h-full rounded-2xl glass-strong p-6 hover-lift">
                <div className="font-mono text-xs text-cyan">// {String(i+1).padStart(2,"0")}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{c.t}</h3>
                <p className="mt-2 text-sm text-white/60">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
