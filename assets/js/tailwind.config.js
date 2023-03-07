/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwindcss를 사용할 페이지
  content: [
    "./ko/**/*.{js,jsx,ts,tsx}"
],  
  theme: {
    extend: {
      
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
