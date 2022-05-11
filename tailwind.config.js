/* tailwind.config.js */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          50: '#40b4a4', //light blue
          100: '#84d4cc', //lighter blue
          200: '#1c5563', //somewhat darker blue
          300: '#84ac54', //sort of light green
          400: '#a8c6c9', //pale blue
          500: '#345e64', //sad blue
          600: '#00FF00', //happy green
          700: '#FF0000', //wrong red
          800: '#FFFFFF', //gradient first end
          899: '#00cdac' //gradient second end
        },
      },
      backgroundImage: {
        'mint': "url('/styles/images/mint.png')"
    },

    },
  },
    plugins: [],
}