import React, { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask/LoadingMask";
import FrontPage from "./components/FrontPage/FrontPage";
import Menu from "./components/Menu/Menu";
import BookButton from "./components/BookButton/BookButton";
import BookForm from "./components/BookForm/BookForm";

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
