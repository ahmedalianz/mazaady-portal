import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D20653',
        secondary: '#FF951D',
        white: '#fff',
        offWhite: '#F6F4F5;',
        orange1: '#FFF5E9',
        orange2: '#FFEAD2',
        gray1: '#333333',
        gray2: '#4F4F4F',
        gray3: '#828282',
        gray5: '#E0E0E0',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        // 'hero-pattern': "url('/hero/herobg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
