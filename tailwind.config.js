/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
Nunito: " 'Nunito Sans', sans-serif"
      },
      backgroundImage:{
      'bg-banner': "url(/src/assets/rear-view-large-group-music-fans-front-stage-during-music-concert-by-night-copy-space.jpg)",
      'bg-contact': "url('src/assets/420-4208919_contact-us-contact-email-banner.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

