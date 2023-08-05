"use client";

import { useState } from "react";
import { useCreateTodoMutation } from "../store/features/todoApi";

const Todos = () => {
  const [title, setTitle] = useState("");
  const [createTodo, response] = useCreateTodoMutation({});
  console.log(response);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTodo({ title });
    setTitle("");
  };
  return (
    <section className="todo-container">
      <form onSubmit={handleSubmit} className="todo-fields">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="input-field"
          type="text"
          placeholder="What things to do"
        />
        <button className="input-button" type="submit">
          Add Task
        </button>
      </form>
    </section>
  );
};

export default Todos;
