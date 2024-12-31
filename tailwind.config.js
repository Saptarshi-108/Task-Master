module.exports = {
  content: [
    "./*.html", // Include all HTML files in the root directory
    "./*.js", // Include all JS files in the root directory
    "./**/*.html", // Include HTML files in subdirectories
    "./**/*.js", // Include JS files in subdirectories
  ],
  theme: {
    extend: {}, // Extend Tailwind's default theme if needed
  },
  plugins: [], // Add Tailwind plugins here if necessary
};
