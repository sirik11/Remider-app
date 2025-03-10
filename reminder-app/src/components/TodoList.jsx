import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTodo } from "../actions/todoActions";

import Todo from "./Todo";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleCheckboxClick = (id) => {
    const todo = todos.filter((todo) => todo.id === id);
    dispatch(updateTodo(id, !todo[0].completed));
  };
  const handleClick = (id) => {
    const todo = todos.filter((todo) => todo.id === id);
    dispatch(updateTodo(id, !todo[0].completed));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h1 id="header">Tasks</h1>

      {todos.map((todo) => (
        <Todo
          id={todo.id}
          description={todo.description}
          key={todo.id}
          completed={todo.completed}
          handleCheckboxClick={handleCheckboxClick}
          handleDelete={handleDelete}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default TodoList;
