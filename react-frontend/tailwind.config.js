/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                customBlue: "rgba(28, 100, 242, 1)",
                "banner-color1": "#FDC200",
                "banner-color2": "#FF2C2C",
                "banner-color3": "#21AD61",
                "banner-color4": "#723DA6",
            },
            backgroundImage: {
                "custom-gradient": "linear-gradient(to right, #111827, #1f2937)",
                "button-gradient": "linear-gradient(to right, #7e22ce, #ef4444)",
                "custom-gradient2": "linear-gradient(135deg, #f5f5f5, #eae7dc)",
            },
        },
    },
    plugins: [],
};