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

const config = {
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
  }
}

// 导出模块
module.exports = merge(webpackConfig, config)