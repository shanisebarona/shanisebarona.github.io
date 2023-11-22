const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
  };