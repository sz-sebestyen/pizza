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

        <Submit />
      </div>
    </div>
  );
}

export default BookForm;
