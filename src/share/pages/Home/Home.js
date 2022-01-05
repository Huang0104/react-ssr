import React from 'react'

function Home() {
  return <div onClick={() => console.log('this is the Click event')}>Node 正在监听 Home</div>
}

export default Home