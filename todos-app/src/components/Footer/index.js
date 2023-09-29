import { useState } from "react";

function Footer({ count, setTodos, todos }) {
  const [temp, setTemp] = useState([...todos]);
  const removeAll = () => {
    if (todos) {
      const items = document.getElementsByClassName("completed");
      const itemContext = Array.from(items).map((item) => item.textContent); // Örneğin, her görevin bir "data-id" özelliği varsa
      const updatedTodos = todos.filter((item) => !itemContext.includes(item)); // Veya uygun özellikleri karşılaştırın
      setTodos(updatedTodos);
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("completed");
      }
    }
  };
  const listRemoved = () => {
    if (todos) {
      const items = document.getElementsByClassName("completed");
      const itemContext = Array.from(items).map((item) => item.textContent); // Örneğin, her görevin bir "data-id" özelliği varsa
      const updatedTodos = todos.filter((item) => itemContext.includes(item)); // Veya uygun özellikleri karşılaştırın
      setTodos(updatedTodos);
    }
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" onClick={() => setTodos(temp)} className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/" onClick={() => listRemoved()}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => removeAll()}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
