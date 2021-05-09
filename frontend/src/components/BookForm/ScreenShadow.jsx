import React from "react";

function ScreenShadow({ setIsBooking }) {
  return (
    <div
      className="bg-opacity-50 bg-white h-full"
      onClick={() => setIsBooking(false)}
    ></div>
  );
}

export default ScreenShadow;
