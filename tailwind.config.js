/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",    // Indigo
        secondary: "#0ea5e9", // Sky blue
        accent: "#f472b6"      // Pink accents
      },
      fontFamily: {
        // ADDED: Professional font stack
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // ADDED: Custom gradient and dot pattern utility
        'brand': 'linear-gradient(135deg, var(--tw-primary) 0%, var(--tw-accent) 100%)',
        'dot-pattern': 'radial-gradient(#ffffff33 1px, transparent 1px)', 
      },
      backgroundSize: {
        // ADDED: Size for the dot pattern
        'dot-size': '20px 20px', 
      },
      boxShadow: {
        // ENHANCED: 3D lift and inset glow for dark theme
        'card': "0 8px 24px rgba(0,0,0,0.15)",
        '3d-lift': '0 25px 50px -12px rgba(99, 102, 241, 0.25)',
        'inset-glow': 'inset 0 0 10px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-in-out"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      // ADDED: Global transition settings for polish
      transitionProperty: {
        'all-ease': 'all', 
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(.17,.67,.83,.67)', 
      },
    }
  },
  plugins: [],
};
