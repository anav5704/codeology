module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/styles.css');
    eleventyConfig.addPassthroughCopy('./img');
    eleventyConfig.addPassthroughCopy('./src/script.js');

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
}
