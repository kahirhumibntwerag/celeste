/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'move-out-and-back': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'spin-and-back': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bounce-custom': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
        'scale-up-down': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        'up-down': {
          '0%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        'move-out': 'move-out-and-back 0.5s ease-in-out',
        'spin-around': 'spin-and-back 0.8s ease-in-out',
        'bounce-y': 'bounce-custom 0.6s ease-in-out',
        'scale': 'scale-up-down 0.6s ease-in-out',
        'up-down': 'up-down 1s ease-out forwards',
      },
    },
  },
  plugins: [],
} 