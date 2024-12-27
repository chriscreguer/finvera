/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'primary': {
                100: 'rgba(0, 72, 180, .05)',
                101: 'rgb(0, 91, 227, .08)' ,
                200: 'rgba(0, 72, 180, .08)',
                500: '#005BE3',
                600: 'rgba(0, 57, 143, 1)',
            },
            'secondary': 'rgba(0, 43, 108, 1)',
            'accent': 'rgba(101, 178, 255, 1)',
            'text': 'rgba(0, 0, 0, .8)',
            'text-light': 'rgba(0, 0, 0, .6)',
            'green': 'rgba(101, 217, 130, 1)',
            'light-green': '#197D32',
            'red': 'rgba(255, 150, 150, 1)',
            'light-red': '#8F0000',
            'white': 'rgba(255, 255, 255, 1)',
            'dark': '#1E1E1E',
            'black': '#000000',
        },
        fontFamily: {
            'sans': ['Satoshi', 'system-ui'],
            'serif': ['Source-Serif-Pro', 'system-ui'],
            'body': ['Source-Sans-Pro', 'system-ui'],
        },
        letterSpacing: {
            wider: '.04em',
        },
    },
    plugins: [],
};