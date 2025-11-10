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
          50: '#fff0f5',
          100: '#ffe1ea',
          200: '#fbb0c2',
          300: '#fa8aa5',
          400: '#f86b92',
          500: '#f86087',
          600: '#e05277',
          700: '#c74463',
          800: '#a33751',
          900: '#7e2a3f',
        },
        'cyber-purple': {
          50: '#f4f0fb',
          100: '#e9e1f7',
          200: '#d5c9f0',
          300: '#bba9e6',
          400: '#9d88d6',
          500: '#886bbb',
          600: '#7358a1',
          700: '#5d4683',
          800: '#483666',
          900: '#34264a',
        },
        'hot-pink': {
          50: '#fff4ec',
          100: '#ffe6d7',
          200: '#fec9ac',
          300: '#fda983',
          400: '#fb986f',
          500: '#ee936b',
          600: '#d77f5c',
          700: '#b3664b',
          800: '#8f513d',
          900: '#6c3c2e',
        },
        primary: {
          light: '#fbb0c2',
          DEFAULT: '#f86087',
          dark: '#e05277',
        },
        secondary: {
          light: '#d5c9f0',
          DEFAULT: '#886bbb',
          dark: '#7358a1',
        },
        accent: {
          light: '#fec9ac',
          DEFAULT: '#ee936b',
          dark: '#d77f5c',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        xxs: '0.625rem', // 10px
      }
    },
  },
  plugins: [],
}
