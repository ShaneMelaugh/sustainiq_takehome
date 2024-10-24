module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Outfit', 'sans-serif'],
        secondary: ['Commissioner', 'sans-serif']
      },
      backgroundImage: {
        'cold-gradient': 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
        'mild-gradient': 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
        'warm-gradient': 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
        'veryWarm-gradient': 'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
      },
    },
  },
  plugins: [],
};
