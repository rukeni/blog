module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            li: {
              '&::marker': {
                color: '#a855f7',
              },
            },
            blockquote: {
              borderLeftColor: '#a855f7',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
