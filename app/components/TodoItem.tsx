import { FiEdit, FiTrash } from "react-icons/fi";
const TodoItem = () => {
  return (
    <div className="todo-item ">
      <div className="todo-item-left">
        <p>Todo 1</p>
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
