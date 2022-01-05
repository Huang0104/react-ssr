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

export default (req) => {
  // 使用 rebderToString() 方法将 React 组件转为 HTML
  const content = renderToString(
    <StaticRouter location={req.path}>
      {renderRoutes(routers)}
    </StaticRouter>
  )
  return `
  <html>
    <head>
      <title>React SSR</title>
    </head>
    <body>
      <div id='root'>${content}</div>
      <script src='bundle.js'></script>
    </body>
  </html>
`
}