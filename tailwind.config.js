module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts,tsx}'],
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
