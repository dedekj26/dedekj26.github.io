const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
     content: ["./src/**/*.{html,js}", "*.{html,js}"],
     theme: {
          extend: {
               fontFamily: {
                    sans: ["Poppins", ...defaultTheme.fontFamily.sans],
               },
               fontSize: {
                    xs: ["14px", { lineHeight: "21px" }],
                    sm: ["18px", { lineHeight: "27px" }],
                    md: ["24px", { lineHeight: "36px" }],
                    lg: ["36px", { lineHeight: "54px" }],
                    xl: ["48px", { lineHeight: "72px" }],
               },
          },
     },
     plugins: [],
};
