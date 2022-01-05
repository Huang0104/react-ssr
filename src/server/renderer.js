/**
 * 代码优化
 */

// 引入 renderToString
import { renderToString } from 'react-dom/server'
import React from 'react'
// 服务端路由
import { StaticRouter } from 'react-router-dom'
// 将数组路由转换成组件路由
import { renderRoutes } from 'react-router-config'
// 数组路由
import routers from '../share/routers'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'


export default (req, store) => {
  // 使用 rebderToString() 方法将 React 组件转为 HTML
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        {renderRoutes(routers)}
      </StaticRouter>
    </Provider>
  )

  // const initialState = JSON.stringify(store.getState())
  // 防止XSS攻击(恶意代码)
  const initialState = serialize(store.getState())
  return `
  <html>
    <head>
      <title>React SSR</title>
    </head>
    <body>
      <div id='root'>${content}</div>
      <script>window.INITIAL_STATE=${initialState}</script>
      <script src='bundle.js'></script>
    </body>
  </html>
`
}