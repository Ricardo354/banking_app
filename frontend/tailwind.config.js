/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fredoka: ['Fredoka', 'sans-serif'],
      oswald: ['Oswald', 'sans-serif'],
      ibm: ['IBM Plex Sans', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif']
    },
    extend: {
      colors: {
        'card-black':'#0b0b0e',
      }
    },
  },
  plugins: [],
};
