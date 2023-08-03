import TodoList from "./components/TodoList";
import Todos from "./components/Todos";

export default function Home() {
  return (
    <main className="main-container">
      <Todos />
      <TodoList />
    </main>
  );
}
