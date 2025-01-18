/** @type {import('tailwindcss').Config} */
module.exports = {
  // Use class-based dark mode if you want to toggle manually
  // or use 'media' if you'd prefer OS-level dark mode detection
  darkMode: 'media',
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  
  plugins: [

  ],
};
