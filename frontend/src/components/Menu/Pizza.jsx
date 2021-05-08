import React from "react";

function Pizza({ pizza }) {
  return (
    <div>
      <div>{pizza.name}</div>
      <div>{pizza.ingredients.hu.join(", ")}</div>
      <div>{pizza.weight}</div>
      <div>{pizza.price.HUF}</div>
    </div>
  );
}

export default Pizza;
