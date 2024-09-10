const path = require('path');
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './js/index.js',
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true,
    },
  },
};
