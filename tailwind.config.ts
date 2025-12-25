// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      xlg: "992px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1640px",
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./_components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
