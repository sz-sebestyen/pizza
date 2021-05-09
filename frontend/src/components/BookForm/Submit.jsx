import React, { useState } from "react";

const SUCCESS_DURATION = 2000; // milliseconds

function Submit({ form, disabled }) {
  const [fetching, setFetching] = useState(false);
  const [success, setSuccess] = useState(false);

  const send = async () => {
    try {
      setFetching(true);

      const res = await fetch("/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log("sent: ", form);
      console.log(await res.text());

      setSuccess(true);
      setTimeout(() => setSuccess(false), SUCCESS_DURATION);
    } catch (error) {
      console.error(error);
      alert("Faild to book table!");
    } finally {
      setFetching(false);
    }
  };

  return (
    <button
      className="bg-secondary active:bg-secondary-dark hover:bg-secondary-dark text-white p-3 rounded my-6"
      disabled={disabled || fetching || success}
      onClick={send}
    >
      {success ? "Success" : "I book the table"}
    </button>
  );
}

export default Submit;
