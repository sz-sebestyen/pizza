import React from "react";

function CloseButton({ setIsBooking }) {
  return <button onClick={() => setIsBooking(false)}>close</button>;
}

export default CloseButton;
