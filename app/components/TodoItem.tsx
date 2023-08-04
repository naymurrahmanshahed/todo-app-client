"use client";
import moment from "moment";
import { FiEdit, FiTrash } from "react-icons/fi";

interface todoStateProps {
  todo: {
    title: string;
    createdAt: string;
  };
}

const TodoItem: React.FC<todoStateProps> = ({ todo }) => {
  return (
    <div className="todo-item ">
      <div className="todo-item-left">
        <span className="time">
          {moment(todo.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </span>
        <p className="title">{todo.title}</p>
      </div>
      <div className="task-item-right">
        <button>
          <FiEdit />
        </button>
        <button>
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
