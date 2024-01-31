import { useState } from "react";
import "./App.css";
import Counter from "./components/counter/counter";
import Condition from "./components/conditional randering/condition";

function App() {
  // const [name, setName] = useState("");
  // const [lname, setLname] = useState("");
  // const [roll, setRoll] = useState(0);

  // function handleNameChange(e) {
  //   setName(e.target.value);
  // }

  // function handleLnameChange(e) {
  //   setLname(e.target.value);
  // }

  // function handleRollChange(e) {
  //   setRoll(e.target.value);
  // }

  // function handleSubmit() {
  //   console.log(name, lname, roll);

  // }

  return (
    <>
      {/* <Counter /> */}
      <Condition />
      {/* <div className="app">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" value={lname} onChange={handleLnameChange} />

        <label htmlFor="roll">Roll</label>
        <input type="number" id="roll" value={roll} onChange={handleRollChange} />

        <button type='submit' onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{lname}</h2>
        <h3>{roll}</h3>
      </div> */}
    </>
  );
}

export default App;
