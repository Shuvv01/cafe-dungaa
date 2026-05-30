import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        coffee: '#7A3F1D',
        caramel: '#D8A03D',
        espresso: '#1F1712',
        cream: '#FFF7EA',
        leaf: '#2F6B4F',
        clay: '#B85C38',
        ink: '#171717',
        mist: '#F3F5F0'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(31, 23, 18, 0.12)',
        lift: '0 14px 30px rgba(31, 23, 18, 0.10)'
      }
    }
  },
  plugins: []
};

export default config;
