import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

function useCountUp(target: number, duration = 2000) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setV(Math.floor(target * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { v, ref };
}

function StatBlock({ label, target, prefix = "", suffix = "" }: { label: string; target: number; prefix?: string; suffix?: string }) {
  const { v, ref } = useCountUp(target);
  const display = v.toLocaleString();
  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-3xl font-bold tracking-tight text-white sm:text-5xl text-glow-cyan">
        {prefix}{display}{suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-wider text-white/50">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 rounded-3xl glass-strong border-gradient p-8 sm:p-12 md:grid-cols-4">
            <StatBlock label="Vaults Deployed" target={12480} />
            <StatBlock label="Total Value Locked" target={84} prefix="$" suffix="M+" />
            <StatBlock label="Transactions" target={342000} />
            <StatBlock label="Active Users" target={28400} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
