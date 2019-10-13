const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin')

module.exports = {
  webpack: config => {
    config.entry.main = ['./server/Server_node.js']

    config.plugins.push(
      new ExtraWatchWebpackPlugin({
        files: ['./**/*.js', './**/*.graphql'],
      })
    )

    return config
  },
}
