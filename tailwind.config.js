/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ["light", "dark", "cupcake"],
    },
    colors: {
        title_color_first: 'rgba(17, 17, 17, 0.8)',
        title_color_second: 'rgba(17, 17, 17, 0.6)'
    },
    plugins: [],
}