/** @type {import('tailwindcss').Config} */
export default {
    prefix: "tw-",
    content: ["./target/intermediate/**/*.tsx"],
    theme: {
        fontFamily: {
            sans: ["Nunito", "sans-serif"],
            serif: ["Playfair Display", "serif"],
        },
    },
    plugins: [],
};
