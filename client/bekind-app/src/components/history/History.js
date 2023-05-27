import React from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCardBody,
  MDBCardImage,
  MDBCard,
  MDBCardText,
} from "mdb-react-ui-kit";
import "../history/history.css";
import { useState, useEffect } from "react";

function History() {
  const [history, setHistory] = useState([]);
  let myToken = localStorage.getItem("token");
  const navigate = useNavigate();
  async function getHistory() {
    let response = await axios.get("http://localhost:8080/history", {
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
    });
    console.log(response);
    if (response.data.length === 0) {
      alert("No donations made");
      return navigate("/");
    }
    setHistory(response.data);
  }
  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        {" "}
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_udTJtk.json"
          background="transparent"
          speed="1"
          style={{ width: " 7em", height: "7em" }}
          loop
          autoplay
        ></lottie-player>
        <h4 className="myDonation">My Donations </h4>
      </div>

      <MDBContainer fluid className="my-5 d-flex">
        {" "}
        <MDBRow className="w-100 row-cols-1 row-cols-md-5">
          {history.map((donation) => {
            return (
              <MDBCard
                key={donation.id}
                style={{
                  margin: "2em",
                }}
              >
                <div className="imageContainer">
                  <MDBCardImage
                    className="cardImg"
                    position="top"
                    alt="card-image"
                    src={donation.coverImageUrl}
                  />
                </div>
                <MDBCardBody className="p-2">
                  <p style={{ fontSize: "12px" }}>Donated amount:</p>
                  <MDBCardText style={{ fontSize: "15px" }}>
                    {new Intl.NumberFormat(undefined, {
                      style: "currency",
                      currency: "EUR",
                    }).format(donation.amount)}
                  </MDBCardText>
                  <MDBCardText className="title-name">
                    {donation.name}
                  </MDBCardText>
                  <MDBCardText style={{ fontSize: "12px" }}>
                    {donation.location}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default History;
