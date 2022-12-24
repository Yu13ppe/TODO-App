import React, {useContext} from 'react'
import TodoTittle from '../Components/TodoTittle';
import TodoSearch from '../Components/TodoSearch';
import TodoList from '../Components/TodoList';
import TodoItem from '../Components/TodoItem';
import TodoCreateButtom from '../Components/TodoCreateButtom'
import { TodoContext } from '../TodoContext';
import Modal from '../Components/Modal';
import TodoForm from '../Components/TodoForm';

function AppUI() {
    const {
        error,
        loading, 
        searchedTodos, 
        completeTodos, 
        deleteTodos,
        openModal,
        setOpenModal,
        } = useContext(TodoContext);

  return (
    <React.Fragment>
      <div className='Card'>
      <TodoTittle/>
      <TodoSearch/>
      <TodoList>
      {error && <p>Desésperese</p>}
      {loading && <p>Esperese</p>}
      {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p> }

      {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          isCompleted={todo.isCompleted}
        onComplete={() => {
          completeTodos(todo.text)
        }}
        onDelete={() => { 
          deleteTodos(todo.text)
          }}
        />
      ))}
    </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <TodoCreateButtom
      setOpenModal={setOpenModal}
      />
      </div>
    </React.Fragment>
  )
}

export default AppUI