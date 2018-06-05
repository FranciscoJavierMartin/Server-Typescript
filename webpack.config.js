const path = require('path');

module.exports={
  devtool: "source-map",
  watch: true,
  mode: 'development',
  entry:__dirname+'/src/main.ts',
  module:{
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
}