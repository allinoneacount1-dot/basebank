import { Github, Rocket, Terminal, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    icon: Github,
    title: "Connect GitHub → Deploy BaseVault",
    desc: "Sign in with GitHub, then deploy your personal non-custodial vault contract on Base in under 30 seconds.",
  },
  {
    n: "02",
    icon: Rocket,
    title: "Add a Repository",
    desc: "Install the Basebank App on the repos you own or maintain. Set commands, roles, and bounty rules per repo.",
  },
  {
    n: "03",
    icon: Terminal,
    title: "Use Commands in GitHub Issues",
    desc: "Type /pay, /bounty, /swap, /split, /tip directly in issue or PR comments. Basebank handles the rest.",
  },
  {
    n: "04",
    icon: CheckCircle2,
    title: "Automatic Settlement on Base",
    desc: "Bot escrows funds, verifies the recipient, settles on-chain, and posts the tx hash back to the thread.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/5 px-3 py-1 text-xs text-neon-purple font-mono">
              ⚡ How it works
            </span>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              From GitHub issue to <br className="hidden sm:block" />
              <span className="gradient-text">on-chain settlement</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <Step {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({ n, icon: Icon, title, desc }: { n: string; icon: typeof Github; title: string; desc: string }) {
  return (
    <div className="group relative h-full rounded-2xl glass-strong border-gradient p-7 hover-lift">
      <div className="flex items-start justify-between">
        <div className="font-mono text-6xl font-bold leading-none text-white/[0.06] group-hover:text-cyan/30 transition">
          {n}
        </div>
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10"
          style={{ boxShadow: "0 0 24px rgba(0,240,255,0.3)" }}
        >
          <Icon className="h-5 w-5 text-cyan" />
        </div>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/60">{desc}</p>
    </div>
  );
}
