import { createSelector } from "@reduxjs/toolkit";
const   selectTodos=(state)=>state.todos

export const selectCompletedTodos=createSelector([selectTodos],(todos)=>
todos.todos.filter((todo)=>todo.completed===true))