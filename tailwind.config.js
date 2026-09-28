/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f2744',
          navyHover: '#16365c',
          soft: '#254b77',
        },
        surface: {
          cream: '#f0ebe3',
          card: '#f8f5ef',
          muted: '#e6e0d6',
        },
        ink: {
          DEFAULT: '#132a3e',
          soft: '#4a5c6d',
        },
        accent: {
          DEFAULT: '#b86a3a',
          soft: 'rgba(184, 106, 58, 0.12)',
          subtle: '#deb193',
        },
        taste: {
          navy: '#0f2744',
          ink: '#132a3e',
          paper: '#f0ebe3',
          muted: '#e6e0d6',
          mist: '#dce4df',
          coral: '#b86a3a',
          rule: 'rgba(19, 42, 62, 0.16)',
          footer: '#09182a',
        },
      },
      fontFamily: {
        display: ['cabinet', 'Cabinet Grotesk', 'system-ui', 'sans-serif'],
        sans: ['lexend', 'Lexend', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        box: '0.375rem',
      },
      keyframes: {
        'hero-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'hero-watermark-reveal': {
          '0%': { opacity: '0', transform: 'translateY(0.6rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'hero-marquee': 'hero-marquee 72s linear infinite',
        'watermark-reveal': 'hero-watermark-reveal 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
