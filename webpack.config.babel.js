var path = require("path")
var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin")

module.exports = (env = {}) => ({
  entry: {
    main: "./src/entry.js",
  },
  output: {
    filename: "assets/js/bundle.js",
    path: "dist",
    libraryTarget: "umd",
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules"),
    ],
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js?$/,
        include: [path.resolve(__dirname, "src")],
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "src")],
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader:
            "css-loader?&modules&localIdentName=[local]__[hash:3]!postcss-loader",
        }),
      },
      {
        test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|svg|ttf|woff2?)/,
        loader: "file-loader",
        query: {
          name: "/assets/media/[name].[ext]",
          context: path.join(__dirname, "src"),
        },
      },
      {
        test: /\.yml$/,
        loader: "json-loader!yaml-loader",
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "assets/css/index.css",
    }),
    new StaticSiteGeneratorPlugin(
      "main",
      ["/", "/about", "/contact", "/projects", "/skills"],
      {
        title: "Xuopled.codes",
      }
    ),
  ],
  performance: {
    hints: false,
  },
})
