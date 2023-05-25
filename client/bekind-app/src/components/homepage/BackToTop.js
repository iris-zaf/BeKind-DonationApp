import React from "react";
import { useEffect, useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",

            fontSize: "10px",
            borderRadius: "50px",

            background: " grey",
            border: " none",
          }}
          onClick={scrollUp}
        >
          <MDBIcon fas icon="angle-up" />
          Top
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
