/*
 * build a todo
 * it should have heading "Todo Item"
 * show a todo item of "learn react Testing"
 * create a button that can mark it complete
 * once btn clicked, completed should appear next to it
 * click again, it should disappear
 */
const React = require("react");
const { useState } = React;

function ToDo() {
  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");
  function addItem(e) {
    e.preventDefault();
    setItem([...item, input]);
    setInput("");
  }
  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h1>My Tasks</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDo;
