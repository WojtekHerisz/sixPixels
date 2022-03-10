module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bee: "#FCBD17",
        "bee-brown": "#583412",
        "black-txt": "#333333",
        "placeholder-txt": "#767676",
        "alice-blue": "#F6FAFD",
        "moon-yellow": "#FCBD17",
        "green-envy": "#7DA783",
      },
    },
    borderRadius: {
      DEFAULT: "20px",
    },
  },
  plugins: [],
};
