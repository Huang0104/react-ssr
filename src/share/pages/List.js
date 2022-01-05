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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(List)