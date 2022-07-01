/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      colors: {
        dark: '#080707',
        highlight: '#FD5C02',
        light: '#F2F2F2',
      },
      backgroundImage: {
        headerbg: "url('/header_bg.jpg')",
        waves: "url('/waves.svg')",
      },
    },
  },
  plugins: [],
};
