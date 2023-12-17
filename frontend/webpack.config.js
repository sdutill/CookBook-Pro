const path = require("path");

module.exports = {
  devtool: 'eval-source-map',
  entry: "./src/index.ts",
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "public",
  },
};
