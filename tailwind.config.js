/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        dark: 'hsl(0, 0%, 8%)',
        cyan: 'hsl(153, 71%, 59%)',
        'dark-gray': 'hsl(0, 0%, 14%)',
        gray: 'hsl(0, 0%, 85%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': [
          '88px',
          { lineHeight: '88px', letterSpacing: '-2.5px', fontWeight: '700' },
        ],
        'heading-lg': [
          '48px',
          { lineHeight: '56px', letterSpacing: '-1.5px', fontWeight: '700' },
        ],
        'heading-md': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'heading-base': ['18px', { lineHeight: '28px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
