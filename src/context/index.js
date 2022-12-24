import React, {createContext, useState} from 'react'
import {useLocalStorage} from '../hooks/useLocalStorage'

const TodoContext = createContext();

function TodoProvider(props){
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error,
        } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
  
    const completedTodos = todos.filter(todo => Boolean(todo.isCompleted)).length
    const totalTodos = todos.length
  
    let searchedTodos = [];
  
    if (!searchValue.length >= 1) {
      searchedTodos = todos
    } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    }
  
    const addTodos = (text) => {
      const newTodos = [...todos]
      newTodos.push({
        isCompleted: false,
        text,
      })
      saveTodos(newTodos)
    }

    const completeTodos = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text)
      const newTodos = [...todos]
      newTodos[todoIndex].isCompleted = true
      saveTodos(newTodos)
    }
  
    const deleteTodos = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text)
      const newTodos = [...todos]
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodos,
            completeTodos,
            deleteTodos,
            openModal,
            setOpenModal
        }}>
        {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}