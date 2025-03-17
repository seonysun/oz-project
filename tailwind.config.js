/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        gray: {
          default: '#9c9c9c',
          light: '#F9F9F9',
          medium: '#EAEAEA',
          dark: '#2C2C2C',
        },
      },
      animation: {
        spark: 'spark 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fade: 'fade 1.5s ease-in-out infinite',
      },
    },
    keyframes: {
      spark: {
        '0%, 100%': { opacity: '0.5' },
        '50%': { opacity: '1' },
      },
      fade: {
        '0%, 100%': { opacity: '0.3' },
        '50%': { opacity: '1' },
      },
    },
  },
  plugins: [],
};
