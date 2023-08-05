"use client";
import TodoItem from "./TodoItem";
import { useGetAllTodoQuery } from "../store/features/todoApi";
const TodoList = () => {
  const { data, isLoading } = useGetAllTodoQuery({});

  return (
    <section className="todolist-container">
      {isLoading && <span className="loading">Loading</span>}
      {!isLoading && (
        <>
          {data?.map((todo: any, key: any) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </>
      )}
    </section>
  );
};

export default TodoList;
