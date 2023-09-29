
function List({todos}) {
  const Delete = (index) => document.getElementById(`todo-${index}`).classList.toggle("completed");
  return (
    <ul className="todo-list">
      {todos.map((item, index) => 
        <li key={index} id={`todo-${index}`}>
          <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>{item}</label>
            <button className="destroy" onClick={() => Delete(index)}></button>
          </div>
        </li>
      )}
    </ul>
  );
}

export default List;
