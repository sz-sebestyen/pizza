import React from "react";

function BookButton({ setIsBooking }) {
  return (
    <div className="flex justify-center p-24 bg-primary-light">
      <button
        className="bg-secondary active:bg-secondary-dark hover:bg-secondary-dark text-white p-3 rounded"
        onClick={() => setIsBooking(true)}
      >
        Book a table
      </button>
    </div>
  );
}

export default BookButton;
