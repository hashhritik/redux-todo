import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo } from './redux/TodoSlice';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
  
    const handleCheckboxClick = () => {
      dispatch(toggleComplete({ id, completed: !completed }));
    };
  
    const handleDeleteClick = () => {
      dispatch(deleteTodo({ id }));
    };
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      dispatch(editTodo({ id, title: newTitle }));
      setIsEditing(false);
    };
  
    const handleCancelClick = () => {
      setNewTitle(title);
      setIsEditing(false);
    };
  
    return (
      <li className={`list-group-item flex flex-col sm:flex-row justify-between items-center p-4 ${completed ? 'bg-green-100' : 'bg-white'} border-b border-gray-300`}>
        <div className="flex items-center w-full sm:w-auto space-x-3 mb-3 sm:mb-0">
          <input
            className="mr-3"
            type="checkbox"
            name="checkbox"
            onChange={handleCheckboxClick}
            checked={completed}
          />
          {isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="form-control w-full sm:w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <span className={`${completed ? 'line-through text-gray-500' : ''}`}>{title}</span>
          )}
        </div>
        <div className="space-x-2 flex flex-wrap gap-2">
          {isEditing ? (
            <>
              <button onClick={handleSaveClick} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                Save
              </button>
              <button onClick={handleCancelClick} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition">
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEditClick}
                className={`px-4 py-2 text-white rounded-md transition ${completed ? 'bg-gray-400 cursor-not-allowed opacity-50' : 'bg-blue-500 hover:bg-blue-600'}`}
                disabled={completed}
              >
                Edit
              </button>
              <button onClick={handleDeleteClick} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                Delete
              </button>
            </>
          )}
        </div>
      </li>
    );
  };
  
  export default TodoItem;
  
