const { webpackConfig } = require("@rails/webpacker")
const webpack = require("webpack")

webpackConfig.plugins.append("Provide",
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
)

module.exports = webpackConfig

