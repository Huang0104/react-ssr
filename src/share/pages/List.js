import React from 'react'

function List() {
  return <div onClick={() => console.log('this is the list')}>
    Node is listening on List
  </div>
}

export default List