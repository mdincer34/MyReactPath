import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log(filtered);
  return (
    <div>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span id="phoneNumber">{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <p>Total contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
