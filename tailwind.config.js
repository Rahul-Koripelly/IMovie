/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        "other": {'min':'340px', 'max':'1200px'}
      },
      colors:{
        darkbg:"#1E293B",
      }
    },
  },
  plugins: [],
}

