/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        "heat-bg-dark-1": "#120603",
        "heat-bg-dark-2": "#1F0A05",
        "heat-bg-dark-3": "#2A1006",
        "heat-primary-red": "#DC2626",
        "heat-primary-orange": "#F97316",
        "heat-amber": "#F59E0B",
        "heat-yellow-soft": "#FACC15",
        "heat-heading-dark": "#FEF3C7",
        "heat-body-dark": "#D6D3D1"
      }
    }
  },
  plugins: []
};

