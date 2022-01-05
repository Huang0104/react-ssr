/**
 * 创建 Node 服务器
 */

// 引入 express
import express from 'express'

// 创建 express 实例
const app = express()

// 监听端口
app.listen(3000, () => console.log('App is listening on port 3000'))

// 导出 app ， 以便在外部使用
export default app