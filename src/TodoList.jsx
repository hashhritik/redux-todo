import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { filterTodo } from "./redux/TodoSlice";
import InfiniteScroll from "react-infinite-scroll-component";

const TodoList = () => {
  const todos = useSelector((state) =>
    state.todos.filteredTodos.length > 0 ? state.todos.filteredTodos : state.todos.todos
  );
  const dispatch = useDispatch();

  const [searchTask, setSearchTask] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [visibleTodos, setVisibleTodos] = useState([]);

  useEffect(() => {
    setVisibleTodos(todos.slice(0, 10));
    setHasMore(todos.length > 10);
  }, [todos]);

  const handleSearchTask = (e) => {
    const searchValue = e.target.value;
    setSearchTask(searchValue);
    dispatch(filterTodo({ title: searchValue }));
    setHasMore(true);
  };

  const fetchMoreData = () => {
    if (visibleTodos.length >= todos.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setVisibleTodos((prevTodos) =>
        prevTodos.concat(todos.slice(prevTodos.length, prevTodos.length + 10))
      );
    }, 500);
  };

  return (
    <div className="mb-4 ">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTask}
          onChange={handleSearchTask}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="no-scrollbar scroll-smooth overflow-y-auto h-[450px]" id="scrollableDiv">
        <InfiniteScroll
          dataLength={visibleTodos.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="flex justify-center items-center mt-8">
              <button
                disabled
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.231 1.69419 37.7697 4.19778 38.4069 6.62326C39.044 9.04874 41.5322 10.5135 43.9836 10.1436C47.9823 9.46745 52.0487 9.45692 56.0432 10.1082C61.7914 10.9634 67.2861 13.0029 72.2069 16.0917C77.1277 19.1806 81.3753 23.2621 84.6422 28.0676C87.1265 31.687 89.0517 35.6586 90.3825 39.8165C91.1562 42.1913 93.5422 43.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </button>
            </div>
          }
          scrollableTarget="scrollableDiv"
        >
          <ul>
            {visibleTodos.map((todo) => (
              <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
            ))}
          </ul>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default TodoList;

