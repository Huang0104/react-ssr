import axios from 'axios'

export const SAVE_USER = 'user_save'

// 发送请求，获取用户列表数据
export const UserList = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log('==========res======', res)
  dispatch({
    type: SAVE_USER,
    payload: res
  })
}