import React from "react";

function ConditionalComponent(props) {
  return (
    <div>
      {props.p <= 10 ? (
        <p>Its too cold take care friend</p>
      ) : props.p <= 20 ? (
        <p>Its sunny today enjoy yourself</p>
      ) : props.p <= 30 ? (
        <p>Its awesome weather just enjoy it</p>
      ) : props.p <= 40 ? (
        <p>Its hot today dont be bother just drink water</p>
      ) : props.p <= 50 ? (
        <p>Its too hot just take cold water too bath</p>
      ) : null}
    </div>
  );
}

export default ConditionalComponent;
