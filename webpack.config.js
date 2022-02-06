const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const getFilename = (ext) =>
  isDev ? `[name].${ext}` : "[name].[contenthash].#{ext}";

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    filename: `./${getFilename("js")}`,
    path: path.resolve(__dirname, "app"),
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: `./${getFilename("css")}`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
      // {
      //     test: /\.n?js$/,
      //     exclude: /node_modules/,
      //     use: {
      //         loader: 'babel-loader',
      //         options: {
      //             presets: ['@babel/preset-env']
      //         }
      //     }
      // }
    ],
  },
};
