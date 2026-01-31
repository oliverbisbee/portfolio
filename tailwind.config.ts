import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C467B",
        secondary: "#50589C",
        tertiary: "#636CCB",
        accent: "#6E8CFB",
        text: "#4A4A4A",
      },
    },
  },
  plugins: [],
};
export default config;