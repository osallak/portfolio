import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tron-blue': '#00FFF6',
        'tron-background': '#0A0A0A',
        'tron-accent': '#1B8CD8',
        'tron-text': '#00FFF6',
        'tron-gray': '#3E4C59',
        'strong-text': '#ffcc00',
        background: '#ffffff',
        foreground: '#171717',
        'tron-cyber-green': '#1d2c33',
      },
      fontFamily: {
        body: ['Inconsolata', 'monospace'],
        display: ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
