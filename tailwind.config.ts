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
        "projects-underline":
          "url('./assets/projects_page/projects_underline.svg')",
      },
      animation: {
        fade: "fadeIn 5s ease-in-out",
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
        "beige-dark": "#FEF5DD",
        "restore-pink": "#ED0965",
        repink: "#ed0965",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
