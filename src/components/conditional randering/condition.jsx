// Condition.js
import React, { useState } from "react";
import ConditionalComponent from "./ConditionalComponent";
import "./Condition.css";

function Condition() {
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState(false);

  function handleTemp(e) {
    setTemp(e.target.value);
  }

  function display() {
    setWeather(true);
  }

  return (
    <div className="container">
      <div>
        <input
          className="input-field"
          type="text"
          value={temp}
          onChange={handleTemp}
          placeholder="Enter temperature"
        />
        <button className="weather-btn" type="button" onClick={display}>
          Check Weather
        </button>
      </div>
      {weather && <ConditionalComponent p={temp} />}
    </div>
  );
}

export default Condition;
