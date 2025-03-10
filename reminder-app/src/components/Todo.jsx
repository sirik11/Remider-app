import { useState } from "react";
import { useDispatch } from "react-redux";

import "../css/styles.css";
import { dragTodos } from "../features/todo/todoSlice";

const Todo = ({
  id,
  description,
  completed,
  handleDelete,
  handleCheckboxClick,
  handleClick,
}) => {
  const dispatch = useDispatch();
  const [draggedTodoId, setDraggedTodoId] = useState(null);

  function handleDragStart(e) {
    setDraggedTodoId(parseInt(e.currentTarget.id));
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
  }

  function handleDragLeave(e) {
    e.currentTarget.classList.remove("drag-over");
  }

  function handleDrop(e, id) {
    e.preventDefault();
    e.currentTarget.classList.remove("drag-over");
    const dragIdx = id + 1; // prop ids start from 0
    const dropIdx = getDropIndex(e.clientY);

    const ids = { dragIdx, dropIdx };

    dispatch(dragTodos(ids));

    setDraggedTodoId(null);
  }

  function getDropIndex(clientY) {
    const dropTargets = Array.from(
      document.querySelectorAll("li:not(.dragging)")
    );
    return dropTargets.reduce(
      (closestIndex, dropTarget, index) => {
        const rect = dropTarget.getBoundingClientRect();
        const distance = Math.abs(rect.top - clientY);

        if (distance < closestIndex.distance) {
          return { distance, index };
        } else {
          return closestIndex;
        }
      },
      { distance: Infinity, index: -1 }
    ).index;
  }

  return (
    <div className="container">
      <ul className="todo-list">
        <li
          key={id}
          draggable={true}
          className={draggedTodoId === id ? "dragging" : ""}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, id)}
        >
          <input
            type="checkbox"
            checked={completed}
            onChange={() => handleCheckboxClick(id)}
          />
          <label
            className={completed ? "red" : "blue"}
            htmlFor={`todo-${id}`}
            onClick={() => handleClick(id)}
          >
            {description}
          </label>
          <span className="done">{completed && "Done"}</span>
          <button onClick={() => handleDelete(id)} />
        </li>{" "}
      </ul>
    </div>
  );
};

export default Todo;
