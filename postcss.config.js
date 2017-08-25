var path = require('path')

module.exports = {
  plugins: [
    require("postcss-import")({
      path: path.resolve(__dirname, "src"),
    }),
    require("postcss-url")(),
    require("postcss-cssnext")({
      browsers: [
        "last 2 versions",
        "not ie < 11",
      ],
    }),
    require("postcss-reporter")(),
  ]
}
