import React, { useState } from "react";
/*
 * build a todo
 * it should have heading "Todo Item"
 * show a todo item of "learn react Testing"
 * create a button that can mark it complete
 * once btn clicked, completed should appear next to it
 * click again, it should disappear
 */

function ToDo() {
  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");
  const [savedInput, saveInput] = useState("");
  function addItem(e) {
    e.preventDefault();
    saveInput(input);
    console.log(item);
    setItem([...item, input]);
    setInput(savedInput);
  }
  return (
    <>
      <h1>My Trinkets</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {item.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ToDo;
