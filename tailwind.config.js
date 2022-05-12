module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
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
