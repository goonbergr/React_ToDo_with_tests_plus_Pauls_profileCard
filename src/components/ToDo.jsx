import React, { useState } from "react";
/*
 * build a todo
 * it should have heading "Todo Item"
 * show a todo item of "learn react Testing"
 * create a button that can mark it complete
 * once btn clicked, completed should appear next to it
 * click again, it should disappear
 */

/*
  sudo coding the addItem function and exactly how it is buggy

  * input box starts with initial value of "asdf" being typed in
  * this value is not saved to input and is not saved to savedIn
  *button pressed for the first time*
  The order of listed hooks
  saveInput
  setItems
  setInput
  The order of executed hooks
  setInput (setting input to saved input or nothing if first input)
  setItem (adding input to array, now we are done with input)
  saveInput (saves input to state variable savedIn and clears input to   useState("empty string"))
  ! state variable initial states !
  |   input   |   savedIn   |   items   |   input box |
  |   ""      |   ""        |   []      |   "asdf"    | 
  * Events executed inside of the addItems function the first time
 
  |   "asdf"  |   ""        |  []       |   ""        | 
    * the value of the input state variable is not set using the setInput hook, it is implicitly set using value="input" within the element itself.
    * setInput will be the first to execute the second time when there is a value saved in savedIn

  * Events executed outside of the addItems function the first time
 
  |   "asdf"  |   ""        |  ["asdf"] |   ""        |
    * the value of the input state variable is added to the empty items array
  |   ""      |   "asdf"    |  ["asdf"] |   ""        | 
    * the value of the input state variable is saved in the value of the savedIn state variable
   
  ! state variable initial states !
  |   input   |   savedIn   |   items   |   input box |
  |   ""      |   "asdf"    |  ["asdf"] |   "qwerty"  | 
  * Events executed inside of the addItems function the second time
 
  |  "qwerty" |   "asdf"    |  ["asdf"]      |   ""   | 
    * the value of the input state variable is assumed to be the value that is in the input box
  
  * Events executed outside of the addItems function the second time
 
  |   ""      |   "asdf"     |  ["asdf", "qwerty"] |   ""        |
    * the value of the input state variable is added to the items array
  | "asdf"    |   "qwerty"   |  ["asdf", "qwerty"] | "value={input("asdf")}"| 
  | "asdf"    |   "qwerty"   |  ["asdf", "qwerty"] | "asdf"| 
    * setInput makes the value of the input box the value that was in savedIn which was "asdf"
    * saveInput makes the value of savedIn state variable the value that was in the input box
    * This will cause the values to cycle between themselves as the savedIn will always save what is in the input box upon render
    * Before the first render savedIn has nothing so it replaces it with nothing and simply saves what is in "input"
    * After the first render savedIn has the value of the previous input
    * This allows the previous value of savedIn to be entered into the input box before render, and the new input value to be saved as the new savedIn after the render
    * Now they both have values which means every render both values exchange places on which one is the in the input box
    * input is set using the value saved using saveInput after a value has be entered
    * savedIn is set using the first input value
    * the state of input is switched with the state of savedIn each render as setInput always puts the previous value into the input box, always allowing for the state to be flipped
    
    ! All of this is possible for one reason
    * the value of the input box is only reset upon render
    * This allows for some key events to happen
    1. If there hasn't been an input before, input is simply made to be an empty string after being added to the items array and savedIn state variable
    2. The savedIn state variable 
  */

function ToDo() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [savedIn, saveInput] = useState("");
  function addItem(e) {
    e.preventDefault();
    // setInput and saveInput were switched before but the order of execution does not change, setInput first, then saveInput
    setInput(savedIn);
    setItems([...items, input]);
    saveInput(input);
    console.log(`input ${input}`);
    console.log(`savedIn ${savedIn}`);
    console.log(...items);
  }
  console.log(`input ${input}`);
  console.log(`savedIn ${savedIn}`);
  console.log(...items);

  return (
    <section>
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
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default ToDo;
