import { AlertTriangle, Check, X } from "lucide-react";
import { Reveal } from "./Reveal";

const risks = [
  "Sign blind approvals you don't understand",
  "Lose everything to one malicious dApp",
  "Manage 12-word seed phrases manually",
  "Pay gas for every single approval",
];

const safe = [
  "GitHub-native auth — no seed phrase ever",
  "Scoped permissions per repo, per command",
  "Soul-bound BaseTokens locked to your identity",
  "Gasless commands inside your vault",
];

export function Problem() {
  return (
    <section id="product" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-pink/30 bg-neon-pink/5 px-3 py-1 text-xs text-neon-pink font-mono">
              <AlertTriangle className="h-3 w-3" /> The problem
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Stop risking everything with{" "}
              <span className="text-neon-pink" style={{ textShadow: "0 0 30px rgba(255,0,170,0.5)" }}>
                wallet approvals.
              </span>
            </h2>
            <p className="mt-5 text-white/60">
              Every "approve" is a loaded gun pointing at your portfolio. Basebank
              flips the model: your funds live inside a non-custodial vault that
              only obeys signed GitHub commands — never blind contract approvals.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <Card title="Wallet-first world" tone="danger" items={risks} Icon={X} />
          </Reveal>
          <Reveal delay={200}>
            <Card title="Basebank world" tone="cyan" items={safe} Icon={Check} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Card({
  title, tone, items, Icon,
}: {
  title: string;
  tone: "danger" | "cyan";
  items: string[];
  Icon: typeof Check;
}) {
  const accent = tone === "cyan" ? "#00F0FF" : "#FF00AA";
  return (
    <div className="relative h-full rounded-2xl glass-strong border-gradient p-7 hover-lift">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span
          className="rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider"
          style={{ borderColor: `${accent}55`, color: accent }}
        >
          {tone === "cyan" ? "Secure" : "Risky"}
        </span>
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-3 text-sm text-white/80">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
              style={{
                background: `${accent}1f`,
                boxShadow: `0 0 16px ${accent}66`,
                color: accent,
              }}
            >
              <Icon className="h-3 w-3" />
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
