/**
 * Node 环境不支持 ESModule 模块系统，不支持 jsx 语法。
 * 无法跑起来，通过配置 webpack 运行配置之后的文件
 */

  // 遵循 EsModule
  const path = require('path')

// 导出模块
module.exports = {
  // 开发环境还是生产环境
  mode: 'development',
  // 运行在什么环境，node | javaScript
  // target: 'node',
  // 入口文件
  entry: './src/client/index.js',
  // 打包位置
  output: {
    // 打包路径
    path: path.join(__dirname, 'public'),
    // 打包的文件名
    filename: 'bundle.js'
  },
  // 打包规则
  module: {
    rules: [{
      // 文件后缀
      test: /\.js$/,
      exclude: /node_modules/,
      // 使用 loader
      use: {
        loader: 'babel-loader',
        // babel 本身配置
        options: {
          // 第一个表示解析 js 高级语法， 第二个表示解析 jsx 语法
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  }
}