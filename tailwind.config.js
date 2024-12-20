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
                200: 'rgba(0, 72, 180, .08)',
                500: 'rgba(0, 72, 180, 1)',
                600: 'rgba(0, 57, 143, 1)',
            },
            'secondary': 'rgba(0, 43, 108, 1)',
            'accent': 'rgba(101, 178, 255, 1)',
            'text': 'rgba(0, 0, 0, .8)',
            'text-light': 'rgba(0, 0, 0, .5)',
            'green': 'rgba(101, 217, 130, 1)',
            'red': 'rgba(143, 0, 0, 1)',
            'white': 'rgba(255, 255, 255, 1)',
            'dark': '#262B30',
            'black': '#000000',
        },
        fontFamily: {
            'sans': ['Satoshi', 'system-ui'],
            'serif': ['Khula', 'system-ui'],
            'mono': ['IBM Plex Mono', 'system-ui'],
        },
    },
    plugins: [],
};