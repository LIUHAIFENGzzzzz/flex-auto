const webpack = require("webpack");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir:'docs',
  configureWebpack: {
    output: {
      filename: `js/[name].[hash].js`,
      chunkFilename: `js/[name].[hash].js`,
    },
    plugins: [
      new ExtractCssChunks({
        filename: "css/[name].css",
        chunkFilename: "css/[name].css",
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"],
      }),
    ],
  },
  devServer: {
    open: true,
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,
  },
  lintOnSave: false,
};
