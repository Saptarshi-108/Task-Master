module.exports = {
  content: ["./src/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        leckerli: ["Leckerli One", "cursive"],
      },
    }, // Extend Tailwind's default theme if needed
  },
  plugins: [], // Add Tailwind plugins here if necessary
};
