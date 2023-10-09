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
      'bg-banner': "url('https://i.ibb.co/hgzqLgm/rear-view-large-group-music-fans-front-stage-during-music-concert-by-night-copy-space.jpg')",
      'bg-contact': "url('https://i.ibb.co/ftCb9f4/420-4208919-contact-us-contact-email-banner.jpg')",
      'bg-blg': "url('https://i.ibb.co/Smk2KCK/photo-1622070284208-69fba2b6eccb.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

