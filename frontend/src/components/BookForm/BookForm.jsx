import React, { useState, useEffect } from "react";
import ScreenShadow from "./ScreenShadow";
import Submit from "./Submit";
import CloseButton from "./CloseButton";

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

  useEffect(() => {}, [name]);

  return (
    <div>
      <ScreenShadow {...{ setIsBooking }} />

      <div>
        <CloseButton {...{ setIsBooking }} />

        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
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
            />
          </div>
        </div>

        <Submit />
      </div>
    </div>
  );
}

export default BookForm;
