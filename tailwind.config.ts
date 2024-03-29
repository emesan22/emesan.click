import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-color)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text-color)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
