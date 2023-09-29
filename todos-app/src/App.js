import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["Have a life!", "I'm trying brother.."]);
  return (
    <section className="todoapp App">
      <Header setTodos={setTodos} todos={todos} />
      <section className="main">
        <input className="toggle-all" id="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <List todos={todos} />
      </section>
      <Footer count={todos.length} todos={todos} setTodos={setTodos}/>
    </section>
  );
}

export default App;
