import React from "react";

function CloseButton({ setIsBooking }) {
  return <button onClick={() => setIsBooking(false)}>x</button>;
}

export default CloseButton;
