import Pizza from "./Pizza";

import React from "react";

function Menu({ menu }) {
  return (
    <div>
      Menu
      {menu?.map((pizza) => (
        <Pizza key={pizza.name} {...{ pizza }} />
      ))}
    </div>
  );
}

export default Menu;
