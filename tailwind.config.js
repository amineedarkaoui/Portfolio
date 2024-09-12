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
        'underline': 'expand 200ms ease-in-out forwards',
        'header-in': 'hop-in 200ms ease-in forwards',
        'name-in': 'hop-in 200ms ease-in 150ms forwards',
        'title-in': 'hop-in 200ms ease-in 300ms forwards',
        'text-in': 'hop-in 200ms ease-in 450ms forwards',
        'icons-in': 'hop-on 200ms ease-in forwards',
        'gradient-in': 'appear 1000ms ease-out 600ms forwards',
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
          '0%': { top: '-25vh', left: '-30vw' },
          '25%': { top: '-20vh', left: '50vw' },
          '50%': { top: '-15vh', left: '10vw' },
          '75%': { top: '-25vh', left: '65vw' },
          '100%': { top: '-25vh', left: '-30vw' },
        },
        'move2': {
          '0%': { top: '-20vh', left: '50vw' },
          '25%': { top: '-15vh', left: '10vw' },
          '50%': { top: '-25vh', left: '65vw' },
          '75%': { top: '-25vh', left: '-30vw' },
          '100%': { top: '-20vh', left: '50vw' },
        },
        'move3': {
          '0%': { top: '-15vh', left: '10vw' },
          '25%': { top: '-25vh', left: '65vw' },
          '50%': { top: '-25vh', left: '-30vw' },
          '75%': { top: '-20vh', left: '50vw' },
          '100%': { top: '-15vh', left: '10vw' },
        },
        'move4': {
          '0%': { top: '-25vh', left: '65vw' },
          '25%': { top: '-25vh', left: '-30vw' },
          '50%': { top: '-20vh', left: '50vw' },
          '75%': { top: '-15vh', left: '10vw' },
          '100%': { top: '-25vh', left: '65vw' },
        },
        'expand': {
          '0%': {transform : 'translateX(-50%) scaleX(0%)'},
          '100%': {transform : 'translateX(-50%) scaleX(100%)'},
        },
        'hop-in': {
          '0%': {transform : 'translateY(-10%)', opacity: 0},
          '100%': {transform : 'translateY(0%)', opacity: 1},
        },
        'hop-on': {
          '0%': {transform : 'translateY(10%)', opacity: 0},
          '100%': {transform : 'translateY(0%)', opacity: 1},
        },
        'appear': {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}

