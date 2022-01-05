import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return <div onClick={() => console.log('this is the Click event')}>
    Node is listening on Home
    <div>
      <Link to='/list'>link to List</Link>
    </div>
  </div>
}

export default Home