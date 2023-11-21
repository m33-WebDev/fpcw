/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: "tw-",
    content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                playfair: ["Playfair Display"],
                nunito: ["Nunito"]
            }
        }
    },
    plugins: []
};
