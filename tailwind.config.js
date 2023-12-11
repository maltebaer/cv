/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const postcss = require("postcss");
const postcssJs = require("postcss-js");

const clampGenerator = require("./src/assets/css-utils/clamp-generator.js");
const tokensToTailwind = require("./src/assets/css-utils/tokens-to-tailwind.js");

// raw design tokens
const colorTokens = require("./src/assets/design-tokens/colors.json");
const fontTokens = require("./src/assets/design-tokens/fonts.json");
const spacingTokens = require("./src/assets/design-tokens/spacing.json");
const textSizeTokens = require("./src/assets/design-tokens/text-sizes.json");

// process design tokens
const colors = tokensToTailwind(colorTokens.items);
const fontFamily = tokensToTailwind(fontTokens.items);
const fontSize = tokensToTailwind(clampGenerator(textSizeTokens.items));
const spacing = tokensToTailwind(clampGenerator(spacingTokens.items));

module.exports = {
    content: ["./index.html"],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {},
        screens: {
            md: "50em",
            lg: "80em",
        },
        colors,
        spacing,
        fontSize,
        fontFamily,
        fontWeight: {
            normal: 400,
            bold: 700,
            black: 800,
        },
        backgroundColor: ({ theme }) => theme("colors"),
        textColor: ({ theme }) => theme("colors"),
        margin: ({ theme }) => ({
            auto: "auto",
            ...theme("spacing"),
        }),
        padding: ({ theme }) => theme("spacing"),
    },
    plugins: [
        // generates custom property values from tailwind config
        plugin(function ({ addBase, config }) {
            let result = "";

            const currentConfig = config();

            const groups = [
                { key: "colors", prefix: "color" },
                { key: "spacing", prefix: "space" },
                { key: "fontSize", prefix: "size" },
                { key: "fontFamily", prefix: "font" },
            ];

            groups.forEach(({ key, prefix }) => {
                const group = currentConfig.theme[key];

                if (!group) {
                    return;
                }

                Object.keys(group).forEach((key) => {
                    result += `--${prefix}-${key}: ${group[key]};`;
                });
            });

            addBase({
                ":root": postcssJs.objectify(postcss.parse(result)),
            });
        }),
    ],
};
