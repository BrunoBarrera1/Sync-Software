// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0047AB',
          light: '#0057D9',
        },
        accent: '#00A3FF',
      },
      animation: {
        'bounce': 'bounce 0.6s infinite',
      },
    },
  },
  plugins: [],
}
