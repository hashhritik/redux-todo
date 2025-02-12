import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchTodos } from "../redux/TodoSlice";

const useFetchTodos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch(fetchTodos(response.data));
      } catch (error) {
        console.error("Failed to fetch todos", error);
      }
    };

    fetchData();
  }, [dispatch]);
};

export default useFetchTodos;
