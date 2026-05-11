import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0c1b3',
          400: '#d3a28e',
          500: '#c27d60',
          600: '#ad5d47',
          700: '#914d3a',
          800: '#774032',
          900: '#63352b',
          950: '#1a0f0d',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
