/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
     animation:{
      wiggle: 'wiggle 1s ease-in-out infinite'
     },
     height:{
      '200':'100rem',
      '37':"10rem",
     
     },
     width:{
      '150':'54rem',
      '120':'51rem',
      '100':'29rem',
      '66':'22rem',
      '125':'53rem',
     }
    },
  },
  plugins: [],
}

