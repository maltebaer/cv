const postcss = require('postcss');
const postcssJitProps = require('postcss-jit-props');
const openProps = require('open-props');
const postcssImport = require('postcss-import');
// const postcssImportExtGlob = require('postcss-import-ext-glob');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/css/**/*.css");

    eleventyConfig.addTemplateFormats('css');

    eleventyConfig.addExtension('css', {
        outputFileExtension: 'css',
        compile: async (content, path) => {
            return async () => {
                let output = await postcss([
                    // postcssImportExtGlob,
                    postcssJitProps(openProps),
                    postcssImport,
                    tailwindcss,
                    autoprefixer,
                    cssnano
                ]).process(content, {
                    from: path
                });

                return output.css;
            };
        }
    });

    // Return your Object options:
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
