/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': { primary: '#a855f7', glow: 'rgba(168, 85, 247, 0.5)' },
        'cyber-blue': { primary: '#00fff7', glow: 'rgba(0, 255, 247, 0.5)' },
        'emerald-block': { primary: '#10b981', glow: 'rgba(16, 185, 129, 0.5)' },
        'gold-invest': { primary: '#fbbf24', glow: 'rgba(251, 191, 36, 0.5)' },
        'dark-pro': { primary: '#ffffff', glow: 'rgba(255, 255, 255, 0.2)' },
        'red-power': { primary: '#ef4444', glow: 'rgba(239, 68, 68, 0.5)' },
        'aqua-digital': { primary: '#22d3ee', glow: 'rgba(34, 211, 238, 0.5)' },
        'midnight-black': { primary: '#4b5563', glow: 'rgba(75, 85, 99, 0.3)' },
        'orange-energy': { primary: '#fb923c', glow: 'rgba(251, 146, 60, 0.5)' },
        'royal-crypto': { primary: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.5)' },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
