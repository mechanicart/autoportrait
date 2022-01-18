module.exports = {
  context: __dirname,
  entry: './src/main.ts',
  output: {
    path: __dirname + '/public',
    filename: 'build.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  }
}