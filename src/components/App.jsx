import React from "react";
import { useState } from "react";

let nextId = 0;
function App() {
  const [name, setname] = useState("");
  const [items, setitems] = useState([]);

  function handleClick() {
    setitems([...items, { id: nextId++, name: name }]);
  }
  function handleChange(e) {
    setname(e.target.value);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={name} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      {/* <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            {"    "}
            <button
              onClick={() => {
                setitems(items.filter((i) => i.id !== item.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
