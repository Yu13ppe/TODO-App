import React from 'react'

function TodoList(props) {
  return (
    <section className='list'>
      <ul >
        {props.children}
      </ul>
    </section>
  )
}

export default TodoList