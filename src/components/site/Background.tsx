export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base black */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60" />

      {/* Glow orbs */}
      <div
        className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full opacity-40 animate-pulse-glow"
        style={{ background: "radial-gradient(circle, #00F0FF 0%, transparent 60%)" }}
      />
      <div
        className="absolute top-[40%] -right-40 h-[600px] w-[600px] rounded-full opacity-30 animate-pulse-glow"
        style={{ background: "radial-gradient(circle, #C026D3 0%, transparent 60%)", animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full opacity-25 animate-pulse-glow"
        style={{ background: "radial-gradient(circle, #FF00AA 0%, transparent 60%)", animationDelay: "3s" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
    </div>
  );
}
