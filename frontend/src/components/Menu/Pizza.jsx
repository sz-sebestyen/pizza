import React from "react";

function Pizza({ pizza }) {
  return (
    <div>
      <div className="font-source-sans-pro">{pizza.name}</div>
      <div className="font-roboto">{pizza.ingredients.hu.join(", ")}</div>
      <div>{pizza.weight}</div>
      <div>{pizza.price.HUF}</div>
    </div>
  );
}

export default Pizza;
