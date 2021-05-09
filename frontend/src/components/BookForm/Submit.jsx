import React from "react";

function Submit({ disabled }) {
  return <button {...{ disabled }}>I book the table</button>;
}

export default Submit;
