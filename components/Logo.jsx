export default function Logo({ className = "w-8 h-8" }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #FF6B5B 0%, #FFB59E 50%, #FFD36E 100%)",
          boxShadow: "0 6px 16px rgba(255, 107, 91, 0.28)",
        }}
      />
      <span className="relative grid place-items-center h-full w-full text-white font-semibold text-[15px]">
        S
      </span>
    </span>
  );
}
