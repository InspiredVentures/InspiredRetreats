/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                aman: {
                    charcoal: '#2C2C2C',
                    pearl: '#FDFCF8',
                    stone: '#E5E0D8',
                    sage: '#7CA37D',
                    gold: '#C5A065' // Added a subtle gold for luxury accents
                }
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 1.5s ease-in-out',
                'slide-up': 'slideUp 1s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
