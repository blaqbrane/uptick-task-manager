/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grey:{
          '100' :'#f5f4f4'
        }
      }
    },
  },
  plugins: [],
}

