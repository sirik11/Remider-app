import { useState, useEffect } from "react";
import AddTodo from "../components/AddTodo";
import NavBar from "../components/NavBar";
import TodoList from "../components/TodoList";
import { useDispatch } from "react-redux";
import "../css/styles.css";
import { fetchTodos } from "../actions/todoActions";

class Reminder {
  constructor() {}
}

const Home = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div className="home">
      <NavBar />
      <button onClick={() => setShow(!show)}> + add Task</button>
      {show && <AddTodo />}
      <TodoList />
    </div>
  );
};

export default Home;
