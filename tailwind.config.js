/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern vibrant orange & white theme
        'akk-orange': '#FF6B35',
        'akk-orange-light': '#FF8C42',
        'akk-orange-bright': '#FF4500',
        'akk-yellow': '#F7931E',
        'akk-amber': '#F7931E',
        'akk-white': '#FFFFFF',
        'akk-gray': '#F3F4F6',
        'akk-gray-light': '#F9FAFB',
        'akk-text-primary': '#1F2937',
        'akk-text-secondary': '#4B5563',
        'akk-text-accent': '#6B7280',
        'akk-bg-primary': '#FFFFFF',
        'akk-bg-secondary': '#FFF8F0',
        'akk-bg-accent': '#FFF0E0',
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
