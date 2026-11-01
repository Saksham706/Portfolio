// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8245ec',
          hover: '#9353f9',
          light: '#a855f7',
          dark: '#6926d7',
        },
        darkbg: '#050414',
        darkcard: '#0c0a21',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.15) translate(20px, -20px)' },
          '66%': { transform: 'scale(0.85) translate(-20px, 20px)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        blob: 'blob 10s infinite ease-in-out',
        float: 'float 4s ease-in-out infinite',
        glow: 'pulseGlow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(130, 69, 236, 0.12) 0%, rgba(201, 32, 184, 0.04) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0.04) 50%, rgba(130, 69, 236, 0.12) 100%)',
      },
    },
  },
  plugins: [],
};
