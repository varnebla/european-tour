/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#FAF5E4',
        primary: '#125B50',
        secondary: '#FF6363',
        tertiary: '#F8B400'
      }
    },
    fontFamily: {
      'dm-serif': ['DM Serif Display'],
      'dm-sans': ['DM Sans']
    }
  },
  plugins: []
};
