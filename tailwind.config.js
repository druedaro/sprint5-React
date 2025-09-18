/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-almost-purple': 'hsl(231 69% 60%)',
      },
    },
  },
  plugins: [],
}

