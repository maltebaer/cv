const postcss = require('postcss');
const postcssJitProps = require('postcss-jit-props');
const openProps = require('open-props');
const postcssImport = require('postcss-import');
const postcssImportExtGlob = require('postcss-import-ext-glob');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const esbuild = require('esbuild');
const markdownIt = require("markdown-it");

const sortByOrder = (values) => {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
};
const getLocaleDateString = (date) => {
    if (!date) {
        return 'now';
    }
    return new Date(date).toLocaleDateString(undefined, {
        month: "2-digit",
        year: "numeric"
    });
};
const jsonToAlpine = (value) => {
    let jsonString = JSON.stringify(value);
    return jsonString.replace(/"/g, "'");
}
const markdown = (value) => {
    let md = markdownIt({
        html: true
    });
    return md.render(value);
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/fonts");
    eleventyConfig.addPassthroughCopy("./src/assets/images");
    eleventyConfig.addPassthroughCopy({ 'src/assets/images/favicon/*': '/' });

    eleventyConfig.addTemplateFormats('css');
    eleventyConfig.addExtension('css', {
        outputFileExtension: 'css',
        compile: async (content, path) => {
            return async () => {
                let output = await postcss([
                    postcssImportExtGlob,
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

    eleventyConfig.addTemplateFormats('js');
    eleventyConfig.addExtension('js', {
        outputFileExtension: 'js',
        compile: async (content, path) => {
            if (path !== './src/assets/scripts/app.js') {
                return;
            }

            return async () => {
                let output = await esbuild.build({
                    target: 'es2020',
                    entryPoints: [path],
                    minify: true,
                    bundle: true,
                    write: false
                });

                return output.outputFiles[0].text;
            };
        }
    });

    eleventyConfig.addFilter("sortByOrder", sortByOrder);
    eleventyConfig.addFilter("getLocaleDateString", getLocaleDateString);
    eleventyConfig.addFilter("jsonToAlpine", jsonToAlpine);
    eleventyConfig.addFilter("markdown", markdown);

    eleventyConfig.setServerOptions({
		// show local network IP addresses for device testing
		showAllHosts: true,
	});

    // return your object options:
    return {
        dir: {
            input: "src",
            output: "dist",
            includes: '_includes',
            layouts: '_layouts'
        }
    }
};
