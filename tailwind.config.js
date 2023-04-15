const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        aspectRatio: {
            '4/3': '4 / 3',
          },
        fontSize: {
            xs: ['0.75rem', {lineHeight: '1rem'}],
            sm: ['0.875rem', {lineHeight: '1.5rem'}],
            base: ['1rem', {lineHeight: '1.75rem'}],
            lg: ['1.125rem', {lineHeight: '2rem'}],
            xl: ['1.25rem', {lineHeight: '2rem'}],
            '2xl': ['1.5rem', {lineHeight: '2rem'}],
            '3xl': ['2rem', {lineHeight: '2.5rem'}],
            '4xl': ['2.5rem', {lineHeight: '3.5rem'}],
            '5xl': ['3rem', {lineHeight: '3.5rem'}],
            '6xl': ['3.75rem', {lineHeight: '1'}],
            '7xl': ['4.5rem', {lineHeight: '1.1'}],
            '8xl': ['6rem', {lineHeight: '1'}],
            '9xl': ['8rem', {lineHeight: '1'}],
        },
        extend: {
            borderRadius: {
                '4xl': '2rem',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: '#710071',
                    light: '#60A5FA',
                    dark: '#4A004A',
                },
                surface: {
                    DEFAULT: "#F7F7F9",
                    dark: "#F0F0F5",
                },
                dark: "#080808",
                tertiary: "#FFFFFF",
                background: "#F0F0F5",
                secondary: {
                    DEFAULT: '#1D3557',
                    light: '#60A5FA',
                    dark: '#2563EB',
                },
            },
            maxWidth: {
                '2xl': '40rem',
            },
            backgroundImage: (theme) => ({
                'gradient-text': 'linear-gradient(45deg, #D6EDFF, #0068D9, #D6EDFF)',
            }),
            backgroundClip: {
                'text': 'text',
            },
            textFillColor: {
                'transparent': 'transparent',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
}
