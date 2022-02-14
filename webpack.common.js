const path = require('path');

const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.tsx', '.ts', '.js'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.svg/,
        use: ['@svgr/webpack', 'svgo-loader'],
      },
    ],
  },
};
