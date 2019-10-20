const path = require('path');

module.exports = {
  entry: './src/js/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'file-loader',
        exclude: /node_modules/
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  }
};
