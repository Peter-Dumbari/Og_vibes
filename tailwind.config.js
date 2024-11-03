import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
      },
      colors: {
        primary: "#dc1937",
        tabsBackground: "#273138",
        darkBackground: "#171e22",
        defaultBackground: "#333",
        defaultText: "#fff",
      },
    },
  },
  plugins: [require("daisyui")],
});
