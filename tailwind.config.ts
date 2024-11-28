import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'double-struck': ['Double Struck', 'sans-serif'], // Add your custom font here
      },

      colors: {
       'mint-green': '#98FF98', // Mint green color
        'pastel-blue': '#AEEEEE', // Pastel blue color
      },
      
      // animation: {
      //   'spin-slow': 'spin 5s linear infinite', // Slow spin animation
      // },
      // keyframes: {
      //   spin: {
      //     '0%': {
      //       transform: 'rotate(0deg)',
      //     },
      //     '100%': {
      //       transform: 'rotate(360deg)',
      //     },
      //   },
      // },


      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
  },
  plugins: [],
};
export default config;
