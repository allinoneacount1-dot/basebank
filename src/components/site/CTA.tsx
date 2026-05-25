import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] glass-strong border-gradient p-10 sm:p-16 text-center">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full opacity-40 blur-3xl"
              style={{ background: "conic-gradient(from 0deg, #00F0FF, #C026D3, #FF00AA, #00F0FF)" }} />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/5 px-3 py-1 text-xs text-cyan font-mono">
                ⚡ Ready in 30 seconds
              </span>
              <h2 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Ready to bank on Base <br className="hidden sm:block" />
                <span className="gradient-text">with confidence?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-white/60">
                Deploy your BaseVault. Connect a repo. Replace every wallet popup with one signed comment.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#"
                  className="group inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-black glow-cyan-lg transition hover:scale-[1.03]"
                  style={{ backgroundColor: "#00F0FF" }}>
                  Launch Basebank Now <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a href="#"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur hover:bg-white/10">
                  Read the docs
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
