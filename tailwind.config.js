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
        'project-dark': 'inset 0px 2px 4px #787878, 2px 4px 6px black'
      },
      animation: {
        'fade-out': 'fade-away 200ms ease-in forwards',
        'fade-in': 'fade-away 200ms ease-in reverse forwards',
        'spin': 'spin 20s linear infinite',
        'alternate': 'up-down 1s linear infinite alternate',
        'color1': 'move1 50s linear infinite',
        'color2': 'move2 50s linear infinite',
        'color3': 'move3 50s linear infinite',
        'color4': 'move4 50s linear infinite',
        'underline': 'expand 200ms ease-in-out forwards'
      },
      keyframes: {
        'fade-away': {
          '0%': {opacity: '1'},
          '100%': {opacity: '0', transform: 'translateY(20%)'},
        },
        'spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        'up-down': {
          from: { transform: 'translateY(0%)' },
          to: { transform: 'translateY(-50%)' }
        },
        'move1': {
          '0%': {top: '-100px', left: '50vw'},
          '25%': {top: '-200px', left: '-10vw'},
          '50%': {top: '-200px', left: '50vw'},
          '75%': {top: '-200px', left: '-200px'},
          '100%': {top: '-100px', left: '50vw'},
        },
        'move2': {
          '0%': {top: '-100px', left: 0},
          '25%': {top: '-200px', left: '70vw'},
          '50%': {top: '-200px', left: '-200px'},
          '75%': {top: '-200px', left: '70vw'},
          '100%': {top: '-100px', left: '70vw'},
        },
        'move3': {
          '0%': {top: '-100px', left: '30vw'},
          '25%': {top: '-200px', left: '70vw'},
          '50%': {top: '-200px', left: '-200px'},
          '75%': {top: '-200px', left: '0vw'},
          '100%': {top: '-100px', left: '30vw'},
        },
        'move4': {
          '0%': {top: '-100px', left: 0},
          '25%': {top: '-200px', left: '5vw'},
          '50%': {top: '-200px', left: '-200px'},
          '75%': {top: '-200px', left: '70vw'},
          '100%': {top: '-100px', left: '5px'},
        },
        'expand': {
          '0%': {transform : 'translateX(-50%) scaleX(0%)'},
          '100%': {transform : 'translateX(-50%) scaleX(100%)'},
        },
      },
      // backgroundImage: {
      //   'gradient': "url('media/gradient.jpeg')"
      // }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

