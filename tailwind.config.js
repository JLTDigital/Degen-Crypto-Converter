/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        p1: '#ff3399',
        p2: '#000000',
        p3: '#ffffff'
      },
      fontFamily: {
        display: ['Tiny5', 'sans-serif']
      }
    }
  },
  plugins: []
}
