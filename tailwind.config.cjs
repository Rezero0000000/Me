/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
     extend: {
        fontFamily: {
          mono: ['"Roboto Mono"', ...defaultTheme.fontFamily.sans]
        }
     },
     screens : {
      // Mobile medium
      'mm' : "375px",
      // Mobile large
      'xs' : "420px",
      'sm' : "648px",
      'md' : "768px",
      'lg' : "1024px",
      'xl' : "1280px",
      '2xl' : "1536px",
    }
   },
   plugins: [
    require("@tailwindcss/forms")
   ],
 }
