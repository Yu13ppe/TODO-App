import React from 'react'

function TodoItem(props) {

  return (
    <li className='list-item'>
      <span 
        className={`Icon Icon-check ${props.isCompleted && 'Icon-check--active'}`}
        onClick = {props.onComplete}
      >
        Check
      </span>
        <p className={`TodoItem-p ${props.isCompleted && 'TodoItem-p--completed'}`}>
          {props.text}
        </p>
      <span 
        className='Icon Icon-delete'
        onClick = {props.onDelete}
      >
        X
      </span>
    </li>
  )
}

export default TodoItem