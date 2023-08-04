"use client";
import TodoItem from "./TodoItem";
import { useGetAllTodoQuery } from "../store/features/todoApi";
const TodoList = () => {
  const { data } = useGetAllTodoQuery({});
  console.log(data);
  return (
    <section className="todolist-container">
      {data?.map((todo: any, key: any) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </section>
  );
};

export default TodoList;
