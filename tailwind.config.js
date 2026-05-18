/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F3",
        ink: "#1B1530",
        muted: "#6B6480",
        line: "#ECE3DA",
        coral: "#FF6B5B",
        peach: "#FFB59E",
        sunshine: "#FFD36E",
        lavender: "#C9B8FF",
        violet: "#8B6BFF",
        mint: "#A7E8C8",
        sky: "#B4DBFF",
        rose: "#FFD5E5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(27, 21, 48, 0.04), 0 8px 24px rgba(27, 21, 48, 0.06)",
        softLg: "0 2px 4px rgba(27, 21, 48, 0.04), 0 24px 48px rgba(27, 21, 48, 0.10)",
        softXl: "0 4px 8px rgba(27, 21, 48, 0.05), 0 40px 80px rgba(27, 21, 48, 0.14)",
        glow: "0 20px 60px rgba(255, 107, 91, 0.25)",
        ring: "0 0 0 1px rgba(27, 21, 48, 0.06), 0 12px 32px rgba(27, 21, 48, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        pulseDot: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.55, transform: "scale(1.2)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        shimmer: "shimmer 4s linear infinite",
        "pulse-dot": "pulseDot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
