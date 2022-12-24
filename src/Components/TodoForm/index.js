import React, { useContext, useState } from "react";
import { TodoContext } from "../../context";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodos, setOpenModal } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodos(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit} className="TodoForm">
      <label className="Label">Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe tu TODO"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
          onClick={onSubmit}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
