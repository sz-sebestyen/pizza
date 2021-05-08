import React, { useState, useEffect } from "react";

function App() {
  const [menu, setMenu] = useState();

  const getMenu = async () => {
    try {
      const res = await fetch("/menu");
      setMenu(await res.json());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    if (menu) console.log(menu);
  }, [menu]);

  return <div className="bg-black">app</div>;
}

export default App;
