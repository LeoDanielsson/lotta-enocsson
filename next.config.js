module.exports = {
  output: "export",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return config;
  },
};
