/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-kesa': '#F1F2F7',
        'warna-text': '#5A67BA',
        'text-sidebar': '#8D92B3'
      }
    },
  },
  plugins: [],
}

