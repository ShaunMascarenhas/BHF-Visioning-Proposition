/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#050a1a',
        'navy': '#0a1628',
        'navy-light': '#111d35',
        'bh-teal': '#00B0B9',
        'bh-green': '#97D700',
        'bh-violet': '#753BBD',
        'bh-sky': '#00AEEF',
        'bh-gold': '#FFC304',
        'bh-dark-teal': '#00465A',
        'bh-fuchsia': '#FA2F97',
        'bh-orange': '#FF8500',
        'bh-body': '#4d4d4f',
        'bh-dark-gray': '#828282',
        'glass': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'heading': ['"Roboto"', 'sans-serif'],
        'heading-slab': ['"Roboto Slab"', 'sans-serif'],
        'body': ['"Roboto"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-teal': 'radial-gradient(ellipse at center, rgba(0, 176, 185, 0.15), transparent 70%)',
        'glow-green': 'radial-gradient(ellipse at center, rgba(151, 215, 0, 0.12), transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 176, 185, 0.3)',
        'glow-md': '0 0 30px rgba(0, 176, 185, 0.3)',
        'glow-violet': '0 0 30px rgba(117, 59, 189, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
