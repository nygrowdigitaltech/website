export function AmbientGlow() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(22,163,74,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: "-100px",
          left: "-150px",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "200px",
          right: "-200px",
        }}
      />
    </div>
  );
}
