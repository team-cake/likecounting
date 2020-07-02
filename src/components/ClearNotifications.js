import React, { useState } from "react";


export default function ClearButton() {
  const initial_clearNotif = "Clear Notifications";
  const [clearNotif, set_clearNotif] = useState(initial_clearNotif);

  const reset = () => {
    console.log("Notifications have been reset");
    set_clearNotif();
  };

  return (
    <div>
      <h1>{clearNotif}</h1>
      <p>
        <button onClick={reset}>{set_clearNotif}Clear notifications</button>
      </p>
    </div>
  );
}
