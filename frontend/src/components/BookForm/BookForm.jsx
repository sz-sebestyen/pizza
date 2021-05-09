import React, { useState, useEffect, useRef } from "react";
import ScreenShadow from "./ScreenShadow";
import Submit from "./Submit";
import CloseButton from "./CloseButton";
import useValidate from "./useValidate";

function BookForm({ setIsBooking }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    seats: 1,
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const { name, email, date, time, seats } = form;
  const formRef = useRef(null);

  const areValid = [
    useValidate("name", formRef, name),
    useValidate("email", formRef, email),
    useValidate("date", formRef, date),
    useValidate("time", formRef, time),
    useValidate("seats", formRef, seats),
  ].reduce((acc, cur) => acc && cur);

  return (
    <div>
      <ScreenShadow {...{ setIsBooking }} />

      <div>
        <CloseButton {...{ setIsBooking }} />

        <div ref={formRef}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              pattern="\p{L}+\s\p{L}+"
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              minLength="3"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={form.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div>
            <label htmlFor="time">Time</label>
            <input
              type="time"
              name="time"
              id="time"
              value={form.time}
              onChange={handleChange}
              required
              min={new Date(new Date().getTime() + 30 * 60000).toLocaleString(
                "en-GB",
                {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: false,
                }
              )}
            />
          </div>

          <div>
            <label htmlFor="seats">Number of seats</label>
            <input
              type="number"
              name="seats"
              id="seats"
              value={form.seats}
              onChange={handleChange}
              required
              min="1"
              max="6"
            />
          </div>
        </div>

        <Submit disabled={!areValid} />
      </div>
    </div>
  );
}

export default BookForm;
