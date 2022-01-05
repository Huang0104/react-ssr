module.exports = {
   // 开发环境还是生产环境
   mode: 'development',
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
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: "usage"
              }
            ],
            '@babel/preset-react'
          ]
        }
      }
    }]
  }
}