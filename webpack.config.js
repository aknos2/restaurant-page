const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/main-page.html"],
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [ MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/main-page.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  optimization: {
    minimize: true, // Minify JavaScript and CSS
    splitChunks: {
      chunks: 'all', // Automatically split large chunks into smaller ones for optimization
    },
    minimizer: [
      `...`, // Keeps the default JavaScript minimizer (TerserPlugin)
      new CssMinimizerPlugin(), // Minify CSS for production
    ],
  },
  mode: "production",
};