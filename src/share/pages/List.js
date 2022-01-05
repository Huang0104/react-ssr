import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { UserList } from '../store/action/user.action'

function List({user, dispatch}) {
  useEffect(() => {
    dispatch(UserList())
  }, [])
  return <div>
    This is userList
    <ul>
      {
        user.map(item => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  </div>
}

// 创建 loadDate 函数，获取组件所需数据，给服务器调用
function loadData(store) {
  return store.dispatch(UserList())
}

const mapStateToProps = state => ({
  user: state.user
})

export default {
  component: connect(mapStateToProps)(List),
  loadData
}