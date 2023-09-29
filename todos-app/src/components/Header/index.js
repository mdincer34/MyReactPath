import { useState } from "react";

function Header({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const onChangeInput = (e) => {
    setTodo(e.target.value);
  };

  const onChangeSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onChangeSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={onChangeInput}
          value={todo}
          autoFocus
        />
      </form>
    </header>
  );
}

export default Header;
