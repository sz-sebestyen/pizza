import React from "react";
import ScreenShadow from "./ScreenShadow";
import Submit from "./Submit";
import CloseButton from "./CloseButton";

function BookForm({ setIsBooking }) {
  return (
    <div>
      <ScreenShadow {...{ setIsBooking }} />

      <div>
        <CloseButton {...{ setIsBooking }} />

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" />

        <label htmlFor="time">Time</label>
        <input type="time" name="time" id="time" />

        <label htmlFor="seats">Number of seats</label>
        <input type="number" name="seats" id="seats" />

        <Submit />
      </div>
    </div>
  );
}

export default BookForm;
