import React from 'react'
import '../../Assets/index.scss'

function TodoCreateButtom(props) {
  const onClicker = () => {
    props.setOpenModal(prevsState =>!prevsState)
  }

  return (
    <button 
      className="createButton"
      onClick={onClicker}
    >
      +
    </button>
  )
}

export default TodoCreateButtom