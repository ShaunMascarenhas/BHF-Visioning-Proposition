/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#00171F',
        'navy': '#002630',
        'navy-light': '#003340',
        'bhf-teal': '#00B0B9',
        'bhf-dark-teal': '#00465A',
        'bhf-green': '#97D700',
        'bhf-violet': '#753BBD',
        'bhf-fuchsia': '#FA2F97',
        'bhf-gold': '#FFC304',
        'bhf-sky': '#00AEEF',
        'bhf-orange': '#FF8500',
        'bhf-body': '#4D4D4F',
        'glass': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'heading': ['"Roboto"', 'Arial', 'sans-serif'],
        'body': ['"Roboto Slab"', 'Arial', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-teal': 'radial-gradient(ellipse at center, rgba(0, 176, 185, 0.15), transparent 70%)',
        'glow-dark-teal': 'radial-gradient(ellipse at center, rgba(0, 70, 90, 0.15), transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 176, 185, 0.3)',
        'glow-md': '0 0 30px rgba(0, 176, 185, 0.3)',
        'glow-dark-teal': '0 0 30px rgba(0, 70, 90, 0.3)',
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
