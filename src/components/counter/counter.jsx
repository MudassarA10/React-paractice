import React, { useEffect, useState } from "react";
import "./counter.css"; // Import the CSS file
// import Condition from "../conditional randering/condition";

function Counter() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count > 0 ? count - 1 : 0);
  }

  function reset() {
    setCount(0);
  }

  function show() {
    setState(!state);
  }

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    console.log("kashif welcome to");
  }, [count]);

  return (
    <>
      <div className="container">
        <div className="count">{count}</div>
        <div className="btn-container">
          <button className="btn" onClick={Increment}>
            Increment
          </button>
          <button className="btn" onClick={Decrement}>
            Decrement
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>
          <button className="btn" onClick={show}>
            Click to see data
          </button>
        </div>
        {state ? <Condition /> : null}
      </div>
    </>
  );
}

export default Counter;
