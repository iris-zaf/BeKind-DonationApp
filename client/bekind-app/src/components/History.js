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
        {history.map((charity) => {
          return (
            <MDBCard key={charity.id}>
              <MDBCardImage
                position="top"
                alt="..."
                src={charity.coverImageUrl}
              />
              <MDBCardBody>
                <MDBCardText>{charity.name}</MDBCardText>
                <MDBCardText style={{ fontSize: "15px" }}>
                  {charity.location}
                </MDBCardText>
                <MDBCardTitle style={{ fontSize: "12px" }}>
                  {charity.description}
                </MDBCardTitle>
                <div style={{ fontSize: "12px" }}>
                  <p style={{ marginBottom: "0px", marginTop: "20px" }}>
                    Learn more:
                  </p>
                  <a href={charity.profileUrl} target="_blank" rel="noreferrer">
                    {charity.profileUrl}
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
