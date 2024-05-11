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
        rubik: ["var(--font-rubik)", "sans-serif"],
        rift: ["var(--font-rift)", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": {
            maxHeight: "0",
            opacity: "0",
          },
          "100%": {
            maxHeight: "400px",
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
