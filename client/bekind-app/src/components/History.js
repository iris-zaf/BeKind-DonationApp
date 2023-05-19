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
      <h4 style={{ margin: "2em" }}>My Donations </h4>
      <MDBContainer fluid className="my-5 d-flex">
        {" "}
        <MDBRow className="w-100 row-cols-1 row-cols-md-5">
          {history.map((donation) => {
            return (
              <MDBCard
                key={donation.id}
                style={{
                  border: "3px solid  rgb(253,170,47)",
                  margin: "2em",
                }}
              >
                <MDBCardImage
                  position="top"
                  alt="..."
                  src={donation.coverImageUrl}
                />
                <MDBCardBody>
                  <p style={{ fontSize: "12px" }}>Donated amount:</p>
                  <MDBCardText style={{ fontSize: "15px" }}>
                    $
                    {new Intl.NumberFormat(undefined, {
                      style: "currency",
                      currency: "EUR",
                    }).format(donation.amount)}
                    ;
                  </MDBCardText>
                  <MDBCardText style={{ fontSize: "18px" }}>
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
