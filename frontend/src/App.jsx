import React, { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask/LoadingMask";
import FrontPage from "./components/FrontPage/FrontPage";
import Menu from "./components/Menu/Menu";
import BookButton from "./components/BookButton/BookButton";
import BookForm from "./components/BookForm/BookForm";
import Introduction from "./components/Introduction/Introduction";

const LOADING_MASK_DURATION = 2000; // milliseconds

function App() {
  const [menu, setMenu] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isBooking, setIsBooking] = useState(false);

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
    setTimeout(() => {
      setIsLoading(false);
    }, LOADING_MASK_DURATION);
  }, []);

  return (
    <div className="bg-easy font-roboto text-dark">
      {isLoading && <LoadingMask />}
      <FrontPage />

      <Introduction />

      {menu && <Menu {...{ menu }} />}
      <BookButton {...{ setIsBooking }} />
      {isBooking && <BookForm {...{ setIsBooking }} />}
    </div>
  );
}

export default App;
