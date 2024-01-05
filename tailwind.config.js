/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',      
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver':'#F5F7FA',
        'brandPrimary':'#4CAF4F',
        'neutralDGrey':'#4D4D4D',
        'neutralGrey':'#717171',
        'grey900':'#18191f'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

