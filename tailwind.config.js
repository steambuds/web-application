/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': {
          50: '#e6f1ff',
          100: '#cfe3ff',
          200: '#a5c9ff',
          300: '#7aafff',
          400: '#5096ff',
          500: '#2d81ff',
          600: '#166ff7',
          700: '#0f5bd1',
          800: '#0c4aa8',
          900: '#093a82',
        },
        'cyber-purple': {
          50: '#f7f4fe',
          100: '#efe9fb',
          200: '#ddd3f6',
          300: '#c2b4ee',
          400: '#a08be3',
          500: '#795cc8',
          600: '#7731ff',
          700: '#6b00e6',
          800: '#5500cc',
          900: '#4400b3',
        },
        'hot-pink': {
          50: '#fff0f7',
          100: '#fde1f1',
          200: '#f9c2e3',
          300: '#f6a1d3',
          400: '#f07fc4',
          500: '#e856ae',
          600: '#e41aa5',
          700: '#c61a8f',
          800: '#a11578',
          900: '#7e0f5e',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}
