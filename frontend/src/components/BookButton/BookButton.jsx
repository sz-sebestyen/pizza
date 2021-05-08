import React from "react";

function BookButton({ setIsBooking }) {
  return <button onClick={() => setIsBooking(true)}>Book a table</button>;
}

export default BookButton;
