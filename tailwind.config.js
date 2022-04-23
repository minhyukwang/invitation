module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/main.jpeg')",
      },
      fontFamily: {
        MalgunGothic: ["Malgun Gothic"],
      },
    },
  },
  plugins: [],
};
