import axios from "axios";
import {
  addTodo,
  addTodoFailure,
  fetchTodoFailure,
  fetchTodoStart,
  fetchTodoSuccess,
  toggleComplete,
  deleteTodo,
} from "../features/todo/todoSlice";

const API_URL = "http://localhost:5000";
export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch(fetchTodoStart());
    const response = await axios.get(`${API_URL}/api/todos/`);

    if (response.status === 200) {
      // const todos = {}
      dispatch(fetchTodoSuccess(response.data));
    }
    return response;
  } catch (error) {
    dispatch(fetchTodoFailure(error));
    console.error(error);
    throw error;
  }
};

export const addTask = (description) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/api/todos/`, { description });
    if (response.status === 201) {
      dispatch(addTodo(response.data));
    }
    return response;
  } catch (error) {
    dispatch(addTodoFailure(error));
    console.error(error);
    throw error;
  }
};

export const updateTodo = (id, completed) => async (dispatch) => {
  try {
    const response = await axios.patch(`${API_URL}/api/todos/${id}/`, {
      completed,
    });

    if (response.status === 200) {
      const updated = { id, completed: response.data.completed };
      dispatch(toggleComplete(updated));
    }
    return response;
  } catch (error) {
    dispatch(addTodoFailure(error));
    console.error(error);
    throw error;
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/api/todos/${id}/`);

    if (response.status === 204) {
      dispatch(deleteTodo(id));
    }
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
