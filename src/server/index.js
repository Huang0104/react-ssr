/**
 * 3、
 * 实现 React 服务器端渲染
 * -引入需要渲染的 React 组件
 * -使用 rebderToString() 方法将 React 组件转为 HTML
 * -将 HTML 渲染到客户端
 */

// 1、导入 app
import app from './http'
import renderer from './renderer'

// 2、接受客户端发来的请求， Node 服务器已经创建完成
app.get('/', (req, res) => {
  // 接受请求，并响应返回 HTML
  res.send(renderer())
})
