import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        "16": "4rem",
      },
      colors: {
        background: "#FFFCF4",
      },
    },
  },
  plugins: [],
};
export default config;
