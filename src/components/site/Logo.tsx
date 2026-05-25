export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-cyan/40 bg-gradient-to-br from-cyan/20 to-transparent glow-cyan">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#00F0FF" strokeWidth="2">
          <rect x="4" y="6" width="16" height="14" rx="2" />
          <path d="M4 10h16" />
          <circle cx="12" cy="15" r="2" />
          <path d="M8 6V4h8v2" />
        </svg>
      </div>
      <span className="text-lg font-bold tracking-tight text-white">
        Base<span className="text-cyan">bank</span>
      </span>
      <span className="ml-1 hidden rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/60 sm:inline-block">
        on BASE
      </span>
    </div>
  );
}
