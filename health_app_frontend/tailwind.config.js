/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                light: '#ffffff',
                'primary/300': '#FFCC21',
                'primary/400': '#FF963C',
                'primary/500': '#EA6C00',
                'secondary/300': '#8FE9D0',
                'dark/600': '#2E2E2E',
                'dark/500': '#414141',
                'dark/400': '#777777',
                'text-base': '#ffffff',
                'text-none-active': '#b3b3b3',
                'bg-base': '#000000',
                'bg-dark': '#121212',
                'bg-gray': '#282828',
                blue: 'rgb(24, 119, 242)',
                'border-gray': '#878787',
                error: '#d31225',
                success: '#1ed760'
            },
            backgroundImage: {
                collection: 'linear-gradient(135deg,#450af5,#c4efd9)',
                'primary-300/400': 'linear-gradient(65.89deg, #FFCC21 8.26%, #FF963C 91.18%)',
                'primary-400/300': 'linear-gradient(65.89deg, #FF963C  8.26%, #FFCC21 91.18%)'
            },
            fontFamily: {
                Noto_Sans_JP: 'Noto Sans JP, sans-serif'
            }
        }
    },
    plugins: []
};
