"use client";
import moment from "moment";
import { FiEdit, FiTrash } from "react-icons/fi";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../store/features/todoApi";
import { useState } from "react";

interface todoStateProps {
  todo: {
    _id: number;
    title: string;
    createdAt: string;
  };
}

const TodoItem: React.FC<todoStateProps> = ({ todo }) => {
  const [editText, setEditText] = useState("");
  const [isEditAble, setIsEditAble] = useState(false);
  const [deleteTodo, response] = useDeleteTodoMutation();
  const [updateTodo, res] = useUpdateTodoMutation();
  // console.log(res);
  const handleEdit = () => {
    setIsEditAble(() => !isEditAble);
  };

  const handleEditForm = (e: any, title: string) => {
    e.preventDefault();
    updateTodo(todo._id);

    setIsEditAble(() => !isEditAble);
    setEditText("");
  };

  return (
    <div className="todo-item ">
      <div className="todo-item-left">
        <span className="time">
          {moment(todo.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </span>
        {isEditAble && (
          <form
            onSubmit={(e) => handleEditForm(e, todo.title)}
            className="edit-form"
          >
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-input"
              type="text"
            />
          </form>
        )}
        {!isEditAble ? <p className="title">{todo.title}</p> : null}
      </div>
      <div className="task-item-right">
        <button onClick={() => handleEdit()} className="edit-btn">
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
