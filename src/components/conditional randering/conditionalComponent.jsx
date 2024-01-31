// ConditionalComponent.js
import React from "react";
import "./conditionalcomponent.css";

function ConditionalComponent(props) {
  return (
    <div className={`weather-container ${getWeatherClass(props.p)}`}>
      {props.p <= 10 ? (
        <p>It's too cold, take care, friend</p>
      ) : props.p <= 20 ? (
        <p>It's sunny today, enjoy yourself</p>
      ) : props.p <= 30 ? (
        <p>It's awesome weather, just enjoy it</p>
      ) : props.p <= 40 ? (
        <p>It's hot today, don't be bothered, just drink water</p>
      ) : props.p <= 50 ? (
        <p>It's too hot, just take cold water to bath</p>
      ) : null}
    </div>
  );
}

function getWeatherClass(temp) {
  if (temp <= 10) {
    return "cold";
  } else if (temp <= 20) {
    return "sunny";
  } else if (temp <= 30) {
    return "awesome";
  } else if (temp <= 40) {
    return "hot";
  } else if (temp <= 50) {
    return "too-hot";
  } else {
    return "";
  }
}

export default ConditionalComponent;
