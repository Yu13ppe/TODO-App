import React,  {useContext} from 'react'
import '../../Assets/index.scss'
import { TodoContext } from '../../TodoContext'

function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext)

  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
      <div className='todoSearch'>
          <input 
          placeholder='Programar en React.js' 
          value = {searchValue}
          onChange={onSearchValueChange}
          />
      </div>  
  )
}

export default TodoSearch