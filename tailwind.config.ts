import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        limeGreen: '#1AC822',
      },
    },
    fontFamily: {
      alNile: ['Al Nile', 'sans-serif'],
      monda: ['Monda', 'sans-serif'],
    },
  },
  plugins: [],
}
export default config
