/**
 * Node 环境不支持 ESModule 模块系统，不支持 jsx 语法。
 * 无法跑起来，通过配置 webpack 运行配置之后的文件
 */

// 遵循 EsModule
const path = require('path')
// 用于合并，返回一个函数方法
const merge = require('webpack-merge')
// 公共的 webpack 配置
const webpackConfig = require('./webpack.config')
// 代码打包体积优化
const nodeExternals = require('webpack-node-externals')

const config = {
  // 开发环境还是生产环境
  // mode: 'development',
  // 运行在什么环境，node | javaScript
  target: 'node',
  // 入口文件
  entry: './src/server/index.js',
  // 打包位置
  output: {
    // 打包路径
    path: path.join(__dirname, 'build'),
    // 打包的文件名
    filename: 'bundle.js'
  },
  externals: [nodeExternals()]
  // 打包规则
  /* module: {
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
  } */
}

// 导出模块
module.exports = merge(webpackConfig, config)