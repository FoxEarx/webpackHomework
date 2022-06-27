const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024, // 2kb
          },
        },
        generator: {
          filename: 'images/[hash:6][ext]',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/font-[name].[hash:6][ext]',
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 预设:转码规则(用bable开发环境本来预设的)
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    port: 3000, // 端口号
    open: true,
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
  ],
}
