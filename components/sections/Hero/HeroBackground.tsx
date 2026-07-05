/** Premium ambient glow background for Hero — light glassmorphism */
export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 section-hero-bg" />

      {/* Ambient glow blob — blue */}
      <div className="hero-glow-1 absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none" />

      {/* Ambient glow blob — emerald */}
      <div className="hero-glow-2 absolute -bottom-32 -right-20 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Diagonal light stripe */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20"
        style={{ background: "linear-gradient(135deg, transparent 40%, rgba(14,165,233,0.06) 100%)" }}
      />
    </div>
  );
}
