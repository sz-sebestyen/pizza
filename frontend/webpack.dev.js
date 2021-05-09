const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    watchContentBase: true,
    hot: true,
    open: true,
    port: 5000,
    proxy: {
      "/menu": {
        target: "http://localhost:3000/",
        secure: false,
        changeOrigin: true,
      },
      "/book": {
        target: "http://localhost:3000/",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
});
