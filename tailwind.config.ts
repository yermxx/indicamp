import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        noise01: 'url("/images/noise.jpg")',
      },
      colors: {
        mainblue: ' #1E3A8A',
        mainyello: '#FBBF24',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        shine: 'shine 2.5s',
      },
      keyframes: {
        shine: { '100%': { left: '125%' } },
        'code-1': {
          '0%': { opacity: '0' },
          '2.5%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'code-2': {
          '16.2%': { opacity: '0' },
          '18.75%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'code-3': {
          '32.5%': { opacity: '0' },
          '35%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'code-4': {
          '48.75%': { opacity: '0' },
          '51.25%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'code-5': {
          '65%': { opacity: '0' },
          '72.5%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'code-6': {
          '81.25%': { opacity: '0' },
          '83.75%': { opacity: '1' },
          '97.5%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        gradient: {
          to: { 'background-position': '200% center' },
        },
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1.4' }],
      },
    },
    plugins: [animate],
  },
};
export default config;
