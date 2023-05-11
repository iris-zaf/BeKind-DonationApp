import React from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCard,
  MDBCardText,
} from "mdb-react-ui-kit";

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
    <MDBContainer fluid className="my-5">
      {" "}
      <h5>My Donations </h5>
      <MDBRow className="w-100 row-cols-1 row-cols-md-3 g-5">
        {history.map((donation) => {
          return (
            <MDBCard key={donation.id}>
              <MDBCardImage
                position="top"
                alt="..."
                src={donation.coverImageUrl}
              />
              <MDBCardBody>
                <MDBCardText style={{ fontSize: "15px" }}>
                  {donation.amount}&#8364;
                </MDBCardText>
                <MDBCardText>{donation.name}</MDBCardText>
                <MDBCardText style={{ fontSize: "15px" }}>
                  {donation.location}
                </MDBCardText>
                <MDBCardTitle style={{ fontSize: "12px" }}>
                  {donation.description}
                </MDBCardTitle>
                <div style={{ fontSize: "12px" }}>
                  <p style={{ marginBottom: "0px", marginTop: "20px" }}>
                    Learn more:
                  </p>
                  <a
                    href={donation.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {donation.profileUrl}
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}

export default History;
