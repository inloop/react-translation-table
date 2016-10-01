module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/static",
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ 'es2015', 'stage-0', 'react' ]
      }
    }]
  }
}
