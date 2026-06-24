import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007bff',
          light: '#0056b3',
          dark: '#0042a8',
        },
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-left))',
      },
    },
  },
  plugins: [],
};
export default config;
