import colors from "./src/constants/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                ...colors,
            },
        },
    },
    plugins: [],
    safelist: [
        {
            pattern: /bg-\[#[0-9a-fA-F]+\]/, // Cho phép sử dụng bg-[#hex]
        },
    ],
};
