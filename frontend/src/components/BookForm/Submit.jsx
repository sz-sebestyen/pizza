import React, { useState } from "react";

function Submit({ form, disabled }) {
  const [fetching, setFetching] = useState(false);

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

      console.log(await res.json());
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  };

  return (
    <button disabled={disabled && fetching} onClick={send}>
      I book the table
    </button>
  );
}

export default Submit;
