import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard-variable)', 'sans-serif'],
      },
      colors: {
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
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,

    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.headline1': {
          fontSize: '96px',
          fontWeight: '700',
          lineHeight: '1.2',
        },
        '.headline2': {
          fontSize: '60px',
          fontWeight: '700',
          lineHeight: '1.3',
        },
        '.headline3': {
          fontSize: '42px',
          fontWeight: '700',
          lineHeight: '1.4',
        },
        '.headline4': {
          fontSize: '36px',
          fontWeight: '700',
          lineHeight: '1.4',
        },
        '.body1': {
          fontSize: '28px',
          fontWeight: '600',
          lineHeight: '1.6',
        },
        '.body2': {
          fontSize: '24px',
          fontWeight: '600',
          lineHeight: '1.6',
        },
        '.body3': {
          fontSize: '24px',
          fontWeight: '500',
          lineHeight: '1.6',
        },
        '.body4': {
          fontSize: '22px',
          fontWeight: '500',
          lineHeight: '1.6',
        },
        '.body5': {
          fontSize: '22px',
          fontWeight: '400',
          lineHeight: '1.6',
        },
        '.body6': {
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '1.6',
        },
        '.body7': {
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '1.6',
        },
        '.body8': {
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '1.6',
        },
        '.mobile1': {
          fontSize: '16px',
          fontWeight: '500',
          lineHeight: '1.6',
        },
        '.mobile2': {
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '1.4',
        },
        '.caption': {
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '1.4',
        },
        '.display1': {
          fontSize: '20px',
          fontWeight: '400',
          lineHeight: '1.4',
        },
        '.display2': {
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '1.4',
        },
        '.display3': {
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '1.4',
        },
        '.display4': {
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '1.4',
        },
        '.display5': {
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '1.2',
        },
        '.display6': {
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '1.4',
        },
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-col-center': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
} satisfies Config;
