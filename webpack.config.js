const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
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
    minimizer: [
      `...`, // Keeps the default JavaScript minimizer (TerserPlugin)
      new CssMinimizerPlugin(), // Minify CSS for production
    ],
  },
  mode: "production",
};