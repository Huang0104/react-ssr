import Home from './pages/Home'
import List from './pages/List'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/list',
    // component: List,
    // exact: true
    // 将 loadData 保存至路由对象中
    ...List 
  }
]