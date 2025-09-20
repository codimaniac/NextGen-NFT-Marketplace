/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#04040c",
                secondary: "#5c43f6",
                accent: "#bc61f3",
                light: "#f2f2f2",
                gray: "#f0f0f0",
            },
        },
    },
    plugins: [],
};