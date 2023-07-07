export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        red: {
          100: '#FFEEEC',
          300: '#FFA097',
          500: '#EA4B3D',
          700: '#B72E22',
          900: '#84180E',
        },
        blue: {
          100: '#E8F7FF',
          200: '#BBE6FF',
          300: '#88D4FF',
          500: '#4CADE3',
          700: '#2275A4',
          900: '#084060',
        },
        dark: {
          100: '#F7F7F7',
          200: '#D9D9D9',
          300: '#B3B5B4',
          400: '#878A89',
          600: '#575C5B',
          800: '#303332',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
