import Pizza from "./Pizza";

import React from "react";

function Menu({ menu }) {
  return (
    <div className="bg-white max-w-screen-sm mx-auto">
      <div className="text-3xl font-source-sans-pro text-primary text-center p-3">
        Menü
      </div>
      <div className="flex gap-2 flex-col p-3">
        {menu?.map((pizza) => (
          <Pizza key={pizza.name} {...{ pizza }} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
