/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#090909',
          deep: '#040404',
          subtle: '#111111',
          surface: '#151515',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(198, 255, 77, 0.3)',
        },
        'warm-white': '#F4F2EC',
        'acid-lime': {
          DEFAULT: '#C6FF4D',
          hover: '#b5ef3b',
          dim: 'rgba(198, 255, 77, 0.15)',
          glow: 'rgba(198, 255, 77, 0.3)',
        },
        metadata: {
          light: '#a1a1aa',
          dim: '#71717a',
          dark: '#52525b',
        },
        accent: {
          varsha: '#38BDF8',
          sentinel: '#34D399',
          homegen: '#F59E0B',
          helper: '#A78BFA',
          fire: '#FB7185',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Syne', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.18em',
        ultra: '0.28em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
