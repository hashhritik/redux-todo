import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/TodoSlice";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    dispatch(addTodo({ title }));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col sm:flex-row gap-5 justify-between">
        <input
          type="text"
          className="flex-1 form-control py-3 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary h-auto px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;

