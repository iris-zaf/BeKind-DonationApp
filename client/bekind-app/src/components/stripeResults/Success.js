import React from "react";

import myGif from "./save-money.gif";
export default function Success() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "3em",
      }}
    >
      {" "}
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_bskjzmma.json"
        background="transparent"
        speed="1"
        style={{ width: "200px", height: "200px" }}
        loop
        autoplay
      ></lottie-player>
      <h2>💫Thank you for your donation 💫</h2>{" "}
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_bskjzmma.json"
        background="transparent"
        speed="1"
        style={{ width: "200px", height: "200px" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}
