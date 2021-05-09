import React from "react";

function Pizza({ pizza }) {
  return (
    <div className="">
      <div className="flex items-center justify-between gap-3">
        <div className="font-source-sans-pro text-xl">{pizza.name}</div>
        <div className="text-right whitespace-nowrap">
          {pizza.price.HUF} Ft.
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="font-roboto text-sm">
          {pizza.ingredients.hu.join(", ")}
        </div>
        <div className="text-right whitespace-nowrap text-xs">
          {pizza.weight}
        </div>
      </div>
    </div>
  );
}

export default Pizza;
