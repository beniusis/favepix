/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'drop-down-fade-in': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      },
      animation: {
        enter: 'drop-down-fade-in 300ms linear'
      },
      colors: {
        text: '#10100f',
        background: '#ebece9',
        primary: '#464738',
        secondary: '#b7baa0',
        accent: '#8c9060'
      }
    }
  },
  plugins: []
};
