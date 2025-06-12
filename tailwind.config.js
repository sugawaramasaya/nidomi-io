/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "16px",
        lg: "16px",
        xl: "16px",
        "2xl": "16px",
      },
      screens: {
        DEFAULT: "100%",
        sm: "100%",
        md: "100%",
        lg: "480px",
        xl: "480px",
        "2xl": "480px",
      },
    },
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
      },
      maxWidth: {
        "screen-xs": "480px",
      },
      colors: {
        nidomi: {
          "blue-70": "#1A89FF",
        },
      },
    },
  },
  plugins: [],
};
