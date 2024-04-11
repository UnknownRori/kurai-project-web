import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...fontFamily.sans],
            },
            colors: {
                'text': {
                    50: '#f2f2f2',
                    100: '#e6e6e6',
                    200: '#cccccc',
                    300: '#b3b3b3',
                    400: '#999999',
                    500: '#808080',
                    600: '#666666',
                    700: '#4d4d4d',
                    800: '#333333',
                    900: '#1a1a1a',
                    950: '#0d0d0d',
                },
                'background': {
                    50: '#f2f2f2',
                    100: '#e6e6e6',
                    200: '#cccccc',
                    300: '#b3b3b3',
                    400: '#999999',
                    500: '#808080',
                    600: '#666666',
                    700: '#4d4d4d',
                    800: '#333333',
                    900: '#1a1a1a',
                    950: '#0d0d0d',
                },
                'primary': {
                    50: '#f2f2f2',
                    100: '#e6e6e6',
                    200: '#cccccc',
                    300: '#b3b3b3',
                    400: '#999999',
                    500: '#808080',
                    600: '#666666',
                    700: '#4d4d4d',
                    800: '#333333',
                    900: '#1a1a1a',
                    950: '#0d0d0d',
                },
                'secondary': {
                    50: '#f2f2f2',
                    100: '#e6e6e6',
                    200: '#cccccc',
                    300: '#b3b3b3',
                    400: '#999999',
                    500: '#808080',
                    600: '#666666',
                    700: '#4d4d4d',
                    800: '#333333',
                    900: '#1a1a1a',
                    950: '#0d0d0d',
                },
                'accent': {
                    50: '#fcffe5',
                    100: '#faffcc',
                    200: '#f5ff99',
                    300: '#f0ff66',
                    400: '#ebff33',
                    500: '#e6ff00',
                    600: '#b8cc00',
                    700: '#8a9900',
                    800: '#5c6600',
                    900: '#2e3300',
                    950: '#171a00',
                },
            },
            screens: {
                'sm': '240px',
                'md': '640px',
                'lg': '800px',
                'xl': '1024px',
                '2xl': '1280px',
                '3xl': '1680px',
                '4xl': '1928px',
            },
            boxShadow: {
                'neon-sm': '0px 0px 8px 0px rgba(151, 151, 151, 0.2)',
                'neon-md': '0px 0px 12px 1px rgba(151, 151, 151, 0.8)',
            }
        },
    },
    plugins: [],
}
    ;