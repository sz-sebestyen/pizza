import React from "react";
import Title from "./Title";

import bg from "../../background.jpeg";

function FrontPage() {
  return (
    <div
      className="h-100vh flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Title />
    </div>
  );
}

export default FrontPage;
