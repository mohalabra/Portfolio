import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "600px",
        md: "960px",
        lg: "1280px",
        xl: "1920px",
      },
      animation: {
        scale: "scale 1s ease-in-out 1",
        slide: 'slide 10s linear infinite',
        rotate: 'rotate 5s linear infinite',
      },
      keyframes: {
        scale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        slide: {
          '0%': { transform: 'translateX(-150px)' },
          '50%': { transform: 'translateX(150px)' },
          '100%': { transform: 'translateX(-150px)' },
        },
        rotate: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(-45deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
