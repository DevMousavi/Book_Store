/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        container: { center: true },
        screens: {
            af: "0px",
            as: "280px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1240px",
        },
        extend: {
            colors: {
                primaryWhite: "#fcfcfc",
                primaryGreen: "#61B346",
                primaryPink: "#F25050",
                blue: "#2d5cd7",
                darkBlue: "#552EC3",
                lightBlue: "#95c4d7",
            },
        },
    },
    plugins: [],
};
