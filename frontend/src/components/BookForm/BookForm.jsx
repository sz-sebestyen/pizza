import React, { useState, useRef } from "react";
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
    <div className="fixed inset-0 bg-opacity-50 bg-white ">
      {/* <ScreenShadow {...{ setIsBooking }} /> */}

      <div className="max-w-screen-sm flex flex-col gap-3 relative bg-white h-full p-3 mx-auto">
        <CloseButton {...{ setIsBooking }} />

        <div className="flex flex-col gap-3" ref={formRef}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              className="border rounded"
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              minLength="3"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="border rounded"
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date">Date</label>
            <input
              className="border rounded"
              type="date"
              name="date"
              id="date"
              value={form.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="time">Time</label>
            <input
              className="border rounded"
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

          <div className="flex flex-col">
            <label htmlFor="seats">Number of seats</label>
            <input
              className="border rounded"
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

        <div className="flex justify-center items-center">
          <Submit disabled={!areValid} form={form} />
        </div>
      </div>
    </div>
  );
}

export default BookForm;
