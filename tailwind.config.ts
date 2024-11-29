import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#FF6500",
        secondary: "#FF8A08",
        accent: "#FFC100",
        danger: "#C40C0C",
        background: "var(--background)", // Optional: can be set in CSS
        foreground: "var(--foreground)", // Optional: can be set in CSS
      },

      textDecorationStyle: {
        wavy: 'wavy',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #FF6500 40%, #FF8A08 59%)',
        'custom-gradient-hero': `linear-gradient(45deg, var(--tw-color1) 40%, var(--tw-color2) 59%)`,
      }
    },
  },
  plugins: [],
};

export default config;
