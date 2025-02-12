import React from "react";
import { useSelector } from "react-redux";
import { selectCompletedTodos } from "./redux/selector";

const TotalCompleteItems = () => {
  const todos = useSelector(selectCompletedTodos);

  return (
    <h4 className="mt-6 text-lg font-semibold text-gray-700 ">
      Total completed items:{" "}
      <span className="text-green-600">{todos.length}</span>
    </h4>
  );
};

export default TotalCompleteItems;
