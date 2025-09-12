/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#D90429', // Swiss Red
        'swiss-red': '#D90429',
        neutral: {
          100: '#F5F5F5',
          200: '#E0E0E0',
          800: '#333333',
          900: '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        display: ['DM Serif Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'button': '0 10px 25px rgba(217, 4, 41, 0.35)',
        'header': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      fontSize: {
        'hero': ['2.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      spacing: {
        'section': '5rem',
        'header': '5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
} 