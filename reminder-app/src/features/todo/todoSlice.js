import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [], loading: false, error: null },
  reducers: {
    fetchTodoStart: (state) => {
      state.loading = true;
    },
    fetchTodoSuccess: (state, action) => {
      state.todos = action.payload;
    },
    fetchTodoFailure: (state, action) => {
      state.error = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    addTodoFailure: (state, action) => {
      state.error = action.payload;
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = action.payload.completed;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    dragTodos: (state, action) => {
      const dragIdx = state.todos.findIndex(
        (todo) => todo.id === action.payload.dragIdx
      );
      const dropIdx = action.payload.dropIdx;
      //   console.log(dragIdx, dragIdx);
      if (dragIdx !== -1 && dropIdx !== -1 && dragIdx !== dropIdx) {
        const newTodos = [...state.todos];
        const [removedTodo] = newTodos.splice(dragIdx, 1);
        newTodos.splice(dropIdx, 0, removedTodo);
        state.todos = newTodos;
        // console.log(dragIdx, dragIdx, newTodos);
      }
    },
  },
});

export const {
  addTodo,
  addTodoFailure,
  toggleComplete,
  deleteTodo,
  fetchTodoStart,
  fetchTodoSuccess,
  fetchTodoFailure,
  dragTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
