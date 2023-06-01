import React from "react";
import myGif from "./delivery.gif";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
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
        <div>Oops! The payment was unsuccessful.</div>
        <br></br>
        <br />{" "}
        <div>
          Go back to <Link to="/">safety</Link> ⬅️
        </div>
      </div>
    </>
  );
}

export default Error;
