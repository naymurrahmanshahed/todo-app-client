"use client";
import moment from "moment";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useDeleteTodoMutation } from "../store/features/todoApi";

interface todoStateProps {
  todo: {
    _id: number;
    title: string;
    createdAt: string;
  };
}

const TodoItem: React.FC<todoStateProps> = ({ todo }) => {
  const [deleteTodo, response] = useDeleteTodoMutation();
  console.log(response);
  return (
    <div className="todo-item ">
      <div className="todo-item-left">
        <span className="time">
          {moment(todo.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </span>
        <p className="title">{todo.title}</p>
      </div>
      <div className="task-item-right">
        <button className="edit-btn">
          <FiEdit />
        </button>
        <button onClick={() => deleteTodo(todo._id)} className="delete-btn">
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
