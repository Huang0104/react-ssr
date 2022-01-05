/**
 * 3、
 * 实现 React 服务器端渲染
 * -引入需要渲染的 React 组件
 * -使用 rebderToString() 方法将 React 组件转为 HTML
 * -将 HTML 渲染到客户端
 */

// 1、导入 app
import createStore from './createStore'
import app from './http'
import renderer from './renderer'
import routers from '../share/routers'
import { matchRoutes } from 'react-router-config'

// 2、接受客户端发来的请求， Node 服务器已经创建完成
app.get('*', (req, res) => {
  // 在发请求时创建 store
  const store = createStore()
  // 根据请求地址匹配对应的路由数据 请求地址-req.path、路由配置信息-routers
  // 调用loadDate获取需要渲染的是数据，需要借助 mathRouters
  const promises = matchRoutes(routers, req.path).map(({route}) => {
    if (route.loadData) return route.loadData(store)
  })
  Promise.all(promises).then(() => {
    // 接受请求，并响应返回 HTML
    res.send(renderer(req, store))
  })
})
