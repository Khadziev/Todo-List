import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTodos } from "../../redux/features/todos";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import PostFilter from "../sort/PostFilter";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.todos.loading);
  const todos = useSelector((state) => state.todos.items);
  const error = useSelector((state) => state.todos.error);
  const todo = useSelector((state) => state.todos.items);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <PostFilter />
      <AddTodo />
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              <Todos todo={todo} key={todo.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
