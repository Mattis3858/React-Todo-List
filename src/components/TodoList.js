import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filterTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
