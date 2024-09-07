/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#695EEA',
        'bg-light': 'white',
        'bg-dark' : '#0F0F0F',
      },
      gridTemplateColumns: {
        'project': '2fr 5fr',
      },
      boxShadow: {
        'project': 'inset 0px 1px 1px white, 0 2px 4px gray',
        'project-dark': 'inset 0px 1px 1px #a8a8a8, 2px 4px 6px black'
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

