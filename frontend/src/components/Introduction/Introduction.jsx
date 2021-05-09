import React from "react";
import bg from "../../introd-pic.jpeg";

function Introduction() {
  return (
    <div className="min-h-screen md:min-h-0 flex flex-col sm:flex-row bg-white max-w-screen-sm mx-auto">
      <div className="flex-0 px-20 py-10 sm:flex-1 bg-primary-light">
        Válassz a széles pizza választékunkból és nézz be hozzánk. Lehetőséged
        van asztalt is foglalni gyönyörű pizzériánkban. Bla bla bla, tral la la.
      </div>
      <div
        className="bg-center bg-cover flex-1"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
    </div>
  );
}

export default Introduction;
