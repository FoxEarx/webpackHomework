const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
  },
  //   module: {
  //     rules: [
  //       // ... 其它规则
  //       {
  //         test: /\.vue$/,
  //         loader: 'vue-loader',
  //       },
  //     ],
  //   },
  //   plugins: [
  //     // 请确保引入这个插件！
  //     new VueLoaderPlugin(),
  //   ],
}
