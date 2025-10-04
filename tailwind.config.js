/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'swiss-red': '#E10600',
        'ink': '#0A0A0A',
        'offwhite': '#F7F8FA',
        'gray-700': '#2A2E33',
        'gray-400': '#8B9197',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Clear hierarchy: H1 → H2 → H3 → Body → Small
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],      // 40px
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],        // 32px  
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],      // 24px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],      // 16px
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'button': '0 2px 4px rgba(217, 4, 41, 0.2)',
        'header': '0 1px 3px rgba(0, 0, 0, 0.1)',
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