/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bella: {
          white: '#ffffff',
          cloud: '#f5f7f6',
          mist: '#e5e7eb',
          steel: '#4b5563',
          ink: '#111111',
          yellow: '#f7c948',
          purple: '#5c2f90',
          violet: '#4a2572',
          emerald: '#25d366',
          wa: '#25d366',
          'wa-dark': '#1ebe5d',
          'wa-soft': '#e9f9ef',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 14px 32px -24px rgba(0, 0, 0, 0.35)',
        card: '0 18px 40px -30px rgba(17, 17, 17, 0.32)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 20% 18%, rgba(37, 211, 102, 0.1), transparent 42%), radial-gradient(circle at 85% 20%, rgba(17, 17, 17, 0.06), transparent 46%)',
      },
    },
  },
  plugins: [],
}
