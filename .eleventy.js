module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
  };