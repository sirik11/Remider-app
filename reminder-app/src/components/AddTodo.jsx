import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/todoActions";

import "../css/styles.css";

const AddTodo = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description !== "") dispatch(addTask(description)); // only add Task if the description is not empty

    setDescription(""); // clear the textarea
  };
  return (
    <div className="addTodo">
      <form>
        <div>
          <label>Descrption</label>
        </div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          {" "}
          <button type="submit" onClick={handleSubmit}>
            {" "}
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
