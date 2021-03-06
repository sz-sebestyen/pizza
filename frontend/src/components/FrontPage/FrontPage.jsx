import React from "react";
import Title from "./Title";

import bg from "../../background.jpeg";

function FrontPage() {
  return (
    <div
      className="h-screen flex justify-center items-center bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Title />
    </div>
  );
}

export default FrontPage;
