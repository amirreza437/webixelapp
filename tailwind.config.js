/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'iranYekan' : ['IRANYekanX']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        // 24 column grid
        '24': 'repeat(24, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-18': 'span 18 / span 18',
        'span-24': 'span 24 / span 24',
      }
    },
  },
  plugins: [],
};
