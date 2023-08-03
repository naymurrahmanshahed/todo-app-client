const Todos = () => {
  return (
    <section className="todo-container">
      <form className="todo-fields">
        <input
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
