import React, { useContext } from "react";
import "../../Assets/index.scss";
import { TodoContext } from "../../context";

function TodoTittle() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <div className="todoTittle">
      <h1>
        Has completado {completedTodos} de {totalTodos} tareas
      </h1>
    </div>
  );
}

export default TodoTittle;
