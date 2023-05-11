import React from "react";

import myGif from "./save-money.gif";
export default function Success() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img
        src={myGif}
        alt="saveMoney"
        position="top"
        style={{
          width: "10em",
        }}
      />

      <p>Thank you for your donation 💫</p>
    </div>
  );
}
