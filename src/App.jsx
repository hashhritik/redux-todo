import React from 'react';
import AddTodoForm from './TodoForm';
import TodoList from './TodoList';
import TotalCompleteItems from './TotalCompleteItems';
import FetchTodos from './FetchTodos';

export default function App() {
  return (
    <div className="h-screen bg-gray-100">
      <h1 className="bg-cyan-500 h-[55px] text-cyan-50 text-center flex justify-center items-center text-2xl md:text-4xl font-bold">
        TO-DO
      </h1>
      <div className="p-5 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto mt-5">
        <AddTodoForm />
        <TodoList />
        <FetchTodos />
        <TotalCompleteItems />
      </div>
    </div>
  );
}

