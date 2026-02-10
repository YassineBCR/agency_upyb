import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        upyb: {
          blue: "#001EA3",
          purple: "#7A3CFF",
          night: "#312C85",
          white: "#FFFFFF",
          light: "#F5F5F5",
          dark: "#333333",
          deep: "#050510",
        }
      },
      fontFamily: {
        sans: ["var(--font-hind)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        'upyb-gradient': 'linear-gradient(90deg, #001EA3 0%, #7A3CFF 100%)',
      },
      // --- AJOUTER CECI ---
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      // --------------------
    },
  },
  plugins: [],
};
export default config;