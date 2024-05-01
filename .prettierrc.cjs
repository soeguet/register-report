/** @type {import("prettier").Config} */
const config = {
    plugins: [
        "prettier-plugin-tailwindcss",
        "@trivago/prettier-plugin-sort-imports",
    ],
    trailingComma: "all",
    useTabs: true,
    tabWidth: 4,
    semi: true,
    singleQuote: false,
};

module.exports = config;