import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    filteredTodos: [],
  },

  reducers: {
    fetchTodos: (state, action) => {
      state.todos = action.payload 
      state.filteredTodos = state.todos; 
    },
    addTodo: (state, action) => {
      const todo = {
        id: new Date().getTime(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.unshift(todo);
      state.filteredTodos = state.todos;
    },
    toggleComplete: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].completed = action.payload.completed;
        state.filteredTodos = state.todos;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.filteredTodos = state.todos;
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].title = action.payload.title;
        state.filteredTodos = state.todos;
      }
    },
    filterTodo: (state, action) => {
      state.filteredTodos = state.todos.filter((todo) =>
        todo.title.toLowerCase().includes(action.payload.title.toLowerCase())
      );
    },
  },
});

export const {
  fetchTodos,
  addTodo,
  toggleComplete,
  deleteTodo,
  editTodo,
  filterTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
